import { Button } from 'components/atoms/Button/Button'
import React from 'react'
import { ModalWrapper } from './Modal.styles'

const Modal = ({ handleCloseModal, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
      <Button onClick={handleCloseModal}>Save</Button>
    </ModalWrapper>
  )
}

export default Modal
