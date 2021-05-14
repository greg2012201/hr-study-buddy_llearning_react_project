import { Link, Redirect, useParams } from 'react-router-dom'
import { useStudents } from 'hooks/useStudents'
import { Title } from 'components/atoms/Title/Title'
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles'
import StudentsList from 'components/organisms/StudentsList/StudentsList'
import React, { useEffect, useState } from 'react'
import useModal from 'components/organisms/Modal/useModal'

import StudentDetails from 'components/molecules/StudentDetails/StudentDetails'
import Modal from 'components/organisms/Modal/Modal'
const Dashboard = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal()
  const [groups, setGroups] = useState([])
  const [currentStudent, setCurrentStudent] = useState({})
  const { id } = useParams()
  const { getGroups, getStudentById } = useStudents()
  useEffect(() => {
    ;(async () => {
      const groups = await getGroups()
      setGroups(groups)
    })()
  }, [getGroups])

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id)
    setCurrentStudent(student)

    handleOpenModal()
  }
  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />
  return (
    <Wrapper>
      <nav>
        <TitleWrapper>
          <Title as="h2">Group:{id}</Title>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}
            </Link>
          ))}
        </TitleWrapper>
      </nav>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? (
          <Modal handleCloseModal={handleCloseModal}>
            <StudentDetails student={currentStudent} />
          </Modal>
        ) : null}
      </GroupWrapper>
    </Wrapper>
  )
}

export default Dashboard
