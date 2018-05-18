<template>
  <object
    :data="src"
    type="image/svg+xml">
    <img :src="src" >
  </object>
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
      return require(`../../icons/${this.icon}.svg`)
    }
  }
}
</script>
