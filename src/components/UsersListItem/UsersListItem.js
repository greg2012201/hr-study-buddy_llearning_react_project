import React from 'react'
import PropTypes from 'prop-types'

const UsersListItem = ({ userData: { average, name, attendence } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendence}</p>
    </div>
    <button>X</button>
  </li>
)

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string,
  }),
}

export default UsersListItem
