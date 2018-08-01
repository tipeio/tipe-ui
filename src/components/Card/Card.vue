<template>
  <div
    :data-tipe-ui="$options.name"
    class="card"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'TipeCard'
}
</script>


<style lang='postcss' scoped>
.card {
  border: solid 1px var(--gray-blue-light);
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
