# Borders & Shadows（边框、圆角、阴影）

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">边框 + 圆角 + 阴影三件套对比</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 8px; width: 100%;">
    <div class="flex gap-2">
      <div class="flex-1 border p-3 rounded text-center text-sm">border</div>
      <div class="flex-1 border-2 border-red-500 p-3 rounded text-center text-sm">border-red-500</div>
    </div>
    <div class="flex items-center gap-2 justify-center mt-2">
      <div class="bg-blue-500 text-white px-3 py-2 rounded text-sm">rounded 4px</div>
      <div class="bg-blue-500 text-white px-3 py-2 rounded-md text-sm">rounded-md 6px</div>
      <div class="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm">rounded-lg 8px</div>
      <div class="bg-blue-500 text-white px-3 py-2 rounded-xl text-sm">rounded-xl 12px</div>
      <div class="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center">圆</div>
    </div>
    <div class="flex gap-2 justify-center mt-2">
      <div class="bg-white p-3 rounded shadow-sm text-sm">shadow-sm</div>
      <div class="bg-white p-3 rounded shadow text-sm">shadow</div>
      <div class="bg-white p-3 rounded shadow-md text-sm">shadow-md</div>
      <div class="bg-white p-3 rounded shadow-lg text-sm">shadow-lg</div>
    </div>
  </div>
</div>

---

## 极简代码

```html
<!-- 标准卡片 -->
<div class="bg-white p-4 rounded-lg shadow">内容</div>

<!-- 圆形状态点 -->
<span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
```

---

## 修改和应用

### 边框

| class | 效果 |
|---|---|
| `.border` | 1px 边框（默认色） |
| `.border-2` | 2px 边框（更醒目） |
| `.border-{color}-500` | 状态色边框 |

```html
<!-- 信息提示框 -->
<div class="bg-blue-100 border border-blue-500 text-blue-700 p-3 rounded">
  💡 这是一条提示信息
</div>
```

<div class="bg-blue-100 border border-blue-500 text-blue-700 p-3 rounded my-2">💡 这是一条提示信息</div>

```html
<!-- 状态色边框 -->
<div class="border border-red-500 p-2 rounded mb-1">红色边框（错误）</div>
<div class="border border-green-500 p-2 rounded mb-1">绿色边框（成功）</div>
```

<div class="my-2">
  <div class="border border-red-500 p-2 rounded mb-1 text-sm">红色边框（错误）</div>
  <div class="border border-green-500 p-2 rounded text-sm">绿色边框（成功）</div>
</div>

### 圆角（5 种主类 + 2 种边角类）

| class | 圆角 | 典型用途 |
|---|---|---|
| `.rounded` | 4px | 标签、徽章 |
| `.rounded-md` | 6px | 输入框 |
| `.rounded-lg` ⭐ | 8px | 卡片、按钮（最常用） |
| `.rounded-xl` | 12px | 大卡片 |
| `.rounded-full` | 50% | 头像、状态点 |
| `.rounded-t` | 仅顶部 | 柱状图顶部 |
| `.rounded-b` | 仅底部 | 表格底部 |

```html
<!-- 状态圆点（IoT 最常用） -->
<span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
```

<span class="inline-block w-3 h-3 rounded-full bg-green-500 my-2"></span>

```html
<!-- 柱状图顶部圆角 -->
<div class="bg-blue-500 w-12 rounded-t" style="height: 80px"></div>
```

<div class="flex items-end h-24 my-2">
  <div class="bg-blue-500 w-12 rounded-t" style="height: 80px"></div>
</div>

### 阴影（4 种）

| class | 用途 |
|---|---|
| `.shadow-sm` | 极淡阴影 |
| `.shadow` ⭐ | 默认阴影（卡片最常用） |
| `.shadow-md` | 中等阴影 |
| `.shadow-lg` | 重阴影（弹窗） |

