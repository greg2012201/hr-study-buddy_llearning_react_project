import React from 'react'
import PropTypes from 'prop-types'
import { StyledAverage } from './Average.styles'

const Average = ({ averages }) => (
  <StyledAverage value={averages}>{averages}</StyledAverage>
)

Average.propTypes = {
  averages: PropTypes.string.isRequired,
}

export default Average
