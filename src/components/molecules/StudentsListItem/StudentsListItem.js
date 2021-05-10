import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton'
import { StyledAverage, StyledInfo, Wrapper } from './StudentsListItem.styles'
import { UserShape } from 'types'
import { UsersContext } from 'providers/UsersProvider'

const StudentsListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext)

  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  )
}

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
}

export default StudentsListItem
