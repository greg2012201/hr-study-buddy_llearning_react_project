import { Button } from 'components/atoms/Button/Button'
import Modal from 'react-modal'

const { default: styled } = require('styled-components')

export const ModalWrapper = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 650px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  z-index: 102;
  overflow: hidden;
  ${Button} {
    width: 153.64px;
    height: 36.59px;
  }
  &:focus {
    outline: none;
  }
`
