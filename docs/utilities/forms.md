# Forms（表单元素内置样式）

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">表单元素不用加任何 class 就有默认样式</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 12px; width: 100%; max-width: 400px;">
    <label>设备名称</label>
    <input type="text" value="客厅灯">
    <label>设备类型</label>
    <select>
      <option>💡 灯</option>
      <option>❄️ 空调</option>
      <option>🌀 风扇</option>
    </select>
    <label>亮度 <span id="lb1">75</span>%</label>
    <input type="range" min="0" max="100" value="75" oninput="document.getElementById('lb1').textContent=this.value">
    <label>备注</label>
    <textarea rows="2" placeholder="可选备注..."></textarea>
    <div class="flex items-center gap-2">
      <input type="checkbox" id="ck1" checked>
      <label for="ck1" style="margin: 0;">通电后自动开启</label>
    </div>
  </div>
</div>

---

## 极简代码

引入 `nova-style.css` 后，**什么都不加**就有默认样式：

```html
<input type="text" placeholder="姓名">
<select><option>...</option></select>
<textarea rows="3"></textarea>
```

---

## 修改和应用

### 支持的元素

| 元素 | 默认行为 |
|---|---|
| `input[type="text\|number\|email\|password"]` | 全宽、灰边框、圆角、focus 变蓝 |
| `select` | 全宽、灰边框、圆角 |
| `textarea` | 全宽、灰边框、圆角 |
| `input[type="checkbox"]` | 16×16、勾选色为绿色 |
| `input[type="range"]` | 全宽、轨道色为蓝色 |
| `label` | 灰色 14px 块级 |

### 输入框（text/number/email/password）

```html
<input type="text" placeholder="设备名称">
<input type="number" placeholder="数值">
<input type="email" placeholder="邮箱">
<input type="password" placeholder="密码">
```

效果：

<div class="flex flex-col gap-2 my-2">
  <input type="text" placeholder="设备名称">
  <input type="number" placeholder="数值">
  <input type="email" placeholder="邮箱">
  <input type="password" placeholder="密码">
</div>

### select 下拉框

```html
<select>
  <option>💡 灯</option>
  <option>🌀 风扇</option>
  <option>❄️ 空调</option>
</select>
```

<div class="my-2">
  <select>
    <option>💡 灯</option>
    <option>🌀 风扇</option>
    <option>❄️ 空调</option>
  </select>
</div>

### textarea 多行

```html
<textarea rows="3" placeholder="备注..."></textarea>
```

<div class="my-2">
  <textarea rows="3" placeholder="备注..."></textarea>
</div>

### checkbox 复选框

```html
<input type="checkbox" id="c1" checked>
<label for="c1">通电后自动开启</label>
```

效果：

<div class="flex items-center gap-2 my-2">
  <input type="checkbox" id="fc1" checked>
  <label for="fc1" style="margin: 0;">通电后自动开启</label>
</div>

> ⚠️ checkbox + label 同行需要给 label `style="margin: 0"` 或用 flex 包裹。

### range 滑块 + 实时数值

```html
<label>亮度 <span id="brightness">75</span>%</label>
<input type="range" min="0" max="100" value="75" id="slider"
       oninput="document.getElementById('brightness').textContent = this.value">
```

效果（拖动看）：

<div class="my-2">
  <label>亮度 <span id="br2">75</span>%</label>
  <input type="range" min="0" max="100" value="75" oninput="document.getElementById('br2').textContent=this.value">
</div>

### label

```html
<label>设备名称</label>
<input type="text">
```

<div class="my-2">
  <label>设备名称</label>
  <input type="text">
</div>

> label 默认是块级 + 有下边距。如果想"并排"用 flex 包裹 + label `style="margin: 0"`。

---

## 实际场景

### 完整设备配置表单

```html
<form class="bg-white p-6 rounded-lg shadow max-w-md" onsubmit="event.preventDefault()">
  <label>设备名称</label>
  <input type="text" value="客厅灯" class="mb-4">

  <label>设备类型</label>
  <select class="mb-4">
    <option>💡 灯</option>
    <option>❄️ 空调</option>
    <option>🌀 风扇</option>
  </select>

  <label>默认亮度: <span id="bri">75</span>%</label>
  <input type="range" min="0" max="100" value="75" class="mb-4"
         oninput="document.getElementById('bri').textContent=this.value">

  <label>备注</label>
  <textarea rows="2" class="mb-4"></textarea>

  <div class="flex items-center gap-2 mb-4">
    <input type="checkbox" id="auto" checked>
    <label for="auto" style="margin: 0;">通电后自动开启</label>
  </div>

  <div class="flex gap-2 mt-6">
    <button class="flex-1 py-2 rounded bg-blue-500 text-white cursor-pointer">保存</button>
    <button class="flex-1 py-2 rounded bg-gray-200 text-gray-700 cursor-pointer">取消</button>
  </div>
</form>
```

效果：

<form class="bg-white p-6 rounded-lg shadow max-w-md my-4" onsubmit="event.preventDefault()">
  <label>设备名称</label>
  <input type="text" value="客厅灯" class="mb-4">
  <label>设备类型</label>
  <select class="mb-4">
    <option>💡 灯</option>
    <option>❄️ 空调</option>
    <option>🌀 风扇</option>
  </select>
  <label>默认亮度: <span id="bri">75</span>%</label>
  <input type="range" min="0" max="100" value="75" class="mb-4" oninput="document.getElementById('bri').textContent=this.value">
  <label>备注</label>
  <textarea rows="2" class="mb-4"></textarea>
  <div class="flex items-center gap-2 mb-4">
    <input type="checkbox" id="auto" checked>
    <label for="auto" style="margin: 0;">通电后自动开启</label>
  </div>
  <div class="flex gap-2 mt-6">
    <button class="flex-1 py-2 rounded bg-blue-500 text-white cursor-pointer text-sm">保存</button>
    <button class="flex-1 py-2 rounded bg-gray-200 text-gray-700 cursor-pointer text-sm">取消</button>
  </div>
</form>

---

## 什么时候用？

| 想做什么 | 怎么写 |
|---|---|
| 文本输入 | `<input type="text">`（不用加 class） |
| 下拉选择 | `<select>` |
| 多行文本 | `<textarea>` |
| 复选框 | `<input type="checkbox">` |
| 滑块 | `<input type="range">` |
| 想覆盖默认样式 | 用 `class="input"` 引用同样的基础样式 |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 自己写 `input { border: 1px solid... }` | 依赖 nova-style.css 的默认样式 |
| 想覆盖时直接改元素样式 | 用 `class="input"` 引用基础样式 |
| 期望 placeholder 有好看的颜色 | Nova Style 不定制 placeholder |
| label 想跟 input 同行却没写 flex | label 默认块级 + 有 margin，要么 flex 要么 margin: 0 |

---

## 下一步

- 👆 [鼠标手势 Cursor](/utilities/cursor)
- 🎬 [过渡动画 & Hover](/utilities/transitions)