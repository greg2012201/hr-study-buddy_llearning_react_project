import { StyledAverage } from 'components/atoms/Average/Average'
import { Title } from 'components/atoms/Title/Title'
import styled from 'styled-components'

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-self: flex-start;
  ${StyledAverage} {
    order: -1;
  }
`
export const StudentDetailsTitle = styled(Title)`
  display: flex;
  align-items: center;
  flex-grow: 1;

  transform: translateX(90px);
`
export const StudentDetailsAverage = styled(StyledAverage)`
  order: -1;
  width: 68px;
  height: 68px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`
