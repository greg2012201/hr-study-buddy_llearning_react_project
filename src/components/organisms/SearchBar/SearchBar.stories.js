import { Input } from 'components/atoms/Input/Input'
import SearchBar from './SearchBar'
import { HintWrapper, InputWrapper, SearchBarWrapper, SearchResultItem, StatusInfo } from './SearchBar.style'

export default {
  title: 'Components/organisms/SearchBar',
  component: SearchBar,
}
const mockedHintList = ['hint 1', 'hint 2', 'hint 3', 'hint 4', 'hint 5', 'hint 6', 'hint 7', 'hint 8', 'hint 9']
const Template = (args) => <SearchBar {...args} />
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search',
}
export const HintIsVisible = Template.bind({})
HintIsVisible.args = {
  value: 'hin',
  isVisible: true,
}
