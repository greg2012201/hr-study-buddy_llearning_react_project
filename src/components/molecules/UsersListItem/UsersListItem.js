import React, { useContext } from 'react'

import Average from 'components/atoms/Average/Average'
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton'
import PropTypes from 'prop-types'

import { Info, Wrapper } from './UsersListItem.styles'
import { UserShape } from 'types'
import { UsersContext } from 'providers/UsersProvider'

const UsersListItem = ({ index, userData: { average, name, attendance } }) => {
  const { deleteUser } = useContext(UsersContext)
  return (
    <Wrapper>
      <Average averages={average} />
      <Info>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </Info>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  )
}

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
}

export default UsersListItem
