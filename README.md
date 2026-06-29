# Nova Style

> IoT 原子 CSS 工具类。120 个 class · 12KB min · 内置暗色模式。
> 给烧了 MicroPython 的 ESP32 当 HTTP server 时的前端三件套之一。
> 配套 [novajs](https://github.com/) + [nova-ui](https://github.com/)。
> 后端推荐 [**nova-server**](../nova-server/)（MicroPython 异步 Web 框架）。

## ✨ 特点

- 🎯 **够用就好** - 不做大而全，省掉动画、transform、装饰性 class
- 🎨 **颜色语义化** - 5 色系对应 IoT 状态：绿=正常，红=异常，黄=警告，蓝=信息
- 🌙 **暗色模式内置** - 加一行 `.dark` 类就切换，不用 `dark:` 前缀
- 🧩 **纯工具类** - 没有 `.card` `.btn` 黑盒，学生能看懂 CSS

## 📁 项目结构

```
nova-style/
├── AGENTS.md             ← AI 助手指南
├── README.md             ← 本文件
├── package.json          ← 三个脚本：build / sync / docs:build
├── src/
│   ├── nova-style.css    ← 12KB 源码（带注释）
│   └── nova-style.min.css ← 7KB min 版（npm run build 生成）
├── scripts/sync.js       ← 把 src/ 同步到 docs/public/
├── core.md               ← 库文档（颜色约定 + 速查）
│
├── 01-static.html ~ 08-iot-monitor.html  ← 8 个独立 HTML 案例
├── 01-08 *.html         ← 8 个独立 HTML 案例（不依赖任何构建工具）
│
├── scripts/
│   └── sync.js          ← 把 nova-style.css 同步到 docs/public/
│
├── docs/                ← VitePress 文档站
│   ├── .vitepress/
│   │   ├── config.ts
│   │   └── theme/
│   │       ├── index.ts
│   │       ├── style.css
│   │       └── components/    ← SensorCard / DeviceCard / ClassBox 等
│   ├── index.md
│   ├── guide/                 ← 介绍、安装、设计原则、暗色模式
│   ├── utilities/             ← Display / Flex / Grid / 颜色 / 间距...
│   ├── examples/              ← （已重命名为 usage/）
│   └── usage/                 ← 4 个交互式案例 + ESP32 部署模板 index.novastyle.html
│   └── public/
│       └── nova-style.css     ← 同步自根目录
```

## 🚀 快速开始

### 1. 单独使用 CSS

直接用就行，零依赖：

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="nova-style.css">
</head>
<body class="bg-gray-50 p-4">
  <div class="bg-white p-4 rounded-lg shadow text-center">
    <div class="text-sm text-gray-500">温度</div>
    <div class="text-3xl font-bold mt-2">23.5°C</div>
  </div>
</body>
</html>
```

打开任一 `0X-*.html` 案例文件都能直接看到效果。

### 2. 跑文档站

```bash
# 安装依赖（需要 Node 18+）
npm install

# 本地预览
npm run docs:dev

# 构建静态站点
npm run docs:build
```

文档站基于 [VitePress](https://vitepress.dev/)，用 Vue 组件引用 `nova-style.css` 做交互式案例。

## 📖 学习路径

| 步骤 | 看什么 | 学到什么 |
|:---:|---|---|
| 0 | `core.md` 颜色约定 | 形成"绿=好，红=坏"的状态直觉 |
| 1 | `01-static.html` | 纯 HTML+CSS 布局 |
| 2 | `02-interactive.html` | JS 改 class 切换状态 |
| 3 | `03-dashboard.html` | setInterval 模拟实时数据 |
| 4 | `04-control-panel.html` | 对象管理多设备状态 |
| 5 | `05-dark-mode.html` | 一行 .dark 切换暗色 |
| 6 | `06-form.html` | 表单元素内置样式 |
| 7 | `07-chart.html` | 纯 div 实现柱状图 |
| 8 | `08-iot-monitor.html` | 综合案例（实时数据+设备+告警） |
| 9 | 文档站 `/guide/dark-mode` | 暗色模式原理 |
| 10 | 文档站 `/utilities/colors` | 颜色语义化详解 |

## 🎓 教学场景

**适合**：刚学完 HTML 的学生，要做课程项目/物联网大作业

**优势**：
- 不需要学 CSS 也能出像样的页面
- 不需要学 Tailwind（1000+ class 难记）
- 学到的 class 在真实前端项目里也通用
- 颜色语义化的习惯一旦养成，受益终身

**不建议**：
- 商业级项目（用 Tailwind）
- 需要复杂动画（用 Framer Motion）
- 大型团队协作（用组件库）

## 🤝 扩展 CSS

学生想加新 class 时，建议遵循：

1. **间距继续用 4 的倍数**：`p-5` = 20px、`gap-10` = 40px
2. **颜色只加语义**：避免 `purple-500` `pink-500` 这种装饰色
3. **一个 class 只做一件事**：别做 `.big-blue-button` 这种组合 class
4. **想加 hover**：在 CSS 里加一行 `.xxx:hover { ... }` 即可

## 📜 License

powered by stemstar
