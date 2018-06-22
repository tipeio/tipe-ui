<template>
  <tipe-button
    :size="size"
    icon-before="plus"
    color="none"
    @click="$emit('click', $event)"
  />
</template>

<script>
import vueTypes from 'vue-types'
import TipeButton from '@/components/Button'

export default {
  name: 'TipeSelectBlock',
  components: {
    TipeButton
  },
  props: {
    icon: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
}
</style>
