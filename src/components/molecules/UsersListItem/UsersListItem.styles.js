import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding-right: 30%;
  position: relative;
  height: 100px;
  color: ${({ theme }) => theme.colors.black};
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`

export const Info = styled.div`
  margin: 0 20px;
  text-align: left;
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: bold;
    &:nth-of-type(2) {
      font-weight: normal;
    }
  }
`
