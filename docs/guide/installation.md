# 5 分钟上手

<iframe src="/examples/flasher.html" width="100%" height="280" frameborder="0" style="border-radius:8px;margin-bottom:24px"></iframe>

## 一句话安装

```html
<link rel="stylesheet" href="nova-style.css">
```

就这一行，120 个 class 就能用了。

## 下载

[下载 nova-style.css](#) （约 8KB）

把文件保存到你的项目里：

```
your-project/
├── index.html
└── nova-style.css      ← 放这里
```

## 引入 HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="nova-style.css">
</head>
<body>
  <div class="bg-white p-4 rounded-lg shadow">
    你好，Nova
  </div>
</body>
</html>
```

## 第一个例子

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

效果：

<div class="bg-gray-50 p-4 rounded my-4">
  <div class="bg-white p-4 rounded-lg shadow text-center inline-block">
    <div class="text-sm text-gray-500">温度</div>
    <div class="text-3xl font-bold mt-2">23.5°C</div>
  </div>
</div>

## 打开浏览器

```bash
# 直接双击 HTML 文件
open index.html

# 或者用本地服务器（推荐）
python -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 下一步

- 🎨 [设计原则](/guide/design-principles) — 为什么这样设计
- 🌙 [暗色模式](/guide/dark-mode) — 一行开启
- 🎨 [工具类速查](/utilities/display) — Display
- 📖 [完整 class 索引](/utilities/index)