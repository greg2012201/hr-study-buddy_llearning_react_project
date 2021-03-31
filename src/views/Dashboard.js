<<<<<<< HEAD
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper'
import UsersList from 'components/organisms/UsersList/UsersList'
import { UserShape } from 'types'
import { UsersContext } from 'providers/UsersProvider'

const Dashboard = () => {
  const { users } = useContext(UsersContext)
=======
import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);
>>>>>>> testing

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
<<<<<<< HEAD
  )
}

export default Dashboard
=======
  );
};

export default Dashboard;
>>>>>>> testing
