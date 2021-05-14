import { Button } from 'components/atoms/Button/Button'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalBackground, ModalWrapper } from './Modal.styles'

const modalContainer = document.getElementById('modal-container')
const Modal = ({ handleCloseModal, children }) => {
  const modalNode = document.createElement('div')
  useEffect(() => {
    modalContainer.appendChild(modalNode)

    return () => {
      modalContainer.removeChild(modalNode)
    }
  }, [modalNode])

  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalWrapper>
        {children}
        <Button onClick={handleCloseModal}>Save</Button>
      </ModalWrapper>
    </ModalBackground>,
    modalNode
  )
}

export default Modal
