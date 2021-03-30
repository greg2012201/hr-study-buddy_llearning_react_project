import React, { useState, useContext } from 'react'

import { Button } from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'

import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper'
import { Title } from 'components/atoms/Title/Title'
import { UsersContext } from 'providers/UsersProvider'
const initialFormState = {
  name: '',
  attendance: '',
  average: '',
}
const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState)
  const { handleAddUser } = useContext(UsersContext)
  // const context = useContext(UsersContext)

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues, // rest pomaga pobrać wszystkie klucze na raz
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmitUser = (e) => {
    e.preventDefault()
    handleAddUser(formValues)
    // context.handleAddUser(formValues)
    setFormValues(initialFormState)
  }

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  )
}

export default AddUser
