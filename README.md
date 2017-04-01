## vue-scroll-response 解决了什么问题
> vue2.x 指令
- 滚动内容区，目录区会同时响应，当前可视区的目录可以添加激活样式
- 目录区激活样式可能不在可视区，赋予自动调整到可视区功能


## [DEMO]()

## [GITHUB]()

## 安装
```
npm install --save-dev vue-scroll-response
```
## 引用

```js
import scrollResponse from 'vue-scroll-response'
Vue.use(scrollResponse)
```

## 前提（重要）
目录容器中的标题和内容容器中的标题要形成一一对应，并且都带有**一致的类名**(详情见src/components/test.vue)

## 使用
```html
<test v-scroll-response="{title:'title',contentId:'content',catalogId:'catalog'}"></test>
```
### 如果不想要内容区的目录呈现激活样式,设置contentTitleActive为off
```html
<test v-scroll-response="{contentTitleActive:'off',title:'.title',contentId:'content',catalogId:'catalog'}"></test>
```
## 参数详解
参数 | header 2
---|---
title | 目录容器中的标题和内容容器中的标题的统一类名
contentId | 内容容器id，是添加scroll事件的元素
catalogId | 目录容器id，是添加scroll事件的元素
contentTitleActive | 当设置为'off'时，内容区的标题不会有激活样式

## 自定义激活样式（**需要自己手动添加**）
```css
.catalog-active>a {
  color: red!important;
}
```


