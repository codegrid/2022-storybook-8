import React from 'react'
import { TextField } from './TextField'

// コンポーネントの概要
export default {
  title: 'UI/TextField',
  component: TextField,
  parameters: {
    docs: {
      source: {
        state: 'open',
      },
    },
  },
}

// TextFieldストーリーのテンプレートを作成
const Template = (args) => <TextField {...args} />

export const MailInput = Template.bind({})
MailInput.args = { ...MailInput.args, id: 'mail', label: 'メールアドレス' }

export const PasswordWithError = Template.bind({})
PasswordWithError.args = {
  ...PasswordWithError.args,
  id: 'password',
  label: 'パスワード',
  type: 'password',
  errorMessage: 'パスワードは半角英数字と記号で入力してください',
}
