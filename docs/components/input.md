---
title:Input
---
# 输入框 - Input

## 示例

<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div>
    <g-input></g-input>
    <g-input value="默认"></g-input>
    <g-input value="禁用" disabled></g-input>
    <g-input value="只读" readonly></g-input>
  </div>
</template>
```
:::

## 双向绑定示例

<ClientOnly>
<input-demo2></input-demo2>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div>
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
```
:::



## API

| 参数                          | 说明                                                           | 接受类型           |
| ----------------------------- | -------------------------------------------------------------- | ------------------ |
| `value`                      | 输入的值                                             | String             | number |
| `readonly`                      | 只读属性              | Boolean             |
| `disables`                    | 禁用属性      |Boolean

