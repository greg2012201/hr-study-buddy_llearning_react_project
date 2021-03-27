import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  padding-top: 20px;
  border-right: 2px solid #dfe2e8;
  grid-row: 1/3;
  grid-column: 1/2;
`
export const LinkWrapper = styled.div`
  padding: 50px 20px;
  text-align: right;
  font-family: 'Roboto';
  a {
    display: block;
    text-decoration: none;
    line-height: 2em;
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 110px;
  height: 60px;
  padding: 0 20px;
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: end;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  h1 {
    width: 51px;
    height: 34px;
    font-size: 15px /* ${({ theme }) => theme.fontSize.l} */;

    font-style: normal;
    font-weight: bold;
    line-height: 112.7%;
    text-align: right;
    letter-spacing: -0.02em;
    text-align: right;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const styledLinkWrapper = styled.div``
