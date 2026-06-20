# Grid 网格

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">3 列网格 + 4 列网格对比</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 16px; width: 100%;">
    <div class="grid grid-cols-3 gap-2 w-full">
      <div class="bg-blue-500 text-white p-3 rounded text-center">1</div>
      <div class="bg-blue-500 text-white p-3 rounded text-center">2</div>
      <div class="bg-blue-500 text-white p-3 rounded text-center">3</div>
    </div>
    <div class="grid grid-cols-4 gap-2 w-full">
      <div class="bg-green-500 text-white p-2 rounded text-center text-sm">1</div>
      <div class="bg-green-500 text-white p-2 rounded text-center text-sm">2</div>
      <div class="bg-green-500 text-white p-2 rounded text-center text-sm">3</div>
      <div class="bg-green-500 text-white p-2 rounded text-center text-sm">4</div>
    </div>
  </div>
</div>

---

## 极简代码

```html
<div class="grid grid-cols-3 gap-2">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

---

## 修改和应用

### `.grid-cols-2`

```html
<div class="grid grid-cols-2 gap-3">
  <div class="bg-white p-4 rounded-lg shadow">💡 客厅灯</div>
  <div class="bg-white p-4 rounded-lg shadow">❄️ 空调</div>
  <div class="bg-white p-4 rounded-lg shadow">🌀 风扇</div>
  <div class="bg-white p-4 rounded-lg shadow">💧 加湿器</div>
</div>
```

<div class="grid grid-cols-2 gap-3 my-2">
  <div class="bg-white p-4 rounded-lg shadow text-sm">💡 客厅灯</div>
  <div class="bg-white p-4 rounded-lg shadow text-sm">❄️ 空调</div>
  <div class="bg-white p-4 rounded-lg shadow text-sm">🌀 风扇</div>
  <div class="bg-white p-4 rounded-lg shadow text-sm">💧 加湿器</div>
</div>

### `.grid-cols-3` ⭐ 仪表盘最常用

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

<div class="grid grid-cols-3 gap-4 my-2">
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

### `.grid-cols-4`

```html
<div class="grid grid-cols-4 gap-2">
  <button class="bg-blue-100 text-blue-700 p-3 rounded text-center text-sm">开关 1</button>
  <button class="bg-blue-100 text-blue-700 p-3 rounded text-center text-sm">开关 2</button>
  <button class="bg-blue-100 text-blue-700 p-3 rounded text-center text-sm">开关 3</button>
  <button class="bg-blue-100 text-blue-700 p-3 rounded text-center text-sm">开关 4</button>
</div>
```

<div class="grid grid-cols-4 gap-2 my-2">
  <button class="bg-blue-100 text-blue-700 p-3 rounded text-center text-sm">开关 1</button>
  <button class="bg-blue-100 text-blue-700 p-3 rounded text-center text-sm">开关 2</button>
  <button class="bg-blue-100 text-blue-700 p-3 rounded text-center text-sm">开关 3</button>
  <button class="bg-blue-100 text-blue-700 p-3 rounded text-center text-sm">开关 4</button>
</div>

### `.col-span-2` / `.col-span-3`

子元素跨多列：

```html
<div class="grid grid-cols-3 gap-3">
  <div class="col-span-2 bg-blue-100 p-3 rounded">跨 2 列</div>
  <div class="bg-green-100 p-3 rounded text-center">1</div>
  <div class="bg-green-100 p-3 rounded text-center">2</div>
  <div class="col-span-3 bg-yellow-100 p-3 rounded text-center">跨 3 列</div>
</div>
```

<div class="grid grid-cols-3 gap-3 my-2">
  <div class="col-span-2 bg-blue-100 p-3 rounded text-sm text-center">跨 2 列</div>
  <div class="bg-green-100 p-3 rounded text-center text-sm">1</div>
  <div class="bg-green-100 p-3 rounded text-center text-sm">2</div>
  <div class="col-span-3 bg-yellow-100 p-3 rounded text-center text-sm">跨 3 列</div>
</div>

---

## Grid vs Flex 怎么选？

| 场景 | 用什么 |
|---|---|
| 一行 / 一列 | `flex` |
| 多行多列 | `grid` |
| 子元素数量不固定 | 都行，flex 略简单 |
| 需要精确按行列对齐 | `grid` |
| 设备控制面板（4 个一排） | `grid grid-cols-2/4` |
| 顶部导航栏（左右两端） | `flex justify-between` |

**口诀**：一行一列用 flex，多行多列用 grid。

---

## 实际场景

### 4 列传感器网格

```html
<div class="grid grid-cols-4 gap-3">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">空气温度</div>
    <div class="text-2xl font-bold mt-1">24.5°</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">空气湿度</div>
    <div class="text-2xl font-bold mt-1 text-blue-500">65%</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">土壤湿度</div>
    <div class="text-2xl font-bold mt-1 text-yellow-500">28%</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">光照</div>
    <div class="text-2xl font-bold mt-1">420 lx</div>
  </div>
</div>
```

效果：

<div class="grid grid-cols-4 gap-3 my-4">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">空气温度</div>
    <div class="text-2xl font-bold mt-1">24.5°</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">空气湿度</div>
    <div class="text-2xl font-bold mt-1 text-blue-500">65%</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">土壤湿度</div>
    <div class="text-2xl font-bold mt-1 text-yellow-500">28%</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-xs text-gray-500">光照</div>
    <div class="text-2xl font-bold mt-1">420 lx</div>
  </div>
</div>

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 一行元素也用 grid | 改用 flex |
| 用 grid 但不指定列数 | 必须加 `.grid-cols-N` |
| 列数写 `.grid-cols-5/6`（Nova Style 没有） | 自己加，参考 [扩展指南](/guide/design-principles#扩展) |

---

## 下一步

- 📐 [Flex 布局详解](/utilities/flex)
- 📏 [Width & Height](/utilities/sizing)