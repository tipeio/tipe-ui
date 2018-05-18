<template>
  <tipe-image
    :url="url"
    :alt="alt"
    :status="status"
  />
</template>

<script>
import vueTypes from 'vue-types'
import { Machine } from 'xstate'
import TipeImage from './Image.vue'
import imageLoader from '../../libs/imageLoader'

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
  name: 'TipeImageContainer',
  components: {
    TipeImage
  },
  props: {
    alt: vueTypes.string.def(''),
    url: vueTypes.string.def(''),
    imageLoader: vueTypes.func.def(imageLoader)
  },
  data() {
    return {
      status: status.initial
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
      this.imageLoader(this.url)
        .then(this.ok)
        .catch(this.error)
    }
  }
}
</script>
