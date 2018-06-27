<template>
  <input
    :value="value"
    :data-tipe-ui="$options.name"
    placeholder="Document Name"
    type="text"
    @change="$emit('change', $event)"
  >
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeDocumentNameInput',
  props: {
    value: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentNameInput'] {
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: 2.375rem;
  font-weight: 600;
  height: 3.5rem;
  color: var(--dark-purple);
}

[data-tipe-ui='TipeDocumentNameInput']::-moz-placeholder,
[data-tipe-ui='TipeDocumentNameInput']::-webkit-input-placeholder {
  color: var(--midPurple);
}
</style>
