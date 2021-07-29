import { AuthProvider } from 'hooks/useAuth'
import React from 'react'
import { theme } from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorProvider } from 'hooks/useError'
import { Provider } from 'react-redux'
import { store } from 'store'

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <GlobalStyle />
            <AuthProvider>{children}</AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default AppProviders
