import { Title } from 'components/atoms/Title/Title'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-left: 34px;
  width: 250px;
  height: 350px;
  align-self: flex-start;
  div {
    ${Title} {
      margin: 0;
      padding: 0;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`
export const GradeList = styled.ul`
  margin: 20px 0;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 2rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`
