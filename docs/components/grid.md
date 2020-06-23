---
title:Grid
---
# 网格 - Grid

## 24网格布局
<ClientOnly>
  <grid-demos></grid-demos>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div>
    <g-row class="demoRow">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>

    <g-row class="demoRow">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>

    <g-row class="demoRow">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>

    <g-row class="demoRow">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>
  </div>
</template>
```
:::


## gutter 用法

<ClientOnly>
   <grid-demo2></grid-demo2>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
<div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>

    <g-row class="demoRow" gutter="10">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
```
:::

## 设置空隙
<ClientOnly>
  <grid-demo3></grid-demo3>
</ClientOnly>

## 代码

::: details 点击查看示例代码
```vue
<template>
  <div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8" offset="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="8">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>
  </div>
</template>
```
:::
