# 颜色

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">5 个色系（绿/红/黄/蓝/灰）严格对应 IoT 状态</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 8px; width: 100%;">
    <div class="flex gap-2">
      <div class="flex-1 bg-green-100 text-green-700 p-2 rounded text-center text-sm font-medium">正常</div>
      <div class="flex-1 bg-red-100 text-red-700 p-2 rounded text-center text-sm font-medium">异常</div>
      <div class="flex-1 bg-yellow-100 text-yellow-700 p-2 rounded text-center text-sm font-medium">警告</div>
      <div class="flex-1 bg-blue-100 text-blue-700 p-2 rounded text-center text-sm font-medium">信息</div>
      <div class="flex-1 bg-gray-100 text-gray-700 p-2 rounded text-center text-sm font-medium">中性</div>
    </div>
    <div class="flex gap-2 mt-2">
      <div class="flex-1 bg-green-500 text-white p-2 rounded text-center text-sm">绿色 500</div>
      <div class="flex-1 bg-red-500 text-white p-2 rounded text-center text-sm">红色 500</div>
      <div class="flex-1 bg-yellow-500 text-white p-2 rounded text-center text-sm">黄色 500</div>
      <div class="flex-1 bg-blue-500 text-white p-2 rounded text-center text-sm">蓝色 500</div>
      <div class="flex-1 bg-gray-700 text-white p-2 rounded text-center text-sm">灰色 700</div>
    </div>
  </div>
</div>

---

## 极简代码

```html
<div class="text-red-500">异常</div>
<div class="bg-green-100 text-green-700 p-3 rounded">成功</div>
```

---

## 修改和应用

### 颜色语义化约定

| 颜色 | 语义 | 典型用途 |
|---|---|---|
| 🟢 绿 | 正常 / 开启 | 设备在线、开关 ON |
| 🔴 红 | 异常 / 关闭 | 设备离线、错误状态 |
| 🟡 黄 | 警告 / 注意 | 异常数据、待处理 |
| 🔵 蓝 | 信息 / 主要 | 主按钮、信息展示 |
| ⚪ 灰 | 中性 / 禁用 | 次要文字、边框 |

### 文字颜色

#### `.text-{color}-500` / `.text-{color}-700`（状态色）

```html
<div class="text-red-500">异常</div>
<div class="text-green-500">正常</div>
<div class="text-blue-500">信息</div>
<div class="text-yellow-500">警告</div>
```

<div class="my-2">
  <div class="text-red-500">异常</div>
  <div class="text-green-500">正常</div>
  <div class="text-blue-500">信息</div>
  <div class="text-yellow-500">警告</div>
</div>

#### 灰阶

| class | 用途 |
|---|---|
| `.text-gray-500` | 次要文字 |
| `.text-gray-700` | 二级文字 |
| `.text-gray-900` | 主文字 |
| `.text-white` | 白字（深底用） |

```html
<div class="text-gray-500">次要说明</div>
<div class="text-gray-900">主标题</div>
```

<div class="my-2">
  <div class="text-gray-500">次要说明</div>
  <div class="text-gray-900">主标题</div>
</div>

### 背景颜色

#### `.bg-{color}-100`（浅色背景，提示框用）

```html
<div class="bg-blue-100 text-blue-700 p-3 rounded">💡 提示信息</div>
<div class="bg-red-100 text-red-700 p-3 rounded">❌ 错误信息</div>
<div class="bg-green-100 text-green-700 p-3 rounded">✅ 成功信息</div>
```

<div class="my-2 space-y-2">
  <div class="bg-blue-100 text-blue-700 p-3 rounded">💡 提示信息</div>
  <div class="bg-red-100 text-red-700 p-3 rounded">❌ 错误信息</div>
  <div class="bg-green-100 text-green-700 p-3 rounded">✅ 成功信息</div>
</div>

