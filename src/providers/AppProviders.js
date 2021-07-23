import { AuthProvider } from 'hooks/useAuth'
import React from 'react'
import { theme } from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'

import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorProvider } from 'hooks/useError'

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <GlobalStyle />
          <AuthProvider>{children}</AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  )
}

export default AppProviders
