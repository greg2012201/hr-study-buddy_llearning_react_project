import React from 'react'
import PropTypes from 'prop-types'

import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'

import { StyledList } from './UsersList.styles'
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper'
import { Title } from 'components/atoms/Title/Title'

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <ViewWrapper>
        <Title>Students List</Title>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </ViewWrapper>
    </>
  )
}
UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      attendance: PropTypes.string.isRequired,
      average: PropTypes.string.isRequired,
    })
  ),
  deleteUser: PropTypes.func,
}
export default UsersList
