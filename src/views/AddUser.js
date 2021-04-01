import React, {  useContext, useEffect, useReducer, useRef } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';
import { useWindowHeight } from 'hooks/useWindowSize';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent:false,
  error:'',
/*   confirmation:'',
  confirmationError:'', */
};



const AddUser = () => {
  
  const { handleAddUser } = useContext(UsersContext);
  const {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  } = useForm(initialFormState)
const ref = useRef(null);
/* const dimensions = useWindowHeight(); */
useEffect(()=>{
  if(ref.current) {
    ref.current.focus();
  }
},[])
 

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if(formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initialFormState)
      
    }else {
     handleThrowError('You need to give consent')
    }
  /*  validation(); */
    
  };
  /* const validation = () =>{
    const confirm = 'confirm';
    if(formValues.confirmation === confirm){
      dispatch ({
        type:'CONFIRMATION',
        succes:alert('success!!!')
        
      })
    }else {
      dispatch({type:'CONFIRMATION ERROR', colapse:alert('fail!!!')})
    }
  } */

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
    {/*   <Title>Screen width {dimensions.width}</Title>
      <Title>Screen height {dimensions.height}</Title> */}
      <FormField ref={ref} label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="Consent" id="consent" name="consent" type="checkbox" onChange={handleToggleConsent} />
      <Button  type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
     {/*  <FormField label="validation " id="validation" name="confirmation" value={formValues.validation} onChange={handleInputChange} /> */}
    </ViewWrapper>
  );
};

export default AddUser;