```html
<!-- 标准卡片 -->
<div class="bg-white p-4 rounded-lg shadow">内容</div>
```

<div class="bg-white p-4 rounded-lg shadow my-2 inline-block">内容</div>

> ⚠️ 暗色模式下阴影会自动变弱。

---

## 实际场景

### 信息提示框（背景+边框+圆角组合）

```html
<div class="bg-blue-100 border border-blue-500 text-blue-700 p-3 rounded">💡 提示</div>
<div class="bg-yellow-100 border border-yellow-500 text-yellow-700 p-3 rounded mt-2">⚠️ 警告</div>
<div class="bg-red-100 border border-red-500 text-red-700 p-3 rounded mt-2">❌ 错误</div>
```

效果：

<div class="my-4">
  <div class="bg-blue-100 border border-blue-500 text-blue-700 p-3 rounded">💡 提示</div>
  <div class="bg-yellow-100 border border-yellow-500 text-yellow-700 p-3 rounded mt-2">⚠️ 警告</div>
  <div class="bg-red-100 border border-red-500 text-red-700 p-3 rounded mt-2">❌ 错误</div>
</div>

### 圆点状态灯

```html
<span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>  在线
<span class="inline-block w-3 h-3 rounded-full bg-gray-300 ml-2"></span>   离线
<span class="inline-block w-3 h-3 rounded-full bg-red-500 ml-2"></span>    故障
<span class="inline-block w-3 h-3 rounded-full bg-yellow-500 ml-2"></span> 警告
```

效果：

<div class="my-4 text-sm">
  <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>在线
  <span class="inline-block w-3 h-3 rounded-full bg-gray-300 ml-3"></span>离线
  <span class="inline-block w-3 h-3 rounded-full bg-red-500 ml-3"></span>故障
  <span class="inline-block w-3 h-3 rounded-full bg-yellow-500 ml-3"></span>警告
</div>

### 柱状图（rounded-t 顶部圆角）

```html
<div class="flex items-end gap-1 h-40 bg-white p-4 rounded shadow">
  <div class="bg-blue-500 w-full rounded-t" style="height: 30%"></div>
  <div class="bg-blue-500 w-full rounded-t" style="height: 50%"></div>
  <div class="bg-green-500 w-full rounded-t" style="height: 75%"></div>
  <div class="bg-yellow-500 w-full rounded-t" style="height: 90%"></div>
  <div class="bg-red-500 w-full rounded-t" style="height: 100%"></div>
</div>
```

效果：

<div class="flex items-end gap-1 h-40 bg-white p-4 rounded shadow my-4">
  <div class="bg-blue-500 w-full rounded-t" style="height: 30%"></div>
  <div class="bg-blue-500 w-full rounded-t" style="height: 50%"></div>
  <div class="bg-green-500 w-full rounded-t" style="height: 75%"></div>
  <div class="bg-yellow-500 w-full rounded-t" style="height: 90%"></div>
  <div class="bg-red-500 w-full rounded-t" style="height: 100%"></div>
</div>

---

## 什么时候用？

| 场景 | class 组合 |
|---|---|
| 普通卡片 | `.bg-white` + `.p-4` + `.rounded-lg` + `.shadow` |
| 按钮 | `.rounded` 或 `.rounded-lg` |
| 状态点 | `.rounded-full` + `.bg-*-500` |
| 输入框 | `.border` + `.rounded-md` |
| 信息提示框 | `.bg-*-100` + `.border border-*-500` + `.text-*-700` + `.rounded` |
| 柱状图顶部 | `.rounded-t` |
| 弹窗 | `.bg-white` + `.rounded-lg` + `.shadow-lg` |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 大圆角配小元素 | 圆角大小匹配元素尺寸 |
| 暗色模式下用 `.shadow-lg`（会很重） | Nova Style 已自动处理 |

---

## 下一步

- 🎨 [颜色用法](/utilities/colors)
- ✏️ [Typography](/utilities/typography)