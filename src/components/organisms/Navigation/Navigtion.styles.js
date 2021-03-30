import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
  padding: 30px 0;
  height: 100%;
  padding-top: 20px;
  border-right: 2px solid #dfe2e8;
`
/* export const LinkWrapper = styled.div`
  padding: 50px 20px;
  text-align: right;
  font-family: 'Roboto';
` */
const activeClassName = 'active-link'
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    transform: translateY(-50%);
  }
`
export const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 101%;
  height: 60px;
  padding: 0 20px;
  align-self: end;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  h1 {
    width: 51px;
    height: 34px;
    font-size: 15px;

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
