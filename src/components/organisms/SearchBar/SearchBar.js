import React from 'react'
import { Input } from 'components/atoms/Input/Input'
import { SearchBarWrapper, StatusInfo } from './SearchBar.style'
const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  )
}

export default SearchBar
