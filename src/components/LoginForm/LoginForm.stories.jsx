import React from 'react'
import { LoginForm } from './LoginForm'
// ðãã¹ãç¨ã®ã©ã¤ãã©ãªããimport
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

// ã³ã³ãã¼ãã³ãã®æ¦è¦
export default {
  title: 'UI/LoginForm',
  component: LoginForm,
  parameters: {
    docs: {
      source: {
        state: 'open',
      },
    },
  },

  // .storybook/preview.jsã«ãactions: { argTypesRegex: '^on[A-Z].*' },ã®æå®ãããã®ã§ä¸è¦
  // argTypes: {
  //   onSubmit: { action: true },
  // },
}

const Template = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = { ...Default.args }

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  console.log(canvas)
  await userEvent.type(canvas.getByLabelText('ã¡ã¼ã«ã¢ãã¬ã¹'), 'tomof@example.com')
  await userEvent.type(canvas.getByLabelText('ãã¹ã¯ã¼ã'), 'supersecret')
  await userEvent.click(canvas.getByRole('button'))

  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled())
}

export const InvalidEmail = Template.bind({})
InvalidEmail.args = { ...Default.args }

InvalidEmail.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  // ä¸æ­£ãªã¡ã¼ã«ã¢ãã¬ã¹ãæå®
  await userEvent.type(canvas.getByLabelText('ã¡ã¼ã«ã¢ãã¬ã¹'), 'tomof.example.com')
  await userEvent.type(canvas.getByLabelText('ãã¹ã¯ã¼ã'), 'supersecret')
  await userEvent.click(canvas.getByRole('button'))
  await waitFor(() => expect(canvas.getByText('æ­£ããã¡ã¼ã«ã¢ãã¬ã¹ãå¥åãã¦ãã ãã')).toBeTruthy())
  await waitFor(() => expect(args.onSubmit).not.toHaveBeenCalled())
}
