# Cursor（鼠标手势）

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">2 种 cursor 效果对比（把鼠标移过去看）</div>
  <div class="nova-demo-body">
    <button class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition">可点击 👆</button>
    <button disabled class="cursor-not-allowed bg-gray-200 text-gray-500 px-4 py-2 rounded">不可点 🚫</button>
  </div>
</div>

---

## 极简代码

```html
<button class="cursor-pointer">可点击</button>
<button disabled class="cursor-not-allowed">禁用</button>
```

---

## 修改和应用

### `.cursor-pointer`

| 项 | 说明 |
|---|---|
| **含义** | `cursor: pointer`，鼠标变成 👆 手指 |
| **典型场景** | 可点击的按钮、链接、可交互卡片 |
| **口诀** | 加了它就是"承诺"——用户点了必须要有反应 |

```html
<button class="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
  保存
</button>
```

<button class="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded my-2">保存</button>

```html
<!-- 整张卡片可点击 -->
<div class="cursor-pointer bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition">
  <div class="font-bold">💡 客厅灯</div>
  <div class="text-sm text-gray-500 mt-1">点击进入详情</div>
</div>
```

<div class="cursor-pointer bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition my-2">
  <div class="font-bold">💡 客厅灯</div>
  <div class="text-sm text-gray-500 mt-1">点击进入详情</div>
</div>

### `.cursor-not-allowed`

| 项 | 说明 |
|---|---|
| **含义** | `cursor: not-allowed`，鼠标变成 🚫 禁止 |
| **典型场景** | disabled 按钮、加载中、权限不足的功能 |
| **口诀** | 加了它说明这个功能"看得见但点不动" |

```html
<button disabled class="cursor-not-allowed bg-gray-200 text-gray-500 px-4 py-2 rounded">
  不可用
</button>
```

<button disabled class="cursor-not-allowed bg-gray-200 text-gray-500 px-4 py-2 rounded my-2">不可用</button>

---

## 实际场景

### 离线设备不可控（IoT 经典场景）

```html
<!-- 在线：可点 -->
<button class="cursor-pointer bg-green-500 text-white px-4 py-2 rounded transition hover:bg-green-700">
  💡 打开客厅灯
</button>

<!-- 离线：不可点 -->
<button disabled class="cursor-not-allowed bg-gray-200 text-gray-500 px-4 py-2 rounded ml-2">
  💡 打开客厅灯（离线）
</button>
```

效果：

<div class="my-4">
  <button class="cursor-pointer bg-green-500 text-white px-4 py-2 rounded transition hover:bg-green-700 text-sm">💡 打开客厅灯</button>
  <button disabled class="cursor-not-allowed bg-gray-200 text-gray-500 px-4 py-2 rounded text-sm ml-2">💡 打开客厅灯（离线）</button>
</div>

---

## 什么时候用？

| 元素 | 推荐 |
|---|---|
| `<button>` 可点击 | `cursor-pointer` |
| `<button disabled>` | `cursor-not-allowed` |
| `<a href="...">` | 不加（浏览器默认就是） |
| 整张可点卡片 | 卡片上加 `cursor-pointer` |
| 普通 `<div>` / `<span>` | 不加（保持默认箭头） |
| 加载中的元素 | `cursor-not-allowed` |

> **小经验**：把 `cursor-pointer` 当成"承诺"——加了它就意味着用户点下去必须有反应，否则用户会很困惑。

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 给 `<div>` 加 `cursor-pointer` 但没绑 click | 先想清楚"点了会怎样"再加 |
| 给 `disabled` 元素加 `cursor-pointer` | disabled 时改用 `cursor-not-allowed` |
| 装饰性小图标也加 cursor | 装饰元素不加，光标会误导 |

---

## 下一步

- 🎬 [过渡动画 & Hover](/utilities/transitions) — 让按钮点起来更舒服
- 📝 [表单元素内置样式](/utilities/forms)