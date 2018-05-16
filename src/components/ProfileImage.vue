<template>
  <button
    :data-tipe-ui="$options.name"
    :style="style"
  />
</template>

<script>
import TipeIcon from './Icon'
import vueTypes from 'vue-types'

export default {
  name: 'TipeProfileImage',
  components: {
    TipeIcon
  },
  props: {
    url: vueTypes.string.def('http://placekitten.com/50/50')
  },
  computed: {
    style() {
      return {
        backgroundImage: `url(${this.url})`
      }
    }
  }
}
</script>

<style scoped>
[data-tipe-ui='TipeProfileImage'] {
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 100%;
  border: none;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
  background: no-repeat center;
  background-size: cover;
}
</style>
