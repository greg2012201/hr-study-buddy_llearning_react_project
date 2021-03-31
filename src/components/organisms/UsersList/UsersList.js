<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'

import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'

import { StyledList } from './UsersList.styles'

import { Title } from 'components/atoms/Title/Title'
import { UserShape } from 'types'
=======
import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';
>>>>>>> testing

const UsersList = ({ users }) => {
  return (
    <>
<<<<<<< HEAD
      <Title>Students List</Title>
      <StyledList>
        {users.map((userData, i) => (
=======
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
>>>>>>> testing
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
<<<<<<< HEAD
  )
}
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
}
export default UsersList
=======
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
>>>>>>> testing
