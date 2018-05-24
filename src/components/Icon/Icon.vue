<template>
  <svg
    :height="height"
    :width="width"
    viewBox="src.viewBox"
  >
    <use :xlink:href="src.id" />
  </svg>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeIcon',
  props: {
    icon: vueTypes.string,
    height: vueTypes.string.def('1rem'),
    width: vueTypes.string.def('1rem')
  },
  computed: {
    src() {
      const { viewBox, id } = require(`../../icons/${this.icon}.svg`).default
      return {
        viewBox,
        id: `#${id}`
      }
    }
  }
}
</script>
