<template>
  <input
    :data-tipe-ui="$options.name"
    :value="value"
    :disabled="disabled || waiting"
    :class="rootClassObject"
    name="name"
    type="text"
    placeholder="block name"
    @change="$emit('change', $event)"
  >
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeDocumentBlockNameInput',
  props: {
    value: vueTypes.string,
    waiting: vueTypes.bool.def(false),
    disabled: vueTypes.bool.def(false)
  },
  computed: {
    rootClassObject() {
      return {
        waiting: this.waiting
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentBlockNameInput'] {
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  background: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  color: var(--dark-purple);
  font-size: 1rem;
  letter-spacing: 0.009375rem;
}

[data-tipe-ui='TipeDocumentBlockNameInput']:disabled {
  cursor: not-allowed;
}

[data-tipe-ui='TipeDocumentBlockNameInput'].waiting {
  cursor: wait;
}
</style>
