---
title:Layout - 布局
---
# 布局 - Layout

## 默认示例

<ClientOnly>
  <layout-demos></layout-demos>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div class="container1">
    <g-layout style="color: white; margin-bottom:50px;">
      <g-header cla="header">
        header
      </g-header>
      <g-content class="content">
        content
      </g-content>
      <g-footer class="footer">
        footer
      </g-footer>
    </g-layout>
  </div>
</template>
```
:::

## sider 可关闭示例

<ClientOnly>
  <layout-demo2></layout-demo2>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div class="container1">
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:#81e2ac;">
        header
      </g-header>
      <g-layout>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </g-sider>
        <g-content style="height: 100px; background:#3fc48c;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:#81e2ac;">
        footer
      </g-footer>
    </g-layout>
  </div>
</template>
```
:::




## API

| 参数/标签                          | 说明                                                           | 接受类型           |
| ----------------------------- | -------------------------------------------------------------- | ------------------ |
| `visible`                      | 能否有 sider                                             | Boolean             | number |
| `<g-header>`                      | 头部             |              |
| `<g-sider>`                    | 侧边      |
| `<g-content>`                    | 中间内容     |
| `<g-footer>`                    | 底部内容     |