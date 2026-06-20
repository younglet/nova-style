---
layout: home

hero:
  name: "Nova Style"
  text: "IoT 原子 CSS 工具类"
  tagline: "120 个 class · 12KB min · 给 ESP32 + MicroPython server 用 · 5 色 IoT 语义 · 内置暗色模式"
  actions:
    - theme: brand
      text: 🚀 快速开始
      link: /guide/installation
    - theme: alt
      text: 🎨 工具类速查
      link: /utilities/display
    - theme: alt
      text: 🧩 案例
      link: /examples/

features:
  - icon: 🎯
    title: 够用就好
    details: 不做大而全，省掉动画、transform、装饰性 class。只留 IoT 控制页面真正用得到的
  - icon: 🎨
    title: 颜色语义化
    details: 5 个色系严格对应 IoT 状态：绿=正常，红=异常，黄=警告，蓝=信息，灰=中性
  - icon: 🌙
    title: 暗色模式内置
    details: 加一行 <code>.dark</code> 类就切换。bg-white、text-gray-900 等基础色自动适配
  - icon: 🧩
    title: 纯工具类
    details: 没有 .card .btn 这种黑盒组件，学生写 class 拼一拼就懂 CSS 原理
---

## 快速预览

```html
<link rel="stylesheet" href="nova-style.css">

<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2">23.5°C</div>
</div>
```

实时效果：

<div class="bg-white p-4 rounded-lg shadow text-center inline-block">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2">23.5°C</div>
</div>

---

## 工具类分组

<div class="nova-grid-cards">
  <a href="/utilities/display" class="nova-grid-card">
    <div class="nova-grid-card-title">📐 布局</div>
    <div class="nova-grid-card-desc">Display · Flex · Grid（25 个 class）</div>
    <div class="nova-grid-card-preview">
      <div class="flex gap-1">
        <div class="w-4 h-4 bg-blue-500 rounded"></div>
        <div class="w-4 h-4 bg-blue-500 rounded"></div>
        <div class="w-4 h-4 bg-blue-500 rounded"></div>
      </div>
    </div>
  </a>

  <a href="/utilities/spacing" class="nova-grid-card">
    <div class="nova-grid-card-title">↔️ 间距</div>
    <div class="nova-grid-card-desc">Padding · Margin（24 个 class）</div>
    <div class="nova-grid-card-preview">
      <div class="bg-blue-100 p-2 rounded text-xs">p-4</div>
    </div>
  </a>

  <a href="/utilities/sizing" class="nova-grid-card">
    <div class="nova-grid-card-title">📏 尺寸</div>
    <div class="nova-grid-card-desc">Width · Height（19 个 class）</div>
    <div class="nova-grid-card-preview">
      <div class="bg-blue-500 h-4 w-12 rounded"></div>
    </div>
  </a>

  <a href="/utilities/typography" class="nova-grid-card">
    <div class="nova-grid-card-title">✏️ 文字</div>
    <div class="nova-grid-card-desc">Size · Weight · Align（14 个 class）</div>
    <div class="nova-grid-card-preview">
      <div class="text-xl font-bold">Aa</div>
    </div>
  </a>

  <a href="/utilities/colors" class="nova-grid-card">
    <div class="nova-grid-card-title">🎨 颜色</div>
    <div class="nova-grid-card-desc">Text · Background（33 个 class）</div>
    <div class="nova-grid-card-preview" style="gap: 4px;">
      <div class="w-4 h-4 bg-red-500 rounded"></div>
      <div class="w-4 h-4 bg-green-500 rounded"></div>
      <div class="w-4 h-4 bg-blue-500 rounded"></div>
      <div class="w-4 h-4 bg-yellow-500 rounded"></div>
    </div>
  </a>

  <a href="/utilities/borders" class="nova-grid-card">
    <div class="nova-grid-card-title">🔲 外观</div>
    <div class="nova-grid-card-desc">Border · Radius · Shadow（19 个 class）</div>
    <div class="nova-grid-card-preview">
      <div class="bg-white p-2 rounded shadow text-xs">阴影</div>
    </div>
  </a>

  <a href="/utilities/cursor" class="nova-grid-card">
    <div class="nova-grid-card-title">👆 交互</div>
    <div class="nova-grid-card-desc">Cursor · Transition · Hover（9 个 class）</div>
    <div class="nova-grid-card-preview">
      <span class="cursor-pointer text-2xl">👆</span>
    </div>
  </a>

  <a href="/utilities/forms" class="nova-grid-card">
    <div class="nova-grid-card-title">📝 表单</div>
    <div class="nova-grid-card-desc">input/select/textarea 内置样式</div>
    <div class="nova-grid-card-preview">
      <input type="text" placeholder="输入..." style="font-size: 12px; padding: 2px 6px;">
    </div>
  </a>
</div>

---

## 完整 IoT 仪表盘示例

```html
<div class="bg-gray-50 p-4 min-h-screen">

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
      <div class="text-sm text-gray-500">光照</div>
      <div class="text-3xl font-bold mt-2 text-yellow-500">420 lx</div>
    </div>
  </div>

</div>
```

效果：

<div class="bg-gray-50 p-4 rounded-lg my-4">
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
      <div class="text-sm text-gray-500">光照</div>
      <div class="text-3xl font-bold mt-2 text-yellow-500">420 lx</div>
    </div>
  </div>
</div>

---

## 下一步

- 🚀 [5 分钟上手](/guide/installation)
- 🎨 [完整 class 索引（速查）](/utilities/index)
- 📖 [设计原则](/guide/design-principles)