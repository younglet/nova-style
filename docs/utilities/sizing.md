# Width & Height（宽高）

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">宽度比例 + 固定宽度对比</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 8px; width: 100%;">
    <div class="w-full bg-blue-100 p-2 rounded text-center text-sm">w-full (100%)</div>
    <div class="w-3/4 bg-blue-100 p-2 rounded text-center text-sm mx-auto">w-3/4 (75%)</div>
    <div class="w-1/2 bg-blue-100 p-2 rounded text-center text-sm mx-auto">w-1/2 (50%)</div>
    <div class="w-1/4 bg-blue-100 p-2 rounded text-center text-sm mx-auto">w-1/4 (25%)</div>
    <div class="flex items-end gap-2 justify-center mt-2">
      <div class="w-12 h-12 bg-green-500 rounded"></div>
      <div class="w-16 h-16 bg-green-500 rounded"></div>
      <div class="w-24 h-16 bg-green-500 rounded"></div>
      <div class="w-32 h-16 bg-green-500 rounded"></div>
    </div>
    <div class="text-xs text-gray-500 text-center">w-12 / w-16 / w-24 / w-32 固定宽度对比</div>
  </div>
</div>

---

## 极简代码

```html
<!-- 占满父容器宽度 -->
<div class="w-full">...</div>

<!-- 水平居中 -->
<div class="mx-auto w-1/2">...</div>
```

---

## 修改和应用

### 宽度比例

| class | 实际值 | 用途 |
|---|---|---|
| `.w-full` | 100% | 占满父容器 |
| `.w-1/2` | 50% | 一半 |
| `.w-1/3` | 33.3% | 三等分之一 |
| `.w-2/3` | 66.7% | 三等分之二 |
| `.w-1/4` | 25% | 四等分之一 |
| `.w-3/4` | 75% | 四等分之三 |

```html
<!-- 水平居中 -->
<div class="mx-auto w-1/2 bg-white p-4 rounded shadow text-center">
  这是一个居中的卡片
</div>
```

<div class="my-2"><div class="mx-auto w-1/2 bg-white p-4 rounded shadow text-center text-sm">这是一个居中的卡片</div></div>

```html
<!-- 侧边栏 + 主内容 -->
<div class="flex bg-white border rounded overflow-hidden">
  <div class="w-1/4 bg-blue-500 text-white p-3 text-center text-sm">侧边栏</div>
  <div class="flex-1 p-3 text-sm">主内容（占满剩余）</div>
</div>
```

<div class="flex bg-white border rounded overflow-hidden my-2">
  <div class="w-1/4 bg-blue-500 text-white p-3 text-center text-sm">侧边栏</div>
  <div class="flex-1 p-3 text-sm text-gray-700">主内容（占满剩余）</div>
</div>

### 宽度固定

| class | 像素值 |
|---|---|
| `.w-12` | 48px |
| `.w-16` | 64px |
| `.w-24` | 96px |
| `.w-32` | 128px |

```html
<!-- 头像 64×64 -->
<div class="w-16 h-16 rounded-full bg-gray-300"></div>
```

<div class="w-16 h-16 rounded-full bg-gray-300 my-2"></div>

### 高度（全屏）

| class | 效果 |
|---|---|
| `.h-full` | 100%（父元素必须有高度） |
| `.h-screen` | 100vh（整个浏览器视口） |
| `.min-h-screen` | 至少 100vh（推荐） |

```html
<body class="min-h-screen bg-gray-50">
  <!-- 即使内容少，背景也会铺满整个屏幕 -->
</body>
```

> 💡 **`min-h-screen` 比 `h-screen` 更常用**——后者会把内容截断。

### 高度（固定）

| class | 像素值 |
|---|---|
| `.h-12` | 48px |
| `.h-16` | 64px |
| `.h-24` | 96px |
| `.h-32` | 128px |
| `.h-40` | 160px |
| `.h-48` | 192px |

```html
<!-- 固定高度图表区 -->
<div class="bg-white p-4 rounded shadow">
  <div class="flex items-end gap-1 h-40">
    <div class="bg-blue-500 w-full rounded-t" style="height: 60%"></div>
  </div>
</div>
```

<div class="bg-white p-4 rounded shadow my-2">
  <div class="flex items-end gap-1 h-40">
    <div class="bg-blue-500 w-full rounded-t" style="height: 60%"></div>
  </div>
</div>

---

## 实际场景

### 完整应用页面

```html
<body class="min-h-screen bg-gray-50">
  <div class="bg-gray-800 text-white p-4">
    顶部导航
  </div>
  <div class="p-4">
    主内容（内容少时，body 背景仍铺满屏幕）
  </div>
</body>
```

---

## 什么时候用？

| 场景 | class 组合 |
|---|---|
| 卡片占满父容器 | `.w-full` |
| 卡片水平居中 | `.mx-auto` + `.w-1/2` |
| 侧边栏 1/4 + 主内容 | `.w-1/4` + `.flex-1` |
| 头像 64×64 | `.w-16` + `.h-16` + `.rounded-full` |
| 全屏背景 | `<body>` 加 `.min-h-screen` |
| 图表区固定高度 | `.h-40` 或 `.h-48` |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| `.h-full` 加在 body 上（不会生效） | 改用 `.min-h-screen` |
| `.h-screen` 限制内容高度 | 用 `.min-h-screen` |

---

## 下一步

- 📐 [Display](/utilities/display) · [Flex](/utilities/flex)
- 📏 [间距（Padding/Margin）](/utilities/spacing)