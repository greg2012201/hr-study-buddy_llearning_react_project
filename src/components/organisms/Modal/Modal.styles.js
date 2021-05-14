import { Button } from 'components/atoms/Button/Button'

const { default: styled } = require('styled-components')

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 700px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  z-index: 3000;
  ${Button} {
    width: 153.64px;
    height: 36.59px;
  }
`
export const ModalBackground = styled.div`
  overflow-y: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(115, 124, 142, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 2999;
`
