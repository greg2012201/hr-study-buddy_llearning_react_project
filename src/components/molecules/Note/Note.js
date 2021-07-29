import { Title } from 'components/atoms/Title/Title'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote } from 'store'
import { NoteWrapper, StyledDeleteButton } from './Note.styles'

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const dispatch = useDispatch()
  const handleRemoveNote = () => {
    dispatch(removeNote({ id: id }))
  }
  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleRemoveNote} />
    </NoteWrapper>
  )
}

export default Note
