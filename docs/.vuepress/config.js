module.exports = {
  base:'/gulu/',
  title: '轱辘 UI',
  description: '一个好用的 UI 框架',
  themeConfig:{
    sidebar: [
      {
        title: '入门',
        children: [ '/install/','/get-start/',]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
        ]
      }
    ]
  }
}