import styled from 'styled-components'
const backgroundColorValidation = (value, colors) => {
  if (value > 7) {
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
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ value, theme: { colors } }) =>
    backgroundColorValidation(value, colors)};
`
