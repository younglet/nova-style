# Flex 布局

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">Flex 是 IoT 控制页面 80% 布局的解决方案</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 16px;">
    <div class="flex flex-row gap-2 bg-blue-100 p-3 rounded">
      <span class="bg-blue-500 text-white px-2 rounded text-sm">A</span>
      <span class="bg-blue-500 text-white px-2 rounded text-sm">B</span>
      <span class="bg-blue-500 text-white px-2 rounded text-sm">C</span>
    </div>
    <div class="flex flex-col gap-2 bg-green-100 p-3 rounded w-32 mx-auto">
      <span class="bg-green-500 text-white px-2 py-1 rounded text-sm text-center">第一行</span>
      <span class="bg-green-500 text-white px-2 py-1 rounded text-sm text-center">第二行</span>
    </div>
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

### 方向

#### `.flex-row`

```html
<div class="flex flex-row gap-2">
  <span class="bg-blue-500 text-white px-2 py-1 rounded">按钮 1</span>
  <span class="bg-blue-500 text-white px-2 py-1 rounded">按钮 2</span>
</div>
```

<div class="flex flex-row gap-2 my-2">
  <span class="bg-blue-500 text-white px-2 py-1 rounded text-sm">按钮 1</span>
  <span class="bg-blue-500 text-white px-2 py-1 rounded text-sm">按钮 2</span>
</div>

#### `.flex-col`

```html
<div class="flex flex-col gap-2 w-32">
  <div class="bg-green-500 text-white px-2 py-1 rounded text-center">第一行</div>
  <div class="bg-green-500 text-white px-2 py-1 rounded text-center">第二行</div>
</div>
```

<div class="flex flex-col gap-2 w-32 my-2">
  <div class="bg-green-500 text-white px-2 py-1 rounded text-center text-sm">第一行</div>
  <div class="bg-green-500 text-white px-2 py-1 rounded text-center text-sm">第二行</div>
</div>

#### `.flex-wrap`（超出换行）

```html
<div class="flex flex-wrap gap-2 w-48">
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">标签 1</span>
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">标签 2</span>
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">标签 3</span>
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">标签 4</span>
</div>
```

<div class="flex flex-wrap gap-2 w-48 my-2">
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">标签 1</span>
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">标签 2</span>
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">标签 3</span>
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">标签 4</span>
</div>

---

### 主轴对齐（justify-content）

#### `.justify-between` ⭐ 导航栏常用

```html
<div class="flex justify-between p-3 bg-white border rounded">
  <span class="font-bold">标题</span>
  <span class="text-sm text-gray-500">右侧</span>
</div>
```

<div class="flex justify-between p-3 bg-white border rounded my-2">
  <span class="font-bold">标题</span>
  <span class="text-sm text-gray-500">右侧</span>
</div>

#### `.justify-center`

```html
<div class="flex justify-center gap-2 p-2 bg-gray-100 rounded">
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">居中</span>
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">排列</span>
</div>
```

<div class="flex justify-center gap-2 p-2 bg-gray-100 rounded my-2">
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">居中</span>
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">排列</span>
</div>

#### `.justify-start` / `.justify-end` / `.justify-around`

```html
<div class="space-y-2">
  <div class="flex justify-start gap-2 p-2 bg-gray-100 rounded">
    <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">A</span>
  </div>
  <div class="flex justify-end gap-2 p-2 bg-gray-100 rounded">
    <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">A</span>
  </div>
  <div class="flex justify-around p-2 bg-gray-100 rounded">
    <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">A</span>
    <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">B</span>
  </div>
</div>
```

<div class="space-y-2 my-2">
  <div class="flex justify-start gap-2 p-2 bg-gray-100 rounded"><span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">A</span></div>
  <div class="flex justify-end gap-2 p-2 bg-gray-100 rounded"><span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">A</span></div>
  <div class="flex justify-around p-2 bg-gray-100 rounded"><span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">A</span><span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">B</span></div>
