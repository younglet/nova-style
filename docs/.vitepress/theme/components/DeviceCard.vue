<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <div class="flex justify-between items-center mb-3">
      <div class="font-bold">{{ icon }} {{ name }}</div>
      <span
        :class="on ? onClass : 'bg-gray-300'"
        class="w-2 h-2 rounded-full"
      ></span>
    </div>
    <div class="flex gap-2">
      <button
        @click="$emit('toggle', true)"
        :class="on ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'"
        class="flex-1 py-2 rounded text-sm cursor-pointer transition"
      >开</button>
      <button
        @click="$emit('toggle', false)"
        :class="!on ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700'"
        class="flex-1 py-2 rounded text-sm cursor-pointer transition"
      >关</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name:  { type: String, required: true },
  icon:  { type: String, default: '💡' },
  on:    { type: Boolean, default: false },
  type:  { type: String, default: 'green' } // green | blue | red
})

const onClass = computed(() => ({
  green: 'bg-green-500',
  blue:  'bg-blue-500',
  red:   'bg-red-500'
}[props.type] || 'bg-green-500'))
</script>
