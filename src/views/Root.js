import React from 'react'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Wrapper } from './Root.styles'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import Dashboard from './Dashboard'
import AddUser from './AddUser'
import UsersProvider from 'providers/UsersProvider'

const Root = (props) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  )
}

export default Root
