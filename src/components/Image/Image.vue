<template>
  <div
    :data-tipe-ui="$options.name"
    :style="style"
  >
    <img
      :alt="alt"
      :src="url"
    >
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeImage',
  props: {
    alt: vueTypes.string.def(''),
    url: vueTypes.string.def('')
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
[data-tipe-ui='TipeImage'] {
  height: 100%;
  width: 100%;
  border: none;
  background-color: transparent;
  background: no-repeat center;
  background-size: cover;
}

/* hide the image visually, but not from screen readers */
img {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.waiting,
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.01);
  font-size: 0.8125rem;
  color: var(--text-gray);
}
</style>
