<template>
  <svg
    :data-tipe-ui="$options.name"
    :height="height"
    :width="width"
    viewBox="src.viewBox"
  >
    <use :xlink:href="src.id" />
  </svg>
</template>

<script>
import vueTypes from 'vue-types'
import iconLoader from '@/libs/iconLoader'

export default {
  name: 'TipeIcon',
  props: {
    icon: vueTypes.string.def('plus'),
    height: vueTypes.string.def('1rem'),
    width: vueTypes.string.def('1rem'),
    __iconLoader__: vueTypes.func.def(iconLoader)
  },
  computed: {
    src() {
      const { viewBox, id } = this.__iconLoader__(this.icon)
      return {
        viewBox,
        id: `#${id}`
      }
    }
  }
}
</script>
