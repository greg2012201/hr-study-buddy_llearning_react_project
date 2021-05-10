import { Button } from './Button'

export default {
  title: 'Components/atoms/Button',
  component: Button,
}

const Template = (args) => <Button {...args}>Read More</Button>
export const Default = Template.bind({})
Default.args = {
  isBig: false,
}
export const Big = Template.bind({})
Big.args = {
  isBig: true,
}
