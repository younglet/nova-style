# 部署到 ESP32 + MicroPython server

> 把 nova-style.min.css + 你的 HTML 写到 ESP32 flash。
> 完整 MicroPython 烧录流程见 [novajs 的部署文档](/guide/esp32-deploy)（任务 7 完整版）。

## 一次性

1. 烧 MicroPython 固件（[参考 nova-js 版](/guide/esp32-deploy)）
2. 上传 main.py（HTTP server 模板）
3. 上传 nova-style.min.css 到 `/static/`

## 上传文件

```bash
# 启静态服务
python3 -m http.server 8000 --directory src

# 浏览器打开文档站首页的「下载到 ESP32」按钮（自动）
# 或手动：复制 src/nova-style.min.css → /static/nova-style.min.css
#          写一个 index.novastyle.html 到 /static/
```

## index.novastyle.html 模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>我的 nova-style 页面</title>
  <link rel="stylesheet" href="/static/nova-style.min.css">
</head>
<body class="bg-gray-50 p-4">
  <div class="card">
    <div class="card-body">
      <h1 class="card-title">Hello ESP32</h1>
      <p class="text-gray-500">用 nova-style.min.css 渲染，13 KB。</p>
      <button class="btn btn-primary btn-lg">点我</button>
    </div>
  </div>
</body>
</html>
```

## 文件清单

| 文件 | 大小 | 路径 |
|---|---|---|
| `nova-style.min.css` | 7 KB | `/static/nova-style.min.css` |
| `index.novastyle.html` | < 1 KB | `/static/index.novastyle.html` |

**总传输：~8 KB**。ESP32-WROOM 4MB flash 完全够。

## 配合 novajs / nova-ui

nova-style 是纯 CSS，可以单独用，也可以：

- + [novajs](http://novajs.test)：加反应式（推荐组合）
- + [nova-ui](http://nova-ui.test)：加 9 个 `<nova-*>` 自定义元素
- + [nova-chart](http://nova-chart.test)：加图表

多项目一起用时，每个项目的 HTML 文件名加前缀（`.novastyle.`）避免 `/static/index.html` 冲突。
