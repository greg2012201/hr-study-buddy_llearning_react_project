<<<<<<< HEAD
import React from 'react'

import { Wrapper, Logo, StyledLink } from './Navigtion.styles'

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
=======
import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
>>>>>>> testing
