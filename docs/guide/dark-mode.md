# 暗色模式

Nova Style **内置暗色模式**，不用配置，不用 `dark:` 前缀，一行代码就能切换。

## 一行开启

```html
<html class="dark">  <!-- 整站立刻变深色 -->
```

或者用 `data-theme` 属性（等价写法）：

```html
<html data-theme="dark">
```

## 效果对比

浅色模式：

<div class="bg-white p-4 rounded-lg shadow text-center inline-block">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold">24.3°C</div>
</div>

切换到深色（同样的 HTML）：

<div class="bg-gray-900 p-4 rounded-lg text-center inline-block" style="box-shadow: 0 0 0 1px rgba(255,255,255,0.05);">
  <div class="text-sm text-gray-500">温度</div>
  <div class="text-3xl font-bold text-white">24.3°C</div>
</div>

**注意：白卡变深卡，文字颜色自动翻转**——你的 HTML 不用动一行。

## 原理：CSS 变量

Nova Style 的"基础色"用了 CSS 变量：

```css
:root {
  --nova-bg:         #f9fafb;   /* 页面背景 */
  --nova-surface:    #ffffff;   /* 卡片背景 */
  --nova-text:       #111827;   /* 主文字 */
  --nova-text-muted: #6b7280;   /* 次要文字 */
  --nova-border:     #e5e7eb;   /* 边框 */
}

.dark {
  --nova-bg:         #0f172a;
  --nova-surface:    #1f2937;
  --nova-text:       #f9fafb;
  --nova-text-muted: #9ca3af;
  --nova-border:     #374151;
}
```

工具类引用这些变量：

```css
.bg-white    { background-color: var(--nova-surface); }
.text-gray-900 { color: var(--nova-text); }
```

切换 `.dark` 时，CSS 变量重新赋值，所有引用这些变量的 class 自动适配。

## 切换按钮

```html
<button onclick="document.documentElement.classList.toggle('dark')">
  切换暗色
</button>
```

## 跟随系统偏好

放在 `<head>` 里，页面加载时检测系统设置：

```html
<script>
  if (matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
</script>
```

## 哪些 class 会变暗，哪些不变？

| 会变暗（语义色） | 不会变暗（固定色阶） |
|---|---|
| `bg-white`、`bg-gray-50`、`bg-gray-100` | `bg-gray-200` 及以上 |
| `text-gray-900`、`text-gray-500` | `text-gray-100`、`text-gray-300` |
| `border` | `bg-blue-500` 等状态色 |
| | `text-white` |

**规律**：基础外观色会变暗，状态色保持一致。

## 自定义主题色

不想要默认的绿色 / 深蓝？改 CSS 变量就行：

```css
:root {
  --nova-bg:      #f5f3ff;   /* 紫色调 */
  --nova-surface: #ffffff;
  --nova-text:    #1e1b4b;
}
.dark {
  --nova-bg:      #1e1b5b;
  --nova-surface: #2e1b5b;
  --nova-text:    #f5f3ff;
}
```

---

## 下一步

- 🎨 [工具类速查](/utilities/display) → Display
- 📋 [完整 class 索引](/utilities/index)