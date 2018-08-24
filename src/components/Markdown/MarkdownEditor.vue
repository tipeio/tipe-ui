<template>
  <textarea
    :data-tipe-ui="$options.name"
    :value="value"
    @change="handleChange"
  />
</template>

<script>
import vueTypes from 'vue-types'
import TipeTextarea from '@/components/Textarea'

export default {
  name: 'TipeMarkdownEditor',
  components: {
    TipeTextarea
  },
  props: {
    value: vueTypes.string.def('')
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style>
textarea {
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  box-sizing: border-box;
  resize: none;
}
</style>
