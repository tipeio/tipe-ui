<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'LayoutCard'
}
</script>


<style lang='postcss' scoped>
.card {
  border: solid 1px var(--gray-blue-light);
  border-radius: 5px;
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  padding: 15px;
  margin: 10px;
}
</style>
