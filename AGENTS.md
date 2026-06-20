# AGENTS.md — nova-style

> AI 助手用的项目指南。

## 一句话

**nova-style** 是 12KB 的 IoT 专用原子 CSS（120 个 class）。颜色语义化、暗色模式零成本。

## 目标平台

和 novajs 配套：ESP32 + MicroPython 当 server，把页面 dump 到 flash。

设计原则：

| 约束 | 体现 |
|---|---|
| 小 | 单文件 12KB，无 JS |
| IoT 场景 | 颜色语义化（绿=正常 / 红=异常 / 黄=警告 / 蓝=信息） |
| 简单 | 纯 CSS class，学生能看懂源码 |
| 暗色模式 | 加一行 `.dark` 切换，无需 `dark:` 前缀 |

**不是** Tailwind / Bootstrap（虽然类似），不追求大而全。

## 跑通

```bash
cd nova-frontend/nova-style
ls nova-style.css        # 单文件 CSS，发布物
open core.md             # class 速查
```

CSS 文件就是发布物。不用 build，不用 test。

## 关键文件

```
nova-style/
├── AGENTS.md              ← 你正在看的
├── nova-style.css         ← 12KB 主文件
├── core.md                ← class 速查（开发时查这个）
├── package.json           ← VitePress 依赖（如果加 docs）
├── README.md
├── 01-static.html         ← 静态展示 demo
├── 02-interactive.html    ← 交互 demo
├── 03-dashboard.html
├── 04-control-panel.html
├── 05-dark-mode.html
├── 06-form.html
├── 07-chart.html
└── 08-iot-monitor.html
```

## 核心约定

### 1. 颜色语义

IoT 场景固定 5 色：

```css
/* 在 nova-style.css 的 :root 里定义 CSS 变量 */
:root {
  --color-success: #10b981;  /* 绿 - 正常 / 成功 / 在线 */
  --color-error:   #ef4444;  /* 红 - 异常 / 错误 / 离线 */
  --color-warning: #f59e0b;  /* 黄 - 警告 / 离线 */
  --color-info:    #3b82f6;  /* 蓝 - 信息 / 一般 */
  --color-neutral: #6b7280;  /* 灰 - 中性 / 默认 */
}
```

新加颜色必须映射到这 5 种语义之一。

### 2. 暗色模式

```css
:root { --bg: white; --text: #111; }
.dark { --bg: #1f2937; --text: #f3f4f6; }
```

页面里加 `<html class="dark">` 即可。**不要**写 `.dark\:bg-xxx` 那种 Tailwind 风格的 `dark:` 前缀 class。

### 3. 工具 class 命名

```
bg-{color}      背景色
text-{color}    文字色
border-{color}  边框色
bg-{shade}      灰阶（white/gray-50/gray-100/.../black）
p-{n}           padding
m-{n}           margin
w-{n} h-{n}     宽高
flex / grid     布局
text-{xs|sm|base|lg|xl|2xl}   字号
font-bold / italic
rounded / shadow
```

新加 class 前先看 `core.md`，避免重名。

### 4. 不做的事

- ❌ 加动画（IoT 页面动画反而干扰）
- ❌ 加 transform 工具类（用 nova-ui 的 `:style`）
- ❌ 加组件（属于 nova-ui）
- ❌ 加 JS（属于 novajs）

## 改动会影响什么

| 改这个 | 也会影响 |
|---|---|
| CSS 变量值 | 所有使用该变量的组件（nova-ui 和用户页面） |
| 加新工具 class | 要更新 `core.md` |
| 改颜色语义 | 检查所有使用该颜色的地方 |

## 提交前 checklist

- 浏览器打开 8 个 demo 看效果没坏
- 暗色模式（加 `.dark` class）也好看

## 不要做的事

- ❌ 拆成多个 CSS 文件
- ❌ 加 JS
- ❌ 加 `dark:` 前缀（用 `.dark` 容器类）
- ❌ 改核心颜色语义（绿=正常 / 红=异常）