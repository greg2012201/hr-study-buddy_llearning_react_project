import React from 'react'
import { users } from 'data/users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { Wrapper } from './UsersList.styles'
const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, i) => (
        <UsersListItem index={i} userData={userData} /> // tutaj przekazujemy propsa przy użyciu map
      ))}
    </ul>
  </Wrapper>
)

export default UsersList
