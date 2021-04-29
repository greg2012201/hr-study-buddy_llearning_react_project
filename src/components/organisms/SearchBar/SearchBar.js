import React, { useEffect, useState } from 'react'
import { Input } from 'components/atoms/Input/Input'
import { HintWrapper, InputWrapper, SearchBarWrapper, StatusInfo } from './SearchBar.style'
import { useStudents } from 'hooks/useStudents'
import debounce from 'lodash.debounce'
const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('')
  const [machingStudents, setMachingStudents] = useState([])
  const { findStudents } = useStudents()

  const getMachingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase)
    setMachingStudents(students)
  }, 500)

  useEffect(() => {
    if (!searchPhrase) return
    getMachingStudents(searchPhrase)
  }, [searchPhrase, getMachingStudents])
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <InputWrapper>
        <Input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} />
        {searchPhrase && machingStudents.length ? (
          <HintWrapper>
            {machingStudents.map(({ name }) => (
              <li>{name}</li>
            ))}
          </HintWrapper>
        ) : null}
      </InputWrapper>
    </SearchBarWrapper>
  )
}

export default SearchBar
