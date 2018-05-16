<template>
  <div :data-tipe-ui="$options.name" />
</template>

<script>
export default {
  name: 'TipeSeperator'
}
</script>

<style scoped>
[data-tipe-ui='TipeSeperator'] {
  height: 1px;
  background-color: var(--gray-light);
}
</style>
