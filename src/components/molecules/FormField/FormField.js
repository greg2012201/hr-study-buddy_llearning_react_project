<<<<<<< HEAD
import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from '../../atoms/Input/Input'
import { Label } from '../../atoms/Label/Label'
=======
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
>>>>>>> testing

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
<<<<<<< HEAD
  ${Label} {
    margin: 10px 0;
  }
`
const FormField = ({
  onChange,
  value,
  label,
  name,
  id,
  type = 'text',
  ...props
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} />
    </Wrapper>
  )
}
=======

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ onChange, value, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
    </Wrapper>
  );
};
>>>>>>> testing

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
<<<<<<< HEAD
}

export default FormField
=======
};

export default FormField;
>>>>>>> testing
