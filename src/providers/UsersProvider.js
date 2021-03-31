<<<<<<< HEAD
import React, { useState } from 'react'
import { users as usersData } from 'data/users'
import PropTypes from 'prop-types'
=======
import React, { useState } from 'react';
import { users as usersData } from 'data/users';

>>>>>>> testing
export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
<<<<<<< HEAD
})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData)

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name)
    setUsers(filteredUsers)
  }

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    }
    setUsers([newUser, ...users])
  }
  return <UsersContext.Provider value={{ users, handleAddUser, deleteUser }}>{children}</UsersContext.Provider>
}

UsersProvider.propTypes = {}

export default UsersProvider
=======
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
>>>>>>> testing
