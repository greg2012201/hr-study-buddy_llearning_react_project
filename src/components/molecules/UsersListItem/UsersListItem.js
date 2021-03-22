import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atoms/Button/Button'
import Average from 'components/atoms/Average/Average'
import { Wrapper, Info } from './UsersListItem.styles'

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <Average averages={average} />
    <Info>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </Info>
    <Button />
  </Wrapper>
)

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string,
  }),
}

export default UsersListItem
