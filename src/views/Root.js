import React, { useState } from 'react'
import { users as usersData } from 'data/users'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Wrapper } from './Root.styles'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import Dashboard from './Dashboard'
import AddUser from './AddUser'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
}
const Root = (props) => {
  const [users, setUsers] = useState(usersData)
  const [formValues, setFormValues] = useState(initialFormState)

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name)
    setUsers(filteredUsers)
  }
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues, // rest pomaga pobrać wszystkie klucze na raz
      [e.target.name]: e.target.value,
    })
  }
  const handleAddUser = (e) => {
    e.preventDefault()
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    }
    setUsers([newUser, ...users])
    setFormValues(initialFormState)
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
              </Route>
              <Route path="/">
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default Root
