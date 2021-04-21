import React from 'react'
import AddUser from './AddUser'
import Dashboard from './Dashboard'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from 'helpers/renderWithProviders'

describe('Form Field', () => {
  it('adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    )
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'test' } })
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } })
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } })
    fireEvent.click(screen.getByTestId('Consent'))
    fireEvent.click(screen.getByText('Add'))
    screen.getByText('test')
  })
  it('prevent adding user if it the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    )
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'test' } })
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } })
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } })
    fireEvent.click(screen.getByText('Add'))
    const newUser = screen.queryByText('test')
    expect(newUser).not.toBeInTheDocument()
  })
})
