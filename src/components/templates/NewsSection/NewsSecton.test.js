import React from 'react'
import { screen, render } from 'test-utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import NewsSection, { query } from 'components/templates/NewsSection/NewsSection'

const mock = new MockAdapter(axios)

describe('News Section', () => {
  afterEach(() => {
    mock.reset()
  })

  it('Displays error when the article are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500)
    render(<NewsSection />)

    await screen.findByText(/Sorry/)
  })

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    })

    render(<NewsSection />)

    await screen.findAllByText(/Test/)
  })
  it('Displays loading information', async () => {
    render(<NewsSection />)
    await screen.findByText('Loading...')
  })
})
