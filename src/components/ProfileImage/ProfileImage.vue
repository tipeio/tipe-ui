<template>
  <button
    :data-tipe-ui="$options.name"
    @click="$emit('click')"
  >
    <TipeImage
      :url="url"
      class="image"
      alt="user profile image"
    />
  </button>
</template>

<script>
import vueTypes from 'vue-types'
import TipeImage from '../Image'

export default {
  name: 'TipeProfileImage',
  components: {
    TipeImage
  },
  props: {
    url: vueTypes.string
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
  border: none;
  padding: 0;
  margin: 0;
  height: 3.125rem;
  width: 3.125rem;
  background-color: transparent;
  border-radius: 100%;
  box-shadow: 0 0.125rem 0.875rem 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.image {
  border: none;
  background: no-repeat center;
  background-size: cover;
}
</style>
