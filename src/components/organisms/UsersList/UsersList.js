import React from 'react'
import PropTypes from 'prop-types'

import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'

import { StyledList } from './UsersList.styles'

import { Title } from 'components/atoms/Title/Title'
import { UserShape } from 'types'

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students List</Title>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  )
}
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
}
export default UsersList
