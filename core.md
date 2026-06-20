# Nova Style · 极简工具类文档

> 给学生用的 Tailwind 核心子集，~120 个 class，专为物联网控制页面设计。
>
> 配套文件：`nova-style.css`（约 5KB）

---

## 一、设计原则

| 原则 | 说明 |
|---|---|
| **够用就好** | 不做大而全，省掉动画、transform、ring 等装饰性 class |
| **颜色语义化** | 5 个色系严格对应 IoT 状态，不是装饰色 |
| **纯工具类** | 不藏 `.card` `.btn` 这种黑盒组件，学生能看懂每行 CSS |
| **4px 基准** | 间距全部按 4 的倍数（`1`=4px, `2`=8px, …） |

---

## 二、颜色约定（重要！）

| 颜色 | 语义 | 典型用途 |
|---|---|---|
| 🟢 绿色 | 正常 / 开启 / 成功 | 设备在线、开关 ON、运行指示 |
| 🔴 红色 | 异常 / 关闭 / 错误 | 设备离线、开关 OFF、错误状态 |
| 🟡 黄色 | 警告 / 注意 | 异常数据、待处理事项 |
| 🔵 蓝色 | 信息 / 主要操作 | 主按钮、信息展示、链接 |
| ⚪ 灰色 | 中性 / 禁用 | 次要文字、禁用状态、边框 |

每个色系保留 3 个深浅：`100`（浅色背景）、`500`（默认）、`700`（按下/文字）。

---

## 三、快速开始

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="nova-style.css">
</head>
<body class="bg-gray-50">
  <div class="bg-white p-4 rounded-lg shadow">
    你好，Nova
  </div>
</body>
</html>
```

---

## 四、IoT 页面常用模式（建议先看这章）

### 1. 传感器数据卡片

```html
<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold text-gray-900 mt-2">23.5°C</div>
</div>
```

### 2. 开关按钮（ON / OFF）

```html
<!-- ON 状态 -->
<button class="px-4 py-2 rounded bg-green-500 text-white cursor-pointer">
  开灯
</button>

<!-- OFF 状态 -->
<button class="px-4 py-2 rounded bg-gray-300 text-gray-700 cursor-pointer">
  开灯
</button>
```

### 3. 状态指示灯（LED 圆点）

```html
<!-- 在线 -->
<span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
<span class="ml-2 text-sm text-gray-700">在线</span>

<!-- 离线 -->
<span class="inline-block w-3 h-3 rounded-full bg-red-500"></span>
<span class="ml-2 text-sm text-gray-700">离线</span>
```

### 4. 设备控制面板

```html
<div class="bg-white p-6 rounded-lg shadow">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-bold">客厅灯</h2>
    <span class="w-3 h-3 rounded-full bg-green-500"></span>
  </div>
  <div class="flex gap-2">
    <button class="flex-1 py-2 rounded bg-blue-500 text-white">开</button>
    <button class="flex-1 py-2 rounded bg-gray-200 text-gray-700">关</button>
  </div>
</div>
```

### 5. 多传感器网格

```html
<div class="grid grid-cols-3 gap-4 p-4">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">温度</div>
    <div class="text-2xl font-bold mt-1">23.5°C</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">湿度</div>
    <div class="text-2xl font-bold mt-1">65%</div>
  </div>
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">光照</div>
    <div class="text-2xl font-bold mt-1">420 lx</div>
  </div>
</div>
```

### 6. 顶部导航栏

```html
<div class="bg-gray-800 text-white p-4 flex justify-between items-center">
  <div class="text-lg font-bold">智能家居控制台</div>
  <div class="flex gap-2 items-center">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span class="text-sm">已连接</span>
  </div>
</div>
```

### 7. 警告 / 异常提示

```html
<div class="bg-yellow-100 border border-yellow-500 text-yellow-700 p-3 rounded">
  ⚠️ 温度超过阈值 (30°C)
</div>

<div class="bg-red-100 border border-red-500 text-red-700 p-3 rounded mt-2">
  ❌ 设备连接断开
