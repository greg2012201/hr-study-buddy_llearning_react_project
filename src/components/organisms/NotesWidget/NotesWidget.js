import Note from 'components/molecules/Note/Note'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.styles'

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const notes = useSelector((state) => state.notes)
  const handleToggleWidget = () => setIsOpen((prevState) => !prevState)
  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  )
}

export default NotesWidget
