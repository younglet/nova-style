<template>
  <div class="grid gap-2 my-3" :class="gridCols">
    <div
      v-for="cls in classes"
      :key="cls"
      class="bg-white border border-gray-200 rounded p-2 text-center hover:bg-gray-100 transition"
    >
      <code class="text-xs font-mono font-bold text-gray-900">{{ cls }}</code>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  classes: { type: Array, required: true },
  cols:    { type: Number, default: 4 }
})

const gridCols = computed(() => {
  const map = { 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4', 5: 'grid-cols-5', 6: 'grid-cols-6' }
  return map[props.cols] || 'grid-cols-4'
})
</script>
