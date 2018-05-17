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
import { Machine } from 'xstate'

const status = Machine({
  initial: 'waiting',
  states: {
    waiting: {
      on: {
        done: 'ok',
        error: 'error'
      }
    },
    ok: {},
    error: {}
  }
})

export default {
  name: 'TipeImage',
  props: {
    alt: vueTypes.string.def(''),
    url: vueTypes.string.def('')
  },
  data() {
    return {
      status: status.initial
    }
  },
  computed: {
    style() {
      return {
        backgroundImage: `url(${this.url})`
      }
    }
  },
  beforeMount() {
    this.load()
  },
  beforeUpdated() {
    this.load()
  },
  methods: {
    ok() {
      this.status = status.transition(this.status, 'done').value
    },
    error() {
      this.status = status.transition(this.status, 'error').value
    },
    load() {
      const image = new Image()
      image.onload = this.ok.bind(this)
      image.onerror = this.error.bind(this)
      image.src = this.url
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
</style>
