import React from 'react'

import { Wrapper, Logo, StyledLink, LinkWrapper } from './Navigtion.styles'

const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>Study Buddy</h1>
    </Logo>

    <StyledLink exact to="/">
      Dashboard
    </StyledLink>
    <StyledLink to="/add-user">Add User</StyledLink>
    {/* <StyledLink to="/">Settings</StyledLink>
    <StyledLink to="/">Logout</StyledLink> */}
  </Wrapper>
)

export default Navigation
