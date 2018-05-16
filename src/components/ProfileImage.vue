<template>
  <button data-tipe-ui="TipeProfileImage">
    <TipeImage
      :url="url"
      class="image"
      alt="user profile image"
    />
  </button>
</template>

<script>
import vueTypes from 'vue-types'
import TipeImage from './Image'

export default {
  name: 'TipeProfileImage',
  components: {
    TipeImage
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
  border: none;
  padding: 0;
  margin: 0;
  height: 1.6rem;
  width: 1.6rem;
}

.image {
  border-radius: 100%;
  border: none;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
  background: no-repeat center;
  background-size: cover;
}
</style>
