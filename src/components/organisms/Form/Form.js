import React from 'react'

import { Button } from 'components/atoms/Button/Button'
import FormField
  from 'components/molecules/FormField/FormField' // tutaj importy chyba przeszkadzają

import {
  StyledTitle,
  Wrapper
} from '../UsersList/UsersList.styles'

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  )
}

export default Form
