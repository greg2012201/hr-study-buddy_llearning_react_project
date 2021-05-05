import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { StyledList } from './UsersList.styles'
import { UserShape } from 'types'
import { Title } from 'components/atoms/Title/Title'
import { useStudents } from 'hooks/useStudents'
import { useParams } from 'react-router'

const StudentsList = () => {
  const [students, setStudents] = useState([])
  const { id } = useParams()
  const { getStudents } = useStudents(id)
  useEffect(() => {
    ;(async () => {
      const students = await getStudents(id)
      setStudents(students)
    })()
  }, [getStudents, id])
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  )
}

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
}

export default StudentsList
