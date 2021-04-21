import Navigation from 'components/organisms/Navigation/Navigation'
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles'
import SearchBar from 'components/organisms/SearchBar/SearchBar'
import NewsSection from '../NewsSection/NewsSection'

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  )
}

export default MainTemplate
