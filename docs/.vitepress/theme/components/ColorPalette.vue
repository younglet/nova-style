<template>
  <div class="grid gap-3 my-4" :class="gridCols">
    <div
      v-for="c in colors"
      :key="c.name"
      class="border border-gray-200 rounded-lg overflow-hidden"
    >
      <div :class="`bg-${c.name}-500`" class="h-16"></div>
      <div class="p-3 bg-white">
        <div class="flex items-center gap-2">
          <code class="text-sm font-bold font-mono">{{ c.name }}</code>
          <span v-if="c.semantic" class="text-xs text-gray-500">{{ c.semantic }}</span>
        </div>
        <div class="text-xs text-gray-500 mt-1">{{ c.meaning }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  layout: { type: String, default: 'grid' } // grid | semantic
})

const colors = computed(() => props.layout === 'semantic' ? [
  { name: 'green',  semantic: '✅', meaning: '正常 / 开启 / 成功' },
  { name: 'red',    semantic: '❌', meaning: '异常 / 关闭 / 错误' },
  { name: 'yellow', semantic: '⚠️', meaning: '警告 / 注意' },
  { name: 'blue',   semantic: 'ℹ️', meaning: '信息 / 主要操作' },
  { name: 'gray',   semantic: '⚪', meaning: '中性 / 禁用' }
] : [
  { name: 'gray-100',   meaning: 'subtle background' },
  { name: 'gray-300',   meaning: 'border' },
  { name: 'gray-500',   meaning: 'muted text' },
  { name: 'gray-700',   meaning: 'secondary text' },
  { name: 'gray-900',   meaning: 'primary text' }
])

const gridCols = computed(() =>
  props.layout === 'semantic' ? 'grid-cols-2 md:grid-cols-5' : 'grid-cols-2 md:grid-cols-5'
)
</script>
