# 过渡动画 & Hover

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">transition + hover 效果（鼠标移过去看）</div>
  <div class="nova-demo-body">
    <button class="transition cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">保存</button>
    <button class="transition cursor-pointer bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">确认</button>
    <button class="transition cursor-pointer bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">删除</button>
    <button class="transition cursor-pointer bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded">警告</button>
  </div>
</div>

---

## 极简代码

```html
<button class="transition bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  保存
</button>
```

---

## 修改和应用

### `transition`

| 项 | 说明 |
|---|---|
| **含义** | `transition: all 0.15s ease-in-out` |
| **作用** | 让属性变化有 150ms 缓动 |
| **位置** | 通常和 hover 变体一起用 |

```html
<button class="transition cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  保存
</button>
```

<button class="transition cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded my-2">保存</button>

### `duration-150`

| 项 | 说明 |
|---|---|
| **含义** | `transition-duration: 150ms` |
| **何时用** | 单独使用需要自定义过渡时长时 |

> 大多数情况你**不需要单独写 `duration-150`**——`.transition` 已经带了 150ms。

### Hover 变体（5 种）

| class | 效果 |
|---|---|
| `.hover:bg-blue-700` | 鼠标悬停背景变深蓝 |
| `.hover:bg-green-700` | 鼠标悬停背景变深绿 |
| `.hover:bg-red-700` | 鼠标悬停背景变深红 |
| `.hover:bg-gray-700` | 鼠标悬停背景变深灰 |
| `.hover:bg-gray-100` | 鼠标悬停背景变浅灰（次按钮） |

```html
<!-- 主操作三色 -->
<button class="transition cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">保存</button>
<button class="transition cursor-pointer bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded ml-2">确认</button>
<button class="transition cursor-pointer bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded ml-2">删除</button>
```

效果：

<div class="my-2">
  <button class="transition cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">保存</button>
  <button class="transition cursor-pointer bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded text-sm ml-2">确认</button>
  <button class="transition cursor-pointer bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded text-sm ml-2">删除</button>
</div>

```html
<!-- 次按钮 -->
<button class="transition cursor-pointer bg-white hover:bg-gray-100 border text-gray-700 px-4 py-2 rounded">次要操作</button>
```

<button class="transition cursor-pointer bg-white hover:bg-gray-100 border text-gray-700 px-4 py-2 rounded my-2 text-sm">次要操作</button>

---

## 实际场景

### 确认对话框

```html
<div class="flex gap-2 justify-end">
  <button class="transition cursor-pointer flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">确认</button>
  <button class="transition cursor-pointer flex-1 bg-gray-200 hover:bg-gray-700 hover:text-white text-gray-700 py-2 rounded">取消</button>
</div>
```

效果：

<div class="flex gap-2 my-4">
  <button class="transition cursor-pointer flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 rounded text-sm">确认</button>
  <button class="transition cursor-pointer flex-1 bg-gray-200 hover:bg-gray-700 hover:text-white text-gray-700 py-2 rounded text-sm">取消</button>
</div>

### 设备控制卡片（hover 时整张变色）

```html
<div class="transition cursor-pointer bg-white hover:bg-gray-100 p-4 rounded-lg shadow">
  <div class="flex justify-between items-center">
    <div class="font-bold">💡 客厅灯</div>
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
  </div>
  <div class="text-sm text-gray-500 mt-2">点击切换开关</div>
</div>
```

效果（鼠标移上去看）：

<div class="transition cursor-pointer bg-white hover:bg-gray-100 p-4 rounded-lg shadow my-4">
  <div class="flex justify-between items-center">
    <div class="font-bold">💡 客厅灯</div>
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
  </div>
  <div class="text-sm text-gray-500 mt-2">点击切换开关</div>
</div>

---

## 什么时候用？

| 想做什么 | 怎么写 |
|---|---|
| 主操作按钮 hover 加深 | `.transition` + `.bg-*-500` + `.hover:bg-*-700` |
| 次按钮 hover 加深 | `.transition` + `.bg-white` + `.hover:bg-gray-100` |
| 危险操作 | `.transition` + `.bg-red-500` + `.hover:bg-red-700` |
| 卡片可点 | `.transition` + `.cursor-pointer` + `.hover:bg-gray-100` |
| 单纯显示，不交互 | **不加**（加了反而让用户以为可点） |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 只写 `transition` 不写 hover | transition 单独存在没意义 |
| 给纯展示元素加 `transition` | 展示元素不需要过渡 |
| 自己写 `transition: all 0.3s` | 直接用现成的 `.transition` |

---

## 下一步

- 👆 [鼠标手势 Cursor](/utilities/cursor)
- 📝 [表单元素内置样式](/utilities/forms)