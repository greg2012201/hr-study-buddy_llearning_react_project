import NewsSection from './NewsSection'
import { NewsSectionHeader } from './NewsSection.styles'

export default {
  title: 'templates/NewsSection/NewsSection',
  component: NewsSection,
}

const Template = (args) => <NewsSection {...args}></NewsSection>
export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = {}
