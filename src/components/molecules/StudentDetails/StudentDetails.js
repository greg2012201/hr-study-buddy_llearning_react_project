import Course from '../Course/Course'
import React from 'react'
import { TitleWrapper, StudentDetailsTitle } from './StudentsDetails.style'
import { StyledAverage } from 'components/atoms/Average/Average'

const StudentDetails = ({ student }) => {
  return (
    <>
      <TitleWrapper>
        <StudentDetailsTitle>{student.name}</StudentDetailsTitle>
        <StyledAverage isBig value={student.average}>
          {student.average}
        </StyledAverage>
      </TitleWrapper>
      <Course />
    </>
  )
}

export default StudentDetails
