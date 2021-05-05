import React, { useState } from 'react'
import { Input } from 'components/atoms/Input/Input'
import { HintWrapper, InputWrapper, SearchBarWrapper, SearchResultItem, StatusInfo } from './SearchBar.style'
import { useStudents } from 'hooks/useStudents'
import { useCombobox } from 'downshift'
import debounce from 'lodash.debounce'
const SearchBar = () => {
  const [machingStudents, setMachingStudents] = useState([])
  const { findStudents } = useStudents()
  const getMachingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue)
    setMachingStudents(students)
  }, 500)
  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: machingStudents,
    onInputValueChange: getMachingStudents,
  })

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <InputWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="Search" />
        <HintWrapper isVisible={isOpen && machingStudents.length > 0} {...getMenuProps()} aria-label="results">
          {isOpen &&
            machingStudents.map((item, index) => (
              <SearchResultItem isHighlited={highlightedIndex === index} key={item.id} {...getItemProps({ item, index })}>
                {item.name}
              </SearchResultItem>
            ))}
        </HintWrapper>
      </InputWrapper>
    </SearchBarWrapper>
  )
}

export default SearchBar
