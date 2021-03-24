import React from 'react'
import { Label } from 'components/atoms/Label/Label'
import { Input } from 'components/atoms/Input/Input'
import PropTypes from 'prop-types'

const FormField = ({ label, name, id, type = 'text', ...props }) => {
  return (
    <>
      <Label htmlFor={id}></Label>
      <Input name={name} id={id} type={type} />
    </>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default FormField
