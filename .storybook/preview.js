export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  // // 👇a11yアドオンの設定
  // a11y: {
  //   config: {
  //     rules: [
  //       // 👇色のコントラスト比の検査を無効化
  //       {
  //         id: 'color-contrast',
  //         enabled: false
  //       },
  //     ],
  //   },
  // },
}
