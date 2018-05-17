<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="card">
    <div class="content">
      <div>꠸</div>
      <p><slot /></p>
    </div>
    <div 
      v-if="recent" 
      class="dot">⦁</div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'DocCard',
  props: {
    recent: vueTypes.bool.def(false)
  }
}
</script>


<style lang='postcss' scoped>
.card {
  border: solid 1px var(--gray-blue-light);
  border-radius: 5px;
  background-color: #fff;
  height: 53px;
  width: 263px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: var(--gray-blue-light);
  }

  & .content {
    display: flex;
    align-items: center;
    margin-left: 15px;

    & p {
      color: #323c47;
      font-size: 1.25rem;
      margin-left: 15px;
    }
  }

  & .dot {
    margin: 5px 5px 0 0;
    align-self: flex-start;
  }
}
</style>