#### `.bg-{color}-500`（主按钮）

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">保存</button>
<button class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">删除</button>
<button class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">确认</button>
```

<div class="flex gap-2 my-2">
  <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm cursor-pointer transition">保存</button>
  <button class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded text-sm cursor-pointer transition">删除</button>
  <button class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded text-sm cursor-pointer transition">确认</button>
</div>

#### `.bg-white` / `.bg-gray-50` / `.bg-gray-100`

基础背景色（暗色模式自动适配）：

| class | 用途 |
|---|---|
| `.bg-white` | 卡片背景 |
| `.bg-gray-50` | 页面背景 |
| `.bg-gray-100` | 次级背景（输入框、选中态） |

### 哪些会变暗，哪些不变？

| 会变暗（语义色） | 不会变暗（固定色阶） |
|---|---|
| `bg-white`、`bg-gray-50`、`bg-gray-100` | `bg-gray-200` 及以上 |
| `text-gray-900`、`text-gray-500` | `bg-blue-500` 等状态色 |
| `border` | `text-white` |

**规律**：基础外观色会变暗，状态色保持一致。

---

## 实际场景

### 状态徽章

```html
<span class="px-2 py-1 rounded bg-green-100 text-green-700 text-xs">在线</span>
<span class="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs">离线</span>
<span class="px-2 py-1 rounded bg-red-100 text-red-700 text-xs">故障</span>
```

效果：

<div class="flex gap-2 my-4">
  <span class="px-2 py-1 rounded bg-green-100 text-green-700 text-xs">在线</span>
  <span class="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs">离线</span>
  <span class="px-2 py-1 rounded bg-red-100 text-red-700 text-xs">故障</span>
  <span class="px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs">警告</span>
</div>

### 信息提示框

```html
<div class="bg-blue-100 text-blue-700 p-3 rounded">💡 提示信息</div>
<div class="bg-yellow-100 text-yellow-700 p-3 rounded mt-2">⚠️ 警告信息</div>
<div class="bg-red-100 text-red-700 p-3 rounded mt-2">❌ 错误信息</div>
<div class="bg-green-100 text-green-700 p-3 rounded mt-2">✅ 成功信息</div>
```

效果：

<div class="my-4">
  <div class="bg-blue-100 text-blue-700 p-3 rounded">💡 提示信息</div>
  <div class="bg-yellow-100 text-yellow-700 p-3 rounded mt-2">⚠️ 警告信息</div>
  <div class="bg-red-100 text-red-700 p-3 rounded mt-2">❌ 错误信息</div>
  <div class="bg-green-100 text-green-700 p-3 rounded mt-2">✅ 成功信息</div>
</div>

### 按钮配色（最常用）

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition">保存</button>
<button class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer transition ml-2">确认</button>
<button class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer transition ml-2">删除</button>
```

效果：

<div class="my-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition text-sm">保存</button>
  <button class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer transition text-sm ml-2">确认</button>
  <button class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer transition text-sm ml-2">删除</button>
</div>

---

## 什么时候用？

| 场景 | 推荐 class |
|---|---|
| 页面背景 | `bg-gray-50` |
| 卡片背景 | `bg-white` |
| 主文字 | `text-gray-900` |
| 次要文字 | `text-gray-500` |
| 边框 | `border` |
| 设备在线 | `bg-green-500` |
| 设备离线 | `bg-gray-300` |
| 主按钮 | `bg-blue-500 text-white` |
| 危险按钮 | `bg-red-500 text-white` |
| 成功提示 | `bg-green-100 text-green-700` |
| 警告提示 | `bg-yellow-100 text-yellow-700` |
| 错误提示 | `bg-red-100 text-red-700` |
| 信息提示 | `bg-blue-100 text-blue-700` |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 用 `bg-purple-500` `bg-pink-500` 装饰色 | Nova Style 没有，用 `bg-blue-500` 替代 |
| `bg-white` 当 hover 背景 | 用 `hover:bg-gray-100` |
| 提示框用纯白底色 | 用 `bg-*-100`（浅色底） |

---

## 下一步

- ✏️ [Typography](/utilities/typography)
- 🔲 [Borders & Shadows](/utilities/borders)
- 🌙 [暗色模式](/guide/dark-mode)