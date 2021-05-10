import FormField from './FormField'

export default {
  title: 'Components/molecules/FormField',
  component: FormField,
}

const Template = (args) => <FormField name="test" id="test" {...args} />
export const Default = Template.bind({})
Default.args = {
  label: 'Login',
}
export const LongLabel = Template.bind({})
LongLabel.args = {
  label: 'very long label very very very',
}
