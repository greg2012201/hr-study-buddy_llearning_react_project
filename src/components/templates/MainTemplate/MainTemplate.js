import Navigation from 'components/organisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.styles'
import React from 'react'

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    {children}
  </Wrapper>
)

MainTemplate.propTypes = {}

export default MainTemplate
