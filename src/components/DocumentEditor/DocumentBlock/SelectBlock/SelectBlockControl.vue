<template>
  <button
    :data-tipe-ui="$options.name"
    @click="$emit('click', $event)"
  >
    <tipe-icon
      :waiting="waiting"
      :disabled="disabled"
      height="0.625rem"
      width="0.625rem"
    />
  </button>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeSelectBlockControl',
  components: {
    TipeIcon
  },
  props: {
    icon: vueTypes.string.def(''),
    waiting: vueTypes.bool.def(false),
    disabled: vueTypes.bool.def(false)
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeSelectBlockControl'] {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  height: 1.75rem;
  width: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
