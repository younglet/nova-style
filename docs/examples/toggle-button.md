# 开关按钮

IoT 控制页面最核心的交互——控制设备的开/关。

## 目标

做一组设备控制按钮，点击切换开/关状态，状态点颜色随之变化。

<script setup>
import { ref } from 'vue'
const light = ref(false)
const ac = ref(false)
const fan = ref(false)
const humid = ref(false)
const onCount = () => [light, ac, fan, humid].filter(x => x.value).length
</script>

<div class="grid grid-cols-2 gap-3 my-6">
  <DeviceCard name="客厅灯" icon="💡" :on="light" type="green" @toggle="v => light = v" />
  <DeviceCard name="空调" icon="❄️" :on="ac" type="blue" @toggle="v => ac = v" />
  <DeviceCard name="风扇" icon="🌀" :on="fan" type="blue" @toggle="v => fan = v" />
  <DeviceCard name="加湿器" icon="💧" :on="humid" type="blue" @toggle="v => humid = v" />
</div>

<div class="bg-gray-50 p-3 rounded text-center text-sm text-gray-700">
  当前开启：<b class="text-green-500">{{ [light, ac, fan, humid].filter(x => x).length }}</b> / 4 台
</div>

## HTML 完整代码

```html
<div class="bg-white p-4 rounded-lg shadow">
  <div class="flex justify-between items-center mb-3">
    <div class="font-bold">💡 客厅灯</div>
    <span id="led-1" class="w-2 h-2 rounded-full bg-gray-300"></span>
  </div>
  <div class="flex gap-2">
    <button onclick="toggle(1, true)"  class="flex-1 py-2 rounded bg-green-500 text-white text-sm cursor-pointer">开</button>
    <button onclick="toggle(1, false)" class="flex-1 py-2 rounded bg-gray-200 text-gray-700 text-sm cursor-pointer">关</button>
  </div>
</div>
```

## JS 完整代码

```js
// 设备状态：false = 关，true = 开
const state = { 1: false, 2: false, 3: false, 4: false }

function toggle(id, on) {
  state[id] = on
  const led = document.getElementById('led-' + id)
  led.className = on
    ? 'w-2 h-2 rounded-full bg-green-500'
    : 'w-2 h-2 rounded-full bg-gray-300'
}
```

## 讲解

### 1. 卡片结构

```html
<div class="bg-white p-4 rounded-lg shadow">
  <div class="flex justify-between items-center mb-3">
    <div class="font-bold">💡 客厅灯</div>
    <span class="w-2 h-2 rounded-full bg-gray-300"></span>  <!-- 状态点 -->
  </div>
  <div class="flex gap-2">
    <button class="flex-1 py-2 rounded bg-green-500 text-white text-sm">开</button>
    <button class="flex-1 py-2 rounded bg-gray-200 text-gray-700 text-sm">关</button>
  </div>
</div>
```

**关键点**：
- 顶部用 `flex justify-between items-center` 让标题和状态点两端对齐
- 按钮组用 `flex gap-2` + `flex-1` 让两个按钮等宽
- 状态点是 `w-2 h-2 rounded-full`（8x8 圆点）

### 2. 切换状态的 JS

```js
function toggle(id, on) {
  state[id] = on
  const led = document.getElementById('led-' + id)
  led.className = on
    ? 'w-2 h-2 rounded-full bg-green-500'
    : 'w-2 h-2 rounded-full bg-gray-300'
}
```

**思路**：
1. 记录状态（用一个对象存）
2. 根据 `on` 参数，决定 led 的 class 是绿色还是灰色
3. 整体替换 className

### 3. 颜色语义

| 状态 | 颜色 |
|---|---|
| 开（ON） | `bg-green-500` |
| 关（OFF） | `bg-gray-300` |
| 主按钮 | `bg-green-500 text-white` |
| 次按钮 | `bg-gray-200 text-gray-700` |

## 进阶：一键全开/全关

```html
<button onclick="allOn()"  class="flex-1 py-2 rounded bg-green-500 text-white">✅ 全部开启</button>
<button onclick="allOff()" class="flex-1 py-2 rounded bg-red-500 text-white">🚫 全部关闭</button>
```

```js
function allOn()  { [1,2,3,4].forEach(id => toggle(id, true))  }
function allOff() { [1,2,3,4].forEach(id => toggle(id, false)) }
```

完整示例看 [04-control-panel.html](https://github.com/...)。

## 练习

1. 给按钮加 `transition` 让颜色切换更平滑
2. 加一个"切换"按钮替代"开/关"两个按钮（用 `bg-green-500` 和 `bg-gray-300` 切换）
3. 加 `cursor-pointer` 提示按钮可点击
4. 把状态点从 8x8 改成 12x12（`w-3 h-3`），看视觉差异

下一步 → [仪表盘](/examples/dashboard)
