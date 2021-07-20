import { AuthProvider } from 'hooks/useAuth'
import React from 'react'
import { theme } from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'

import { BrowserRouter as Router } from 'react-router-dom'

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </Router>
  )
}

export default AppProviders
