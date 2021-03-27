import styled from 'styled-components'
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-row: 2;
  grid-column: 2/3;
`