</div>
```

---

## 五、完整 class 速查

### 5.1 显示

| class | 效果 |
|---|---|
| `.block` | `display: block` |
| `.inline-block` | `display: inline-block` |
| `.flex` | `display: flex` |
| `.inline-flex` | `display: inline-flex` |
| `.grid` | `display: grid` |
| `.hidden` | `display: none` |

### 5.2 Flex 布局

| class | 效果 |
|---|---|
| `.flex-row` `.flex-col` `.flex-wrap` | 方向与换行 |
| `.items-start` `.items-center` `.items-end` `.items-stretch` | 交叉轴对齐 |
| `.justify-start` `.justify-center` `.justify-end` `.justify-between` `.justify-around` | 主轴对齐 |
| `.flex-1` | 子元素占满剩余空间 |
| `.gap-1` ~ `.gap-8` | 子元素间距（1=4px, 2=8px, 3=12px, 4=16px, 6=24px, 8=32px） |

### 5.3 Grid 布局

| class | 效果 |
|---|---|
| `.grid-cols-2` `.grid-cols-3` `.grid-cols-4` | 等分布局 |

### 5.4 宽高

| class | 效果 |
|---|---|
| `.w-full` `.w-1\/2` `.w-1\/3` `.w-2\/3` `.w-1\/4` `.w-3\/4` | 宽度比例 |
| `.w-12` `.w-16` `.w-24` `.w-32` | 固定宽度（48/64/96/128px） |
| `.h-full` `.h-screen` `.min-h-screen` | 高度 |
| `.h-12` `.h-16` `.h-24` `.h-32` | 固定高度 |

### 5.5 间距（Padding / Margin）

> 数字含义同 gap：`1`=4px, `2`=8px, `3`=12px, `4`=16px, `6`=24px, `8`=32px

- **Padding**：`p-1` ~ `p-8`、`px-2` ~ `px-6`、`py-1` ~ `py-4`
- **Margin**：`m-1` ~ `m-4`、`mx-auto`（水平居中）、`mt-2` `mt-4` `mb-2` `mb-4`

### 5.6 文字

| 类别 | class |
|---|---|
| 大小 | `text-xs` `text-sm` `text-base` `text-lg` `text-xl` `text-2xl` `text-3xl` `text-4xl` |
| 字重 | `font-normal` `font-medium` `font-bold` |
| 对齐 | `text-left` `text-center` `text-right` |

### 5.7 颜色

**文字色**：`.text-white` `.text-gray-{100,300,500,700,900}` `.text-{red,green,blue,yellow}-500`

**背景色**：`.bg-white` `.bg-gray-{50,100,200,300,500,700,800,900}` `.bg-{red,green,blue,yellow}-{100,500,700}`

### 5.8 边框 / 圆角 / 阴影

| 类别 | class |
|---|---|
| 边框 | `.border` `.border-2` `.border-{gray-200,gray-300,red-500,green-500,blue-500}` |
| 圆角 | `.rounded` `.rounded-md` `.rounded-lg` `.rounded-xl` `.rounded-full` |
| 阴影 | `.shadow-sm` `.shadow` `.shadow-md` `.shadow-lg` |

### 5.9 交互

| class | 效果 |
|---|---|
| `.cursor-pointer` `.cursor-not-allowed` | 鼠标手势 |
| `.transition` `.duration-150` | 过渡动画 |
| `.hover\:bg-{blue,green,red,gray}-700` | 悬停变色（按钮用） |

---

## 六、推荐组合（Cheatsheet）

```html
<!-- 卡片 -->
<div class="bg-white p-4 rounded-lg shadow"></div>

<!-- 大数据展示 -->
<div class="text-3xl font-bold text-center"></div>

<!-- 标签 + 数值 -->
<div class="text-sm text-gray-500"></div>
<div class="text-2xl font-bold"></div>

<!-- 主操作按钮 -->
<button class="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer"></button>

<!-- 状态圆点 -->
<span class="w-3 h-3 rounded-full bg-green-500"></span>

<!-- 居中容器 -->
<div class="mx-auto w-1/2"></div>

<!-- 横向均匀分布 -->
<div class="flex justify-between items-center"></div>
```

---

## 七、如何扩展

学生想加新 class 时，建议遵循：

1. **间距继续用 4 的倍数**：`p-5` = 20px、`gap-10` = 40px
2. **颜色只加语义**：避免 `purple-500` `pink-500` 这种装饰色，需要时优先用 blue/green 替代
3. **一个 class 只做一件事**：别做 `.big-blue-button` 这种组合 class
4. **想加 hover**：在 CSS 里加一行 `.xxx:hover { ... }` 即可

---

## 八、为什么不用完整 Tailwind？

| | Tailwind | Nova Style |
|---|---|---|
| class 数量 | 1000+ | ~120 |
| 文件大小 | 3MB+（CDN） | 5KB |
| 学习曲线 | 陡 | 平 |
| IoT 场景覆盖 | 过量 | 刚好 |
| 学生能否记住 | 难 | 可 |

如果后续需要加更多功能（动画、响应式断点、暗黑模式），按 `core.md` 第七节扩展即可，不必一开始就上完整 Tailwind。
