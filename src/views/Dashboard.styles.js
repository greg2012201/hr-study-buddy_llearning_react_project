import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 40px;
`
export const GroupWrapper = styled(ViewWrapper)`
  margin: 0;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.white};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: bold;
  }
  a:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`
