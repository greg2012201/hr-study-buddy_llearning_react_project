import { Button } from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'
import Note from 'components/molecules/Note/Note'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from 'store'
import styled from 'styled-components'
import { FormWrapper, Wrapper } from './Notes.styles'

const StyledFormField = styled(FormField)`
  height: ${({ isTextArea }) => (isTextArea ? '300px' : 'unset')};
`

const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`

const Notes = () => {
  const { register, handleSubmit, reset } = useForm()
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch()
  const handleAddNote = ({ title, content }) => {
    dispatch(addNote({ title, content }))
    reset()
  }
  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField label="Title" name="title" id="notes" {...register('title')} />
        <StyledFormField isTextArea label="Content" name="content" id="notes" {...register('content')} />
        <Button type="submit">Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  )
}

export default Notes
