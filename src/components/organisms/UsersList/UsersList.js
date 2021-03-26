import React from 'react'

import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'

import { StyledList, StyledTitle, Wrapper } from './UsersList.styles'

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students List</StyledTitle>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  )
}

export default UsersList
