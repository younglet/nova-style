# 传感器卡片

最常见的 IoT UI 组件。展示一个数据点：标签 + 大数字 + 单位 + 状态。

## 目标

做出这样的卡片：

<div class="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
  <SensorCard label="温度" value="24.5" unit="°C" color="default" status="正常" statusType="normal" />
  <SensorCard label="湿度" value="65" unit="%" color="blue" status="正常" statusType="normal" />
  <SensorCard label="PM2.5" value="35" color="green" status="优" statusType="normal" />
  <SensorCard label="土壤湿度" value="28" unit="%" color="yellow" status="偏低" statusType="warning" />
</div>

## 完整代码

```html
<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2">24.5<span class="text-base text-gray-500 ml-1 font-normal">°C</span></div>
  <div class="text-xs text-green-500 mt-2">↑ 正常</div>
</div>
```

## 讲解

### 1. 外层容器

```html
<div class="bg-white p-4 rounded-lg shadow text-center">
```

| class | 作用 |
|---|---|
| `bg-white` | 白色背景 |
| `p-4` | 内部 16px 留白 |
| `rounded-lg` | 圆角（8px） |
| `shadow` | 默认阴影 |
| `text-center` | 内容居中 |

这就是"卡片"的全部配方：`bg-white p-4 rounded-lg shadow`——四件套，记住就行。

### 2. 标签

```html
<div class="text-sm text-gray-500">温度</div>
```

灰色小字，作为数据的标签/单位说明。

### 3. 大数字

```html
<div class="text-3xl font-bold mt-2">24.5<span class="text-base text-gray-500 ml-1 font-normal">°C</span></div>
```

- `text-3xl` 让数字大
- `font-bold` 加粗
- 单位 `°C` 用 `text-base text-gray-500` 缩小变灰，跟主数字形成层级

### 4. 状态

```html
<div class="text-xs text-green-500 mt-2">↑ 正常</div>
```

- 用颜色表达状态（绿=正常，红=异常，黄=警告）
- `text-xs` 缩小，不抢主数字的视觉重心

## 多种状态

```html
<!-- 正常 -->
<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2">24.5°C</div>
  <div class="text-xs text-green-500 mt-2">↑ 正常</div>
</div>

<!-- 异常 -->
<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2 text-red-500">32.1°C</div>
  <div class="text-xs text-red-500 mt-2">✕ 超过阈值</div>
</div>

<!-- 警告 -->
<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-sm text-gray-500">土壤湿度</div>
  <div class="text-3xl font-bold mt-2 text-yellow-500">28%</div>
  <div class="text-xs text-yellow-700 mt-2">⚠ 偏低</div>
</div>
```

## 网格排列

把多个卡片放进 grid：

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">温度</div>
    <div class="text-3xl font-bold mt-2">24.5°C</div>
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

## 练习

1. 改一个卡片，加上 `border-2 border-red-500` 让异常卡片更醒目
2. 加上"上次更新时间"的辅助信息（`text-xs text-gray-500`）
3. 把 3 列改成 4 列（`grid-cols-4`）
4. 给数值加一个"趋势箭头"（↑ ↓ →）用 `text-xs`

下一步 → [开关按钮](/examples/toggle-button)
