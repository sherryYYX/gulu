---
title:Tabs - 标签
---
# 标签 - Tabs

## 示例

<ClientOnly>
  <tabs-demos></tabs-demos>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div>
    <g-tab :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="long1">这是一个长长长长的 tab1 </g-tabs-item>
        <g-tabs-item name="short">这是一个短 tab</g-tabs-item>
        <g-tabs-item name="long2">这是一个长长长长的 tab2 </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="long1">这是一个长长的 tab1 的内容</g-tabs-pane>
        <g-tabs-pane name="short">这是一个短 tab 的内容</g-tabs-pane>
        <g-tabs-pane name="long2">这是一个长长的 tab2 的内容</g-tabs-pane>
      </g-tabs-body>
    </g-tab>
  </div>
</template>
```
:::

## API

| 参数                          | 说明                                                           | 接受类型           |
| ----------------------------- | -------------------------------------------------------------- | ------------------ |
| `active`                      | 选定默认激活的 tab                                             | String             | number |
| `height`                      | 定义 Tab Header 的高度, 使用 line-height 属性定义              | Number             |
| `disables`                    | 禁用 Tab      |Boolean