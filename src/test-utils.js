// test-utils.js
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'
import AppProviders from 'providers/AppProviders'

const AllTheProviders = ({ children }) => {
  return <AppProviders theme={theme}>{children}</AppProviders>
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
