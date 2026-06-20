# Typography（文字）

## 效果预览

<div class="nova-demo">
  <div class="nova-demo-header">8 种文字大小对比</div>
  <div class="nova-demo-body" style="flex-direction: column; align-items: stretch; gap: 4px;">
    <div class="text-xs bg-white border rounded p-2">text-xs (12px) - 极小字</div>
    <div class="text-sm bg-white border rounded p-2">text-sm (14px) - 标签</div>
    <div class="text-base bg-white border rounded p-2">text-base (16px) - 正文</div>
    <div class="text-lg bg-white border rounded p-2">text-lg (18px)</div>
    <div class="text-xl bg-white border rounded p-2">text-xl (20px) - 小标题</div>
    <div class="text-2xl bg-white border rounded p-2">text-2xl (24px) - 卡片标题</div>
    <div class="text-3xl bg-white border rounded p-2">text-3xl (30px) - 数据</div>
    <div class="text-4xl bg-white border rounded p-2">text-4xl (36px) - 极大数据</div>
  </div>
</div>

---

## 极简代码

```html
<div class="text-3xl font-bold">24.5°C</div>
```

---

## 修改和应用

### 文字大小（8 种）

| class | 像素 | 用途 |
|---|---|---|
| `.text-xs` | 12px | 极小字（版权、辅助） |
| `.text-sm` | 14px | 标签、次要文字 |
| `.text-base` | 16px | 正文（默认） |
| `.text-lg` | 18px | 强调正文 |
| `.text-xl` | 20px | 小标题 |
| `.text-2xl` | 24px | 卡片标题 |
| `.text-3xl` | 30px | 大数据 |
| `.text-4xl` | 36px | 极大数据 |

```html
<!-- IoT 传感器卡片的标准三层 -->
<div class="text-center">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2">24.5°C</div>
  <div class="text-xs text-green-500 mt-2">↑ 正常</div>
</div>
```

<div class="bg-white p-4 rounded-lg shadow text-center inline-block my-2">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2">24.5°C</div>
  <div class="text-xs text-green-500 mt-2">↑ 正常</div>
</div>

### 字重（3 种）

| class | font-weight |
|---|---|
| `.font-normal` | 400（普通） |
| `.font-medium` | 500（略重，标题常用） |
| `.font-bold` | 700（加粗，重点数据） |

```html
<div class="text-3xl font-bold">24.5°C</div>
<span class="font-medium">标题</span>
```

<div class="my-2">
  <div class="text-3xl font-bold">24.5°</div>
  <div class="font-medium mt-1">标题（略重）</div>
</div>

### 文字对齐（3 种）

| class | 效果 |
|---|---|
| `.text-left` | 左对齐（默认） |
| `.text-center` | 居中 |
| `.text-right` | 右对齐 |

```html
<!-- 卡片数值居中 -->
<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-3xl font-bold">24.5°</div>
</div>
```

<div class="bg-white p-4 rounded-lg shadow text-center inline-block my-2">
  <div class="text-3xl font-bold">24.5°</div>
</div>

---

## 实际场景

### IoT 传感器卡片（标准三层结构）

```html
<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2">24.5<span class="text-base text-gray-500 ml-1 font-normal">°C</span></div>
  <div class="text-xs text-green-500 mt-2">↑ 正常</div>
</div>
```

效果：

<div class="bg-white p-4 rounded-lg shadow text-center my-4">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2">24.5<span class="text-base text-gray-500 ml-1 font-normal">°C</span></div>
  <div class="text-xs text-green-500 mt-2">↑ 正常</div>
</div>

### 列表项（标签 + 数值）

```html
<div class="flex justify-between items-center bg-white border rounded p-3">
  <span class="text-sm text-gray-500">设备名称</span>
  <span class="text-base font-medium">客厅灯</span>
</div>
```

效果：

<div class="flex justify-between items-center bg-white border rounded p-3 my-4">
  <span class="text-sm text-gray-500">设备名称</span>
  <span class="text-base font-medium">客厅灯</span>
</div>

---

## 文字层级模板（背下来）

```html
<!-- 标题 -->
<h1 class="text-2xl font-bold">智能家居</h1>

<!-- 副标题 / 卡片标题 -->
<h2 class="text-lg font-bold">设备列表</h2>

<!-- 正文 -->
<p class="text-base">这是普通文字</p>

<!-- 辅助说明 -->
<div class="text-sm text-gray-500">上次更新：3 分钟前</div>

<!-- 极小提示 -->
<div class="text-xs text-gray-500">v1.0.0</div>
```

---

## 什么时候用？

| 场景 | class 组合 |
|---|---|
| 页面大标题 | `.text-2xl` + `.font-bold` |
| 卡片标题 | `.text-lg` + `.font-bold` |
| 传感器数值 | `.text-3xl` + `.font-bold` |
| 极值展示 | `.text-4xl` + `.font-bold` |
| 字段标签 | `.text-sm` + `.text-gray-500` |
| 辅助说明 | `.text-xs` + `.text-gray-500` |
| 数值单位 | `.text-base` + `.text-gray-500` + `.font-normal` |

---

## 常见错误

| ❌ 不要 | ✅ 应该 |
|---|---|
| 用 `.text-base` 显示大字 | 选 `.text-3xl` 或更大 |
| 数值和单位都用同一字号 | 数值大字、单位小字灰字 |
| 不加字重对比 | 数据加 `.font-bold`，标签保持普通 |

---

## 下一步

- 🎨 [颜色用法](/utilities/colors)
- 🔲 [Borders & Shadows](/utilities/borders)