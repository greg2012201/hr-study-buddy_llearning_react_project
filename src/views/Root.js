import React, { useState } from 'react'
import { users as usersData } from 'data/users'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Form from 'components/organisms/Form/Form'
import UsersList from 'components/organisms/UsersList/UsersList'
import Navigation from 'components/organisms/Navigation/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Wrapper } from './Root.styles'
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate.styles'

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
          <Navigation paths={{ home: '/', addUser: '/add-user' }} />
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
              </Route>
              <Route path="/">
                <UsersList deleteUser={deleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default Root
