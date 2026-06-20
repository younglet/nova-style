<template>
  <div class="bg-white p-4 rounded-lg shadow text-center inline-block w-full">
    <div class="text-sm text-gray-500">{{ label }}</div>
    <div class="text-3xl font-bold mt-2" :class="valueColor">
      {{ value }}<span v-if="unit" class="text-base text-gray-500 ml-1 font-normal">{{ unit }}</span>
    </div>
    <div v-if="status" class="text-xs mt-2" :class="statusColor">
      {{ statusIcon }} {{ status }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label:  { type: String, required: true },
  value:  { type: [String, Number], required: true },
  unit:   { type: String, default: '' },
  color:  { type: String, default: 'default' }, // default | red | green | blue | yellow
  status: { type: String, default: '' },
  statusType: { type: String, default: 'normal' } // normal | warning | danger
})

const valueColor = computed(() => ({
  default: 'text-gray-900',
  red:     'text-red-500',
  green:   'text-green-500',
  blue:    'text-blue-500',
  yellow:  'text-yellow-500'
}[props.color] || 'text-gray-900'))

const statusColor = computed(() => ({
  normal:  'text-green-500',
  warning: 'text-yellow-700',
  danger:  'text-red-500'
}[props.statusType] || 'text-green-500'))

const statusIcon = computed(() => ({
  normal:  '↑',
  warning: '⚠',
  danger:  '✕'
}[props.statusType] || '↑'))
</script>
