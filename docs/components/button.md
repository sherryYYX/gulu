---
title:button
---
# 按钮 - Button

## 示例

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div class="container1">
    <g-button :loading="true">默认按钮</g-button>
    <g-button icon="settings">设置按钮</g-button>
    <g-button :loading="true">加载中</g-button>
  </div>
</template>
```
:::

## API

|    参数        |     类型                                                       |
|------------|------------------------------------------------------------|
| `loading`     | Boolean |
| `icon`    | `settings` 、`left`、 `right`|                                                |