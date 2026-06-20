# 什么是 Nova Style

Nova Style 是一个面向学生的极简工具类 CSS 库，专门为**物联网控制页面**设计。

## 一句话介绍

> 120 个 class，5KB 文件，覆盖 90% 物联网控制页面的需求。

## 它解决什么问题？

学生学前端时通常会碰到两个问题：

1. **学原生 CSS 太慢**：盒子模型 + 浮动 + 定位 + Flex + Grid，几周才出师
2. **学 Tailwind 又太重**：1000+ class 难记，文档好几千页

Nova Style 想做的就是中间态——**学生只要懂 HTML，会写 class，就能做出像样的页面**。

## 设计目标

| 目标 | 说明 |
|---|---|
| 🎯 **够用就好** | 不做大而全，省掉动画、transform、装饰性 class |
| 🎨 **颜色语义化** | 5 个色系严格对应 IoT 状态，不是装饰色 |
| 🌙 **暗色模式免费** | 一行 `.dark` 就切换，不用 `dark:` 前缀 |
| 🧩 **纯工具类** | 不藏 `.card` `.btn` 这种黑盒，学生能看懂 CSS |

## 和 Tailwind 的区别

| | Tailwind | Nova Style |
|---|---|---|
| class 数量 | 1000+ | ~120 |
| 文件大小 | 3MB+（运行时） | 5KB |
| 学习曲线 | 陡 | 平 |
| 暗色模式 | 需要 `darkMode: 'class'` 配置 | 内置支持 |
| IoT 场景 | 过量（动画、transform、ring...） | 刚好 |
| 学生能否记住 | 难 | 可 |

**一句话总结**：Tailwind 是给工业级项目用的，Nova Style 是给教学场景用的。

## 适合谁？

- 🎓 **学生**：刚学完 HTML，要做课程项目
- 🔌 **IoT 开发者**：要做设备控制页面，不想写一堆 CSS
- 📊 **数据展示**：快速搭一个监控仪表盘

## 不适合谁？

- 做完整商业产品（用 Tailwind）
- 需要复杂动画 / 转场（用 Framer Motion）
- 多人协作大型项目（用组件库如 Ant Design）

## 一段代码看懂它

这是一段完整的 Nova Style 代码，做一个温度监控卡片：

```html
<div class="bg-white p-4 rounded-lg shadow text-center">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2 text-red-500">28.5°C</div>
  <div class="text-xs text-gray-500 mt-2">↑ 超过阈值</div>
</div>
```

效果：

<div class="bg-white p-4 rounded-lg shadow text-center inline-block">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold mt-2 text-red-500">28.5°C</div>
  <div class="text-xs text-gray-500 mt-2">↑ 超过阈值</div>
</div>

---

## 下一步

- 🚀 [5 分钟上手](/guide/installation)
- 🎨 [工具类速查](/utilities/display)
- 📖 [设计原则](/guide/design-principles)