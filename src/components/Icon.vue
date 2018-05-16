<template>
  <div
    :class="size"
    :data-tipe-ui="$options.name"
  />
</template>

<script>
import vueTypes from 'vue-types'

const sizes = ['small', 'medium', 'large']

export default {
  name: 'TipeIcon',
  props: {
    size: vueTypes.oneOf(sizes).def('medium')
  }
}
</script>

<style scoped>
[data-tipe-ui='TipeIcon'] {
  background-color: red;
}

[data-tipe-ui='TipeIcon'].small {
  height: 1rem;
  width: 1rem;
}

[data-tipe-ui='TipeIcon'].medium {
  height: 2rem;
  width: 2rem;
}

[data-tipe-ui='TipeIcon'].large {
  height: 3rem;
  width: 3rem;
}
</style>
