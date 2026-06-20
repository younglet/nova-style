# 间距（Padding & Margin）

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">Padding 让元素"变大"，Margin 让元素"远离别人"</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 16px;">
    <div class="flex">
      <div class="p-4 bg-blue-100 rounded mr-4">p-4 内边距</div>
      <div class="bg-blue-100 rounded">无内边距</div>
    </div>
    <div class="flex">
      <div class="bg-green-100 rounded mr-4">mr-4 右外边距</div>
      <div class="bg-green-100 rounded">靠近</div>
    </div>
  </div>
</div>

---

## 极简代码

4px 基准对照表：

| 数字 | 实际值 |
|---|---|
| `1` | 4px |
| `2` | 8px |
| `3` | 12px |
| `4` | 16px（**最常用**） |
| `6` | 24px |
| `8` | 32px |

```html
<!-- 标准卡片 -->
<div class="bg-white p-4 rounded-lg shadow">内容</div>

<!-- 按钮 -->
<button class="px-4 py-2 bg-blue-500 text-white rounded">按钮</button>

<!-- 水平居中 -->
<div class="mx-auto w-1/2">...</div>
```

---

## 修改和应用

### Padding 4 边相同

| class | 实际值 |
|---|---|
| `.p-1` | 4px |
| `.p-2` | 8px |
| `.p-3` | 12px |
| `.p-4` | 16px（最常用） |
| `.p-6` | 24px |
| `.p-8` | 32px |

```html
<!-- 卡片：4 边内边距 16px -->
<div class="bg-white p-4 border rounded">
  这是一个 4 边都留 16px 空间的卡片
</div>
```

<div class="bg-white p-4 border rounded my-2">这是一个 4 边都留 16px 空间的卡片</div>

### Padding 左右 / 上下

| 写法 | 含义 |
|---|---|
| `.px-N` | 左右 N px |
| `.py-N` | 上下 N px |

```html
<!-- 按钮：左右 16px，上下 8px（最常见） -->
<button class="px-4 py-2 bg-blue-500 text-white rounded">按钮</button>
```

<button class="px-4 py-2 bg-blue-500 text-white rounded my-2">按钮</button>

### Margin 水平居中 ⭐

| class | 效果 |
|---|---|
| `.mx-auto` | 水平居中（最常用） |
| `.m-auto` | 4 边 auto |

```html
<!-- 水平居中，宽度 50% -->
<div class="mx-auto w-1/2 bg-white p-4 rounded shadow text-center">
  我被居中了
</div>
```

<div class="my-2">
  <div class="mx-auto w-1/2 bg-white p-4 rounded shadow text-center text-sm">我被居中了</div>
</div>

> ⚠️ `.mx-auto` 只对**有宽度**的元素生效。如果是 `w-full`（100%），居中看不出效果。

### Margin 单边

| class | 效果 |
|---|---|
| `.mt-N` | 仅上 N px |
| `.mb-N` | 仅下 N px |

```html
<h2 class="mb-4">标题</h2>
<p>正文...</p>
```

<h2 class="font-bold mb-4 my-2">标题</h2>
<p class="text-sm text-gray-700 my-2">正文，跟标题隔开 16px。</p>

---

## Padding vs Margin 怎么选？

简单原则：

- 想让元素**自己变大**（呼吸感）→ 用 **Padding**
- 想让元素**远离其他元素** → 用 **Margin**
- 子元素之间留空 → **父元素用 `gap`**（更简单）

```html
<!-- 卡片：用 padding 让内容有呼吸感 -->
<div class="bg-white p-4 rounded-lg shadow">卡片内容</div>

<!-- 标题与正文之间：用 margin 隔开 -->
<h1 class="mb-4">标题</h1>
<p>正文</p>
```

---

## 实际场景

### 表单字段间距

```html
<form class="bg-white p-6 rounded-lg shadow">
  <label>姓名</label>
  <input type="text" class="mb-4">      <!-- 字段间 16px -->

  <label>邮箱</label>
  <input type="email" class="mb-4">

  <label>备注</label>
  <textarea rows="3"></textarea>
</form>
```

效果：

<form class="bg-white p-6 rounded-lg shadow max-w-md my-4" onsubmit="event.preventDefault()">
  <label>姓名</label>
  <input type="text" class="mb-4">
  <label>邮箱</label>
  <input type="email" class="mb-4">
  <label>备注</label>
  <textarea rows="3"></textarea>
</form>

### 仪表盘卡片网格

```html
<div class="grid grid-cols-3 gap-4 p-4">  <!-- gap = 卡片间，p = 容器内边距 -->
  <div class="bg-white p-4 rounded-lg shadow text-center">  <!-- p = 卡片内边距 -->
    <div class="text-sm text-gray-500">温度</div>
    <div class="text-3xl font-bold mt-2">24.5°</div>  <!-- mt = 标签和数值间 -->
  </div>
</div>
```

效果：

<div class="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded my-4">
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

> 💡 这里同时用了 4 个不同的间距 class，每个都有明确职责：
> - `.p-4` 在容器上 = 容器与卡片边缘的间距
> - `.gap-4` 在网格上 = 卡片之间的间距
> - `.p-4` 在卡片上 = 卡片内部内容边距
> - `.mt-2` 在数值上 = 标签和数值的间距

---

## 什么时候用？

| 想做什么 | 用什么 |
|---|---|
| 让卡片有呼吸感 | 卡片用 `.p-4` 或 `.p-6` |
| 让按钮紧凑好看 | 按钮用 `.px-4` `.py-2` |
| 让标题远离下面的内容 | 标题用 `.mb-4` |
| 让容器水平居中 | 容器用 `.mx-auto` + `.w-N` |
| 子元素之间留空 | **父元素用 `.gap-N`**（推荐） |
| 卡片大留白 | `.p-6` 或 `.p-8` |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 给每个子元素加 `mb-4` | 父元素用 `gap-4` |
| `.mx-auto` 加在 `w-full` 元素上 | `.mx-auto` 需要有"剩余宽度" |
| 数字乱选（`.p-5`、`.p-7`） | Nova Style 没有，跳到下一档 |

---

## 下一步

- 📐 [Display](/utilities/display) · [Flex](/utilities/flex)
- 📏 [Width & Height](/utilities/sizing)