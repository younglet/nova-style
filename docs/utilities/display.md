# Display（显示）

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">6 个 display class 效果对比</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 8px;">
    <div class="block bg-blue-100 p-2 rounded text-center">.block — 独占一行</div>
    <div>
      <span class="inline-block bg-blue-100 p-2 rounded mr-2">.inline-block #1</span>
      <span class="inline-block bg-blue-100 p-2 rounded">.inline-block #2</span>
    </div>
    <div class="flex gap-2 bg-blue-100 p-2 rounded">
      <span class="bg-blue-500 text-white px-2 rounded">.flex A</span>
      <span class="bg-blue-500 text-white px-2 rounded">.flex B</span>
    </div>
    <div class="grid grid-cols-3 gap-1 bg-blue-100 p-2 rounded">
      <span class="bg-blue-500 text-white p-1 text-center rounded text-xs">.grid 1</span>
      <span class="bg-blue-500 text-white p-1 text-center rounded text-xs">.grid 2</span>
      <span class="bg-blue-500 text-white p-1 text-center rounded text-xs">.grid 3</span>
    </div>
    <div class="hidden">.hidden — 我看不到</div>
    <div class="text-xs text-gray-500 text-center">↑ 上面隐藏了一个 .hidden 元素</div>
  </div>
</div>

---

## 极简代码

```html
<div class="flex gap-2">
  <div>A</div>
  <div>B</div>
</div>
```

---

## 修改和应用

### `.flex` ⭐ 最常用

| 项 | 说明 |
|---|---|
| **含义** | `display: flex`，弹性盒子 |
| **典型场景** | 横/纵向排列子元素（按钮组、卡片、导航） |

```html
<div class="flex gap-2">
  <div class="bg-blue-500 text-white px-3 py-2 rounded">A</div>
  <div class="bg-blue-500 text-white px-3 py-2 rounded">B</div>
</div>
```

<div class="flex gap-2 my-2">
  <div class="bg-blue-500 text-white px-3 py-2 rounded">A</div>
  <div class="bg-blue-500 text-white px-3 py-2 rounded">B</div>
</div>

### `.grid`

| 项 | 说明 |
|---|---|
| **含义** | `display: grid`，网格布局 |
| **典型场景** | 仪表盘卡片、设备控制矩阵 |

```html
<div class="grid grid-cols-3 gap-2">
  <div class="bg-blue-500 text-white p-3 rounded text-center">1</div>
  <div class="bg-blue-500 text-white p-3 rounded text-center">2</div>
  <div class="bg-blue-500 text-white p-3 rounded text-center">3</div>
</div>
```

<div class="grid grid-cols-3 gap-2 my-2">
  <div class="bg-blue-500 text-white p-3 rounded text-center">1</div>
  <div class="bg-blue-500 text-white p-3 rounded text-center">2</div>
  <div class="bg-blue-500 text-white p-3 rounded text-center">3</div>
</div>

### `.hidden`

| 项 | 说明 |
|---|---|
| **含义** | `display: none`，元素完全不渲染、不占空间 |
| **典型场景** | 用 JS 切换显示隐藏（弹窗、加载状态） |

```html
<div id="box" class="hidden">看不见我</div>
<button onclick="document.getElementById('box').classList.toggle('hidden')">
  切换显示
</button>
```

效果：

<div id="display-demo-hidden" class="bg-blue-100 p-4 rounded my-2">我是一个可以隐藏的盒子</div>
<button onclick="document.getElementById('display-demo-hidden').classList.toggle('hidden')" class="px-3 py-1 bg-blue-500 text-white rounded text-sm cursor-pointer">
  切换显示
</button>

### `.block`

| 项 | 说明 |
|---|---|
| **含义** | `display: block`，元素独占一行 |
| **典型场景** | 覆盖其他 display 值（div/p/h1 默认就是 block） |

```html
<span class="block bg-blue-100 p-2">span 但显示成块级</span>
<span class="block bg-blue-100 p-2 mt-1">另起一行</span>
```

<span class="block bg-blue-100 p-2 my-2">span 但显示成块级</span>
<span class="block bg-blue-100 p-2 mt-1">另起一行</span>

> 💡 实际上 div/p/h1 默认就是 block，写不写 `.block` 效果一样。它主要用来**覆盖**其他 display 值。

### `.inline-block`

| 项 | 说明 |
|---|---|
| **含义** | `display: inline-block`，不独占但可以设宽高 |
| **典型场景** | 让行内元素（span）能设固定宽度 |

```html
<span class="inline-block w-32 bg-blue-100 p-2 text-center">128px 宽</span>
<span class="inline-block w-32 bg-blue-100 p-2 text-center">同行显示</span>
```

<span class="inline-block w-32 bg-blue-100 p-2 text-center my-2">128px 宽</span>
<span class="inline-block w-32 bg-blue-100 p-2 text-center">同行显示</span>

### `.inline-flex`

| 项 | 说明 |
|---|---|
| **含义** | `display: inline-flex`，行内的弹性盒子 |
| **典型场景** | 让一组元素和文字一起排，内部仍按 flex 规则 |

```html
<p>
  这是一段文字，里面塞一个
  <span class="inline-flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded">
    <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
    警告标签
  </span>
  和文字一起排。
</p>
```

<p class="my-2">这是一段文字，里面塞一个 <span class="inline-flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded"><span class="w-2 h-2 rounded-full bg-yellow-500"></span>警告标签</span> 和文字一起排。</p>

---

## 实际场景

### 卡片网格（grid 最常用）

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">温度</div>
    <div class="text-3xl font-bold mt-2">24.5°</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">湿度</div>
    <div class="text-3xl font-bold mt-2 text-blue-500">65%</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">PM2.5</div>
    <div class="text-3xl font-bold mt-2 text-green-500">35</div>
  </div>
</div>
```

效果：

<div class="grid grid-cols-3 gap-4 my-4">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">温度</div>
    <div class="text-3xl font-bold mt-2">24.5°</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">湿度</div>
    <div class="text-3xl font-bold mt-2 text-blue-500">65%</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">PM2.5</div>
    <div class="text-3xl font-bold mt-2 text-green-500">35</div>
  </div>
</div>

---

## 什么时候用？

| 想做什么 | 用哪个 |
|---|---|
| 横/纵向排列子元素 | `.flex` |
| 多列网格 | `.grid` |
| 元素水平垂直居中 | `.flex` + `.items-center` + `.justify-center` |
| 让行内元素可设宽高 | `.inline-block` |
| flex 容器和文字混排 | `.inline-flex` |
| 临时隐藏 | `.hidden` |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 给所有 div 都加 `.block`（默认就是） | 只在覆盖时用 |
| 用 `.hidden` 做"透明但占位" | Nova Style 暂无 visibility 类 |
| 给 inline 元素加 `.flex` 期望和文字同行 | 用 `.inline-flex` |

---

## 下一步

- 📐 [Flex 布局详解](/utilities/flex)
- 🔲 [Grid 网格详解](/utilities/grid)