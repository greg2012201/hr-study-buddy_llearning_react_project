import styled from 'styled-components'
const backgroundColorValidation = (value, colors) => {
  if (value > 4) {
    return colors.success
  }
  if (value > 3) {
    return colors.warning
  } else {
    return colors.error
  }
}

export const StyledAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isBig }) => (isBig ? '68px' : '34px')};
  height: ${({ isBig }) => (isBig ? '68px' : '34px')};
  border-radius: 50%;
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.xl : theme.fontSize.m)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ value, theme: { colors } }) => backgroundColorValidation(value, colors)};
`
