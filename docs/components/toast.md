---
title:toast
---
# 弹出提示 - Toast 


## 示例

<ClientOnly>
  <toast-demos></toast-demos>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div style="padding-top: 16px;" class="container1">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div class="gulu-toast">
      <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
    </div>
  </div>
</template>
```
:::


## 设置关闭按钮

<ClientOnly>
  <toast-demo2></toast-demo2>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<div>
  <g-button @click="onClickButton">上方弹出</g-button>
</div>
methods: {
  onClickButton () {
    this.$toast('你需要充话费了', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('知道了')
        }
      }
    })
  }
},
```
:::

## API

已经作为插件被封装进Vue.prototype.$toast,支持 `position` ,有三个值分别为：`top`、`middle`、`bottom`、

:::warning
使用时一定要引入插件
```js
  Vue.use(plugin)
```
:::
