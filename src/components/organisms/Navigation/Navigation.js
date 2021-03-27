import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { Wrapper, Logo, LinkWrapper } from './Navigtion.styles'

const Navigation = ({ paths: { home, addUser } }) => (
  <Wrapper>
    {/* osobny komponent chyba tzreba zrobić
     */}
    <Logo>
      <h1>Study Buddy</h1>
    </Logo>
    <LinkWrapper>
      <Link to={home}>Dashboard</Link>
      <Link to={addUser}>Add User</Link>
      <Link>Settings</Link>
      <Link>Logout</Link>
    </LinkWrapper>
  </Wrapper>
)

Navigation.propTypes = {}

export default Navigation
