import styled from 'styled-components'
import { Input } from 'components/atoms/Input/Input'

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  z-index: 100;

  ${Input} {
    margin: 0;

    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px;
  }
`
export const InputWrapper = styled.div`
  position: relative;
`
export const HintWrapper = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  padding: 0;
  margin: 0;
  padding: 10px;
  position: absolute;
  border-radius: 15px;
  left: 0;
  top: 100%;
  right: 0;
  max-height: 250px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  z-index: 99;
  padding: 0 7px 0 15px;
  list-style: none;
  text-align: left;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  background-color: ${({ theme }) => theme.colors.white};
`

export const SearchResultItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 3em;
  background-color: ${({ theme, isHighlited }) => (isHighlited ? theme.colors.lightPurple : theme.colors.white)};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrey};
  letter-spacing: -0.02em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  &::not(:last-child) {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`
