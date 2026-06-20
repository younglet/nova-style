<template>
  <div class="nova-demo">
    <div class="nova-demo-header flex justify-between items-center">
      <code class="font-mono font-bold text-sm">{{ name }}</code>
      <span v-if="description" class="text-xs">{{ description }}</span>
    </div>
    <div class="nova-demo-body">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  description: { type: String, default: '' }
})
</script>
