<template>
  <div
    :class="size"
    :data-tipe-ui="$options.name"
  />
</template>

<script>
export default {
  name: 'TipeIcon'
}
</script>

<style scoped>
[data-tipe-ui='TipeIcon'] {
  background-color: red;
}
</style>
