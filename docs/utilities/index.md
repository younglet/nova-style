# 完整 class 索引

> Nova Style 全部 ~120 个 class 的速查表。
>
> 找不到某个 class？按 `Ctrl+F` 搜 class 名。

---

## 整体概览

### Nova Style 一共有多少 class？

约 **120 个**，分 **8 大组**。

### 大组一览

| 大组 | 数量 | 干什么的 | 详情 |
|---|---|---|---|
| 📐 布局 | 18 | 控制元素排列方式 | [Display](/utilities/display) · [Flex](/utilities/flex) · [Grid](/utilities/grid) |
| 📏 尺寸 | 19 | 控制元素的宽和高 | [Width & Height](/utilities/sizing) |
| ↔️ 间距 | 22 | 元素内外的留白 | [Padding & Margin](/utilities/spacing) |
| ✏️ 文字 | 14 | 字体大小、字重、对齐 | [Typography](/utilities/typography) |
| 🎨 颜色 | 33 | 文字颜色 + 背景颜色 | [Colors](/utilities/colors) |
| 🔲 外观 | 19 | 边框、圆角、阴影 | [Borders & Shadows](/utilities/borders) |
| 👆 交互 | 9 | 鼠标手势、过渡、hover | [Cursor](/utilities/cursor) · [Transitions](/utilities/transitions) |
| 📝 表单 | 6 元素 | input/select/textarea 内置样式 | [Forms](/utilities/forms) |

### 怎么读这一页？

每个 class 都按下面格式列出：

```
.class-name       ← 分类    一句话说明
```

---

## 详情

### 📐 布局（18 个）

#### 显示（6 个）

| class | 效果 |
|---|---|
| `.block` | 块级元素，独占一行 |
| `.inline-block` | 行内块，不独占但可设宽高 |
| `.flex` | 弹性盒子（最常用） |
| `.inline-flex` | 行内弹性盒子 |
| `.grid` | 网格布局 |
| `.hidden` | 隐藏元素（`display: none`） |

#### Flex 方向（3 个）

| class | 效果 |
|---|---|
| `.flex-row` | 横着排（默认） |
| `.flex-col` | 竖着排 |
| `.flex-wrap` | 超出宽度时换行 |

#### Flex 对齐（9 个）

| class | 效果 |
|---|---|
| `.items-start` | 交叉轴起点对齐 |
| `.items-center` | 交叉轴居中 |
| `.items-end` | 交叉轴终点对齐 |
| `.items-stretch` | 交叉轴拉伸（默认） |
| `.justify-start` | 主轴起点对齐 |
| `.justify-center` | 主轴居中 |
| `.justify-end` | 主轴终点对齐 |
| `.justify-between` | 两端贴边，中间均分 |
| `.justify-around` | 每个子元素两边等距 |
| `.flex-1` | 子元素占满剩余空间 |

#### Gap（6 个）

| class | 实际值 |
|---|---|
| `.gap-1` | 4px |
| `.gap-2` | 8px |
| `.gap-3` | 12px |
| `.gap-4` | 16px（最常用） |
| `.gap-6` | 24px |
| `.gap-8` | 32px |

#### Grid 列数（5 个）

| class | 效果 |
|---|---|
| `.grid-cols-2` | 2 等列 |
| `.grid-cols-3` | 3 等列 |
| `.grid-cols-4` | 4 等列 |
| `.col-span-2` | 子元素跨 2 列 |
| `.col-span-3` | 子元素跨 3 列 |

---

### 📏 尺寸（19 个）

#### 宽度比例（6 个）

| class | 实际值 |
|---|---|
| `.w-full` | 100% |
| `.w-1/2` | 50% |
| `.w-1/3` | 33.333% |
| `.w-2/3` | 66.666% |
| `.w-1/4` | 25% |
| `.w-3/4` | 75% |

#### 宽度固定（4 个）

| class | 像素值 |
|---|---|
| `.w-12` | 48px |
| `.w-16` | 64px |
| `.w-24` | 96px |
| `.w-32` | 128px |

#### 高度（9 个）

| class | 实际值 | 类型 |
|---|---|---|
| `.h-full` | 100% | 比例 |
| `.h-screen` | 100vh | 视口 |
| `.min-h-screen` | min-height: 100vh | 视口 |
| `.h-12` | 48px | 固定 |
| `.h-16` | 64px | 固定 |
| `.h-24` | 96px | 固定 |
| `.h-32` | 128px | 固定 |
| `.h-40` | 160px | 固定 |
| `.h-48` | 192px | 固定 |

