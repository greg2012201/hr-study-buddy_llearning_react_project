import React from 'react'

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

export default UsersList
