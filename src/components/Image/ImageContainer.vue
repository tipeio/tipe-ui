<template>
  <error-template v-if="status === 'error'"/>
  <tipe-image v-else-if="status === 'ok'"/>
  <waiting-template v-else/>
</template>

<script>
import vueTypes from 'vue-types'
import { Machine } from 'xstate'
import imageLoader from '../../libs/imageLoader'

import TipeImage from './Image.vue'
import ErrorTemplate from './templates/ErrorTemplate.vue'
import WaitingTemplate from './templates/WaitingTemplate.vue'

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
    TipeImage,
    ErrorTemplate,
    WaitingTemplate
  },
  props: {
    alt: vueTypes.string.def(''),
    url: vueTypes.string.def(''),
    __imageLoader__: vueTypes.func.def(imageLoader)
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
      this.__imageLoader__(this.url)
        .then(this.ok)
        .catch(this.error)
    }
  }
}
</script>
