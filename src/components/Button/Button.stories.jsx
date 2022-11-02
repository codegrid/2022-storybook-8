import React from 'react'
import { Button } from './Button'

// コンポーネントの概要
export default {
  title: 'UI/Button',
  component: Button,
  // 👇 コンポーネントの説明文を定義
  parameters: {
    docs: {
      // 👇 ストーリーのソースコードを展開済みにする
      source: {
        state: 'open',
      },
      description: {
        component: 'Buttonコンポーネントの説明文を上書き',
      },
    },
  },
  // 👇 ArgsTableの定義を上書き、追加
  argTypes: {
    // variant引数を上書き
    variant: {
      description: '上書きされたvariantの説明文',
      table: {
        type: {
          summary: '概要',
          detail: 'この説明文は折りたたみ可能',
        },
      },
      control: 'select',
      options: ['outlined', 'attention'],
    },
    // children引数をマージ
    children: {
      type: { required: true },
    },
    // 引数を追加
    someArg: {
      type: {
        name: 'string',
      },
      table: {
        defaultValue: {
          summary: '"foo"',
        },
      },
      description: '追加された引数',
    },
  },
}

// Buttonストーリーのテンプレートを作成
const Template = (args) => <Button {...args}>ボタン</Button>

// 6つのストーリー
export const Default = Template.bind({})

export const FullWidth = Template.bind({})
FullWidth.args = { ...FullWidth.args, fullWidth: true }
FullWidth.parameters = {
  docs: {
    description: {
      story: 'FullWidthストーリーの説明文',
    },
  },
}

export const Large = Template.bind({})
Large.args = { ...Large.args, size: 'large' }

export const Attention = Template.bind({})
Attention.args = { ...Attention.args, variant: 'attention' }

export const LoadingSmall = Template.bind({})
LoadingSmall.args = { ...LoadingSmall.args, size: 'small', loading: true }

export const Disabled = Template.bind({})
Disabled.args = { ...Disabled.args, disabled: true }