</div>

---

### 交叉轴对齐（align-items）

#### `.items-center` ⭐ 居中常用

```html
<div class="flex items-center justify-center gap-2 p-3 bg-gray-100 rounded h-16">
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">居中</span>
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">排列</span>
</div>
```

<div class="flex items-center justify-center gap-2 p-3 bg-gray-100 rounded h-16 my-2">
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">居中</span>
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">排列</span>
</div>

#### `.items-start` / `.items-end` / `.items-stretch`

```html
<div class="flex items-start gap-2 p-2 bg-gray-100 rounded h-16">
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">矮</span>
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">高的元素</span>
</div>
```

<div class="flex items-start gap-2 p-2 bg-gray-100 rounded h-16 my-2">
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">矮</span>
  <span class="px-2 py-1 bg-blue-500 text-white rounded text-sm">高的元素</span>
</div>

---

### 弹性

#### `.flex-1`（子元素占满剩余空间）

```html
<!-- 等宽按钮组 -->
<div class="flex gap-2">
  <button class="flex-1 py-2 bg-blue-500 text-white rounded">开</button>
  <button class="flex-1 py-2 bg-gray-200 text-gray-700 rounded">关</button>
</div>
```

<div class="flex gap-2 my-2">
  <button class="flex-1 py-2 bg-blue-500 text-white rounded text-sm">开</button>
  <button class="flex-1 py-2 bg-gray-200 text-gray-700 rounded text-sm">关</button>
</div>

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

---

### 间距（gap）

| class | 实际值 |
|---|---|
| `.gap-1` | 4px |
| `.gap-2` | 8px |
| `.gap-3` | 12px |
| `.gap-4` | 16px（最常用） |
| `.gap-6` | 24px |
| `.gap-8` | 32px |

```html
<div class="flex gap-4">
  <div class="bg-blue-100 p-3 rounded">A</div>
  <div class="bg-blue-100 p-3 rounded">B</div>
  <div class="bg-blue-100 p-3 rounded">C</div>
</div>
```

<div class="flex gap-4 my-2">
  <div class="bg-blue-100 p-3 rounded">A</div>
  <div class="bg-blue-100 p-3 rounded">B</div>
  <div class="bg-blue-100 p-3 rounded">C</div>
</div>

> 💡 推荐用 `gap` 而不是给每个子元素加 `margin`，gap 一行搞定。

---

## 实际场景

### 顶部导航栏（最经典）

```html
<div class="bg-gray-800 text-white p-4 flex justify-between items-center rounded">
  <div class="font-bold">🌡️ 智能家居</div>
  <div class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span class="text-sm">5 台设备在线</span>
  </div>
</div>
```

效果：

<div class="bg-gray-800 text-white p-4 flex justify-between items-center rounded my-4">
  <div class="font-bold">🌡️ 智能家居</div>
  <div class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span class="text-sm">5 台设备在线</span>
  </div>
</div>

### 卡片网格

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

| 想做什么 | class 组合 |
|---|---|
| 横向并排 | `.flex` + `.flex-row` + `.gap-N` |
| 纵向堆叠 | `.flex` + `.flex-col` + `.gap-N` |
| 两端对齐 | `.flex` + `.justify-between` |
| 居中显示 | `.flex` + `.items-center` + `.justify-center` |
| 等宽按钮组 | `.flex` + `.gap-N`，子元素 `.flex-1` |
| 等高子元素 | `.flex` + `.items-stretch` |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 给每个子元素加 `mb-4` 制造间距 | 父元素用 `gap-4` |
| `.flex-1` 加在 flex 容器自己上 | `.flex-1` 是给**子元素**的 |

---

## 下一步

- 📐 [Display 显示方式](/utilities/display)
- 🔲 [Grid 网格详解](/utilities/grid)
- 📏 [间距（Padding/Margin）](/utilities/spacing)