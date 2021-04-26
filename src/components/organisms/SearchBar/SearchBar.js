import React, { useEffect, useState } from 'react'
import { Input } from 'components/atoms/Input/Input'
import { SearchBarWrapper, StatusInfo } from './SearchBar.style'
import axios from 'axios'
import { useParams } from 'react-router'
const SearchBar = () => {
  const { id } = useParams()
  const [searchedStudents, setSearchedStudents] = useState([])
  const handleOnChange = (e) => {
    axios
      .post(`/students/search`, { searchPhrase: e.target.value })
      .then(({ data: { students } }) => setSearchedStudents(students))
      .catch((err) => console.log(err))
  }
  useEffect(() => {}, [])
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
        {searchedStudents.map(({ name }) => (
          <p>{name}</p>
        ))}
      </StatusInfo>
      <Input onChange={handleOnChange} />
    </SearchBarWrapper>
  )
}

export default SearchBar
