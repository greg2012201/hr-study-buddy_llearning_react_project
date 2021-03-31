<<<<<<< HEAD
import styled from 'styled-components'
=======
import styled from 'styled-components';
>>>>>>> testing

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
<<<<<<< HEAD
  padding-right: 30%;
  position: relative;
  height: 100px;
  color: ${({ theme }) => theme.colors.black};
=======
  position: relative;

>>>>>>> testing
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
<<<<<<< HEAD
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
=======
`;

export const StyledAverage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
>>>>>>> testing
