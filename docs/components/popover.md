---
title:Popover - 弹出层
---
# 气泡提示 - Popover

## click 示例

<ClientOnly>
   <popover-demos></popover-demos>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div class="container1">
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
</template>
```
:::

## hover 示例

<ClientOnly>
   <popover-demo2></popover-demo2>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div class="container1">
    <g-popover trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
</template>
```
:::

## API

|    参数        |     类型                                                       |
|------------|------------------------------------------------------------|
| `position`     | `left` 、`top`、 `bottom`、 `right`  |
| `tigger`    | `hover` 、`click` |                         