---

### ↔️ 间距（22 个）

#### Padding（10 个）

| class | 实际值 | 范围 |
|---|---|---|
| `.p-1` | 4px | 4 边 |
| `.p-2` | 8px | 4 边 |
| `.p-3` | 12px | 4 边 |
| `.p-4` | 16px | 4 边 |
| `.p-6` | 24px | 4 边 |
| `.p-8` | 32px | 4 边 |
| `.px-2` | 8px | 左右 |
| `.px-3` | 12px | 左右 |
| `.px-4` | 16px | 左右 |
| `.px-6` | 24px | 左右 |

#### Margin（12 个）

| class | 实际值 | 范围 |
|---|---|---|
| `.m-1` | 4px | 4 边 |
| `.m-2` | 8px | 4 边 |
| `.m-3` | 12px | 4 边 |
| `.m-4` | 16px | 4 边 |
| `.m-auto` | auto | 4 边 |
| `.mx-auto` | auto | 左右 |
| `.mt-1` `.mt-2` `.mt-3` `.mt-4` `.mt-6` `.mt-8` | 4/8/12/16/24/32px | 仅上 |
| `.mb-1` `.mb-2` `.mb-3` `.mb-4` `.mb-6` `.mb-8` | 4/8/12/16/24/32px | 仅下 |

---

### ✏️ 文字（14 个）

#### 大小（8 个）

| class | 像素 | 用途 |
|---|---|---|
| `.text-xs` | 12px | 极小字 |
| `.text-sm` | 14px | 标签 |
| `.text-base` | 16px | 正文（默认） |
| `.text-lg` | 18px | 强调正文 |
| `.text-xl` | 20px | 小标题 |
| `.text-2xl` | 24px | 卡片标题 |
| `.text-3xl` | 30px | 大数据 |
| `.text-4xl` | 36px | 极大数据 |

#### 字重（3 个）

| class | font-weight |
|---|---|
| `.font-normal` | 400 |
| `.font-medium` | 500 |
| `.font-bold` | 700 |

#### 对齐（3 个）

| class | 效果 |
|---|---|
| `.text-left` | 左对齐（默认） |
| `.text-center` | 居中 |
| `.text-right` | 右对齐 |

---

### 🎨 颜色（33 个）

#### 文字颜色（15 个）

| class | 颜色 | 类型 |
|---|---|---|
| `.text-white` | 白 | — |
| `.text-gray-100` | 极浅灰 | 语义色 |
| `.text-gray-300` | 浅灰 | 语义色 |
| `.text-gray-500` | 次要文字 | 语义色 |
| `.text-gray-700` | 二级文字 | 语义色 |
| `.text-gray-900` | 主文字 | 语义色 |
| `.text-red-500` / `.text-red-700` | 红 | 状态色 |
| `.text-green-500` / `.text-green-700` | 绿 | 状态色 |
| `.text-blue-500` / `.text-blue-700` | 蓝 | 状态色 |
| `.text-yellow-500` / `.text-yellow-700` | 黄 | 状态色 |

#### 背景颜色（18 个）

| class | 颜色 | 类型 |
|---|---|---|
| `.bg-white` | 白 | 语义色 |
| `.bg-gray-50` | 页面背景 | 语义色 |
| `.bg-gray-100` | 次级背景 | 语义色 |
| `.bg-gray-200` ~ `.bg-gray-900` | 5 档固定灰 | 固定色 |
| `.bg-red-100` / `.bg-red-500` / `.bg-red-700` | 红 3 档 | 状态色 |
| `.bg-green-100` / `.bg-green-500` / `.bg-green-700` | 绿 3 档 | 状态色 |
| `.bg-blue-100` / `.bg-blue-500` / `.bg-blue-700` | 蓝 3 档 | 状态色 |
| `.bg-yellow-100` / `.bg-yellow-500` / `.bg-yellow-700` | 黄 3 档 | 状态色 |

---

### 🔲 外观（19 个）

#### 边框（8 个）

| class | 效果 |
|---|---|
| `.border` | 1px 边框（默认色） |
| `.border-2` | 2px 边框 |
| `.border-gray-200` / `.border-gray-300` | 灰色边框 |
| `.border-red-500` | 红色边框 |
| `.border-green-500` | 绿色边框 |
| `.border-blue-500` | 蓝色边框 |
| `.border-yellow-500` | 黄色边框 |

