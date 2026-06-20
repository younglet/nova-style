# 设计原则

了解 Nova Style 的几个核心设计理念，能帮你更快地上手。

## 1. Utility-First（工具类优先）

传统的 CSS 写法是"组件式"——先给一类元素写样式：

```css
/* styles.css */
.card {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

```html
<div class="card">...</div>
```

Nova Style 的写法是"工具类"——直接在元素上堆 class：

```html
<div class="bg-white p-4 rounded-lg shadow">...</div>
```

### 为什么用工具类？

| | 组件式 | 工具类 |
|---|---|---|
| 学习成本 | 要学 CSS + 命名约定 | 只学 class 名 |
| 复用性 | 一个组件一套样式 | 自由组合 |
| 修改样式 | 改 CSS 文件 | 改 class 名 |
| 调试 | 看 CSS + HTML | 只看 HTML |

**对学生来说最大的好处**：不用写 CSS，**避免了一开始就陷入"该起什么类名"的纠结**。

## 2. 4px 间距基准

所有间距都按 4px 的倍数走：

| class | 实际值 |
|---|---|
| `p-1` / `m-1` | 4px |
| `p-2` / `m-2` | 8px |
| `p-3` / `m-3` | 12px |
| `p-4` / `m-4` | 16px |
| `p-6` / `m-6` | 24px |
| `p-8` / `m-8` | 32px |

记住这条规律，看到 class 名就知道实际尺寸。**不要去背"p-4 是 16px"**。

## 3. 颜色服务于语义

Nova Style 的 5 个色系严格对应 IoT 状态：

| 颜色 | 语义 | 用法 |
|---|---|---|
| 🟢 绿 | 正常 / 开启 | 设备在线、开关 ON、运行指示 |
| 🔴 红 | 异常 / 关闭 | 设备离线、错误状态、错误按钮 |
| 🟡 黄 | 警告 | 异常数据、待处理 |
| 🔵 蓝 | 信息 / 主要 | 主按钮、信息提示、链接 |
| ⚪ 灰 | 中性 / 禁用 | 次要文字、禁用状态、边框 |

一旦形成"绿=好，红=坏"的直觉，看任何控制页面都能秒懂状态。

## 4. 暗色模式"白送"

暗色模式不是"可选功能"，而是**内置在 CSS 里的免费特性**：

```html
<html class="dark">  <!-- 加这一行全站变深色 -->
```

具体原理看 [暗色模式](/guide/dark-mode)。

## 5. 不藏黑盒

我们没有 `.card` `.btn` `.alert` 这种"组件类"。所有效果都是**用基础工具类拼出来的**。

学生写多了会自己发现：

```
bg-white p-4 rounded-lg shadow  →  这就是个卡片
px-4 py-2 rounded bg-blue-500 text-white  →  这就是个按钮
```

这是好事，**学生在用 Nova Style 的过程中其实在学 CSS**。

## 6. 从外到内，从布局到细节

写一个页面的推荐顺序：

1. **外层容器**：`bg-gray-50 p-4`
2. **整体布局**：`grid grid-cols-3 gap-4`
3. **单个卡片的内边距**：`p-4`
4. **内容排版**：`text-center text-3xl font-bold`
5. **颜色收尾**：`text-blue-500 bg-white`

## 扩展

学生想加新 class 时，建议遵循：

1. **间距继续用 4 的倍数**：`p-5` = 20px、`gap-10` = 40px
2. **颜色只加语义**：避免 `purple-500` `pink-500` 这种装饰色，需要时优先用 blue/green 替代
3. **一个 class 只做一件事**：别做 `.big-blue-button` 这种组合 class
4. **想加 hover**：在 CSS 里加一行 `.xxx:hover { ... }` 即可

---

## 下一步

- 🚀 [5 分钟上手](/guide/installation)
- 🌙 [开启暗色模式](/guide/dark-mode)
- 🎨 [工具类速查](/utilities/display)