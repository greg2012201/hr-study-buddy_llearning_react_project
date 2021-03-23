import React, { useState, useEffect } from 'react'
import { users as usersData } from 'data/users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { Wrapper } from './UsersList.styles'

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData])
      } else {
        reject({ message: 'Error' })
      }
    }, 2000)
  })
}

const UsersList = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setLoadingState] = useState([])

  useEffect(() => {
    setLoadingState(true)

    mockAPI()
      .then((data) => {
        setLoadingState(false)
        setUsers(data)
      })
      .catch((err) => console.log(err))
    /*  return () => {
      window.removeEventListener('event', function) // jako przykład
    } */
  }, [])

  useEffect(() => {
    console.log('Loading state has changed')
  }, [isLoading])

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name)
    setUsers(filteredUsers)
  }
  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <ul>
        {users.map((userData, i) => (
          <UsersListItem
            deleteUser={deleteUser}
            key={userData}
            index={i}
            userData={userData}
          />
        ))}
      </ul>
    </Wrapper>
  )
}

export default UsersList
