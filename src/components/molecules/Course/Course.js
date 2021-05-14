import { StyledAverage } from 'components/atoms/Average/Average'

import { Label } from 'components/atoms/Label/Label'
import { Title } from 'components/atoms/Title/Title'
import { courses } from 'mocks/data/courses'
import React from 'react'
import { GradeList, Wrapper } from './Course.style'
const { course, grades } = courses
const Course = () => {
  return (
    <Wrapper>
      <div>
        <Label>Course:</Label>
        <Title>{course}</Title>
      </div>
      <GradeList>
        <Label>Average Grades</Label>
        {grades.map(({ id, name, grade }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <StyledAverage value={grade}>{grade}</StyledAverage>
            </li>
          )
        })}
      </GradeList>
    </Wrapper>
  )
}

export default Course