#### 圆角（7 个）

| class | 圆角 | 典型用途 |
|---|---|---|
| `.rounded` | 4px | 标签、徽章 |
| `.rounded-md` | 6px | 输入框 |
| `.rounded-lg` | 8px | 卡片、按钮 |
| `.rounded-xl` | 12px | 大卡片 |
| `.rounded-full` | 50% | 圆点、头像 |
| `.rounded-t` | 仅顶部 | 柱状图 |
| `.rounded-b` | 仅底部 | 表格底部 |

#### 阴影（4 个）

| class | 效果 |
|---|---|
| `.shadow-sm` | 极淡阴影 |
| `.shadow` | 默认阴影（卡片最常用） |
| `.shadow-md` | 中等阴影 |
| `.shadow-lg` | 重阴影 |

---

### 👆 交互（9 个）

#### 鼠标手势（2 个）

| class | 光标 | 何时用 |
|---|---|---|
| `.cursor-pointer` | 👆 手指 | 可点击元素 |
| `.cursor-not-allowed` | 🚫 禁止 | 禁用元素 |

#### 过渡动画（2 个）

| class | 效果 |
|---|---|
| `.transition` | `transition: all 0.15s ease-in-out` |
| `.duration-150` | `transition-duration: 150ms` |

#### Hover 变体（5 个）

| class | 效果 |
|---|---|
| `.hover:bg-blue-700` | 鼠标悬停背景变深蓝 |
| `.hover:bg-green-700` | 鼠标悬停背景变深绿 |
| `.hover:bg-red-700` | 鼠标悬停背景变深红 |
| `.hover:bg-gray-700` | 鼠标悬停背景变深灰 |
| `.hover:bg-gray-100` | 鼠标悬停背景变浅灰（次按钮） |

---

### 📝 表单元素（不是 class，是内置样式）

| 元素 | 默认效果 |
|---|---|
| `input[type="text\|number\|email\|password"]` | 全宽、灰边框、圆角、focus 变蓝 |
| `select` | 全宽、灰边框、圆角、focus 变蓝 |
| `textarea` | 全宽、灰边框、圆角、focus 变蓝 |
| `input[type="checkbox"]` | 16×16、勾选色为绿色 |
| `input[type="range"]` | 全宽、轨道色为蓝色 |
| `label` | 灰色 14px 块级文字 |

---

## 实际例子：5 个最常用组合

```html
<!-- 1. 卡片 -->
<div class="bg-white p-4 rounded-lg shadow">...</div>

<!-- 2. 主按钮 -->
<button class="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer transition hover:bg-blue-700">保存</button>

<!-- 3. 状态圆点 + 文字 -->
<span class="w-2 h-2 rounded-full bg-green-500"></span>
<span class="ml-2 text-sm text-gray-700">在线</span>

<!-- 4. 3 列传感器网格 -->
<div class="grid grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">温度</div>
    <div class="text-3xl font-bold mt-2">24.5°</div>
  </div>
  ...
</div>

<!-- 5. 顶部导航 -->
<div class="bg-gray-800 text-white p-4 flex justify-between items-center">
  <div class="text-lg font-bold">智能家居</div>
  <div class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-green-500"></span>
    <span class="text-sm">已连接</span>
  </div>
</div>
```

---

## 按"场景"反查

| 我想做… | 用这些 class |
|---|---|
| 卡片 | `bg-white p-4 rounded-lg shadow` |
| 主按钮 | `px-4 py-2 rounded bg-blue-500 text-white cursor-pointer transition hover:bg-blue-700` |
| 状态圆点 | `w-2 h-2 rounded-full bg-*-500` |
| 信息提示框 | `bg-*-100 text-*-700 p-3 rounded border border-*-500` |
| 传感器卡片 | `bg-white p-4 rounded-lg shadow text-center` + `text-sm text-gray-500` + `text-3xl font-bold` |
| 顶部导航 | `bg-gray-800 text-white p-4 flex justify-between items-center` |
| 水平居中 | `mx-auto w-1/2` |
| 多列网格 | `grid grid-cols-N gap-4` |
| 隐藏 | `hidden` |

---

## 下一步

- 📐 [Display 详解](/utilities/display)
- 🎨 [颜色详解](/utilities/colors)
- 📖 [暗色模式](/guide/dark-mode)