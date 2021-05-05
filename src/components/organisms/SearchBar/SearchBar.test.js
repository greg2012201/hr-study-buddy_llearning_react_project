import { render, screen, fireEvent, waitFor } from 'test-utils'
import { setupServer } from 'msw/node'
import { handlers } from 'mocks/handlers'
import SearchBar from './SearchBar'

const server = setupServer(...handlers)

describe('Search Bar', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  it('Renders the component', () => {
    render(<SearchBar />)
    screen.getByText('Teacher')
    screen.getByPlaceholderText('Search')
  })
  it('Display users when search phrase is maching', async () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'ad' } })

    await screen.findByText(/Adam Romański/)
  })
  /*   it('Remove users when search prase is deleted', async () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: '' } })
    await expect(input.value).toBe('')
    await expect(input.placeholder).toBe('Search')
  }) */
  it('Hides the results when input is empty', async () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'ad' } })
    await screen.findByText(/Adam Romański/)

    fireEvent.change(input, { target: { value: '' } })
    await waitFor(() => {
      expect(screen.getByLabelText('results')).not.toBeVisible()
    })
  })
})
