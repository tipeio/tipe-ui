<template>
  <div :data-tipe-ui="$options.name">
    <tipe-select-block-option
      v-for="(option, i) in options"
      v-bind="option"
      :key="i"
      @click="$emit('change', option.type)"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import blockOptionShape from '@/types/BlockOption'
import TipeSelectBlockOption from './SelectBlockOption'

export default {
  name: 'TipeSelectBlockPanel',
  components: {
    TipeSelectBlockOption
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(blockOptionShape))
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeSelectBlockPanel'] {
  width: 17.5rem;
  max-height: 16rem;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 0.125rem 1.8rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0.9375rem 0.8125rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
}
</style>
