<template>
  <img 
    :data="src" 
    :src="src" 
    type="image/svg+xml">
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeIcon',
  props: {
    icon: vueTypes.string
  },
  computed: {
    src() {
      return require(`../icons/${this.icon}.svg`)
    }
  }
}
</script>
