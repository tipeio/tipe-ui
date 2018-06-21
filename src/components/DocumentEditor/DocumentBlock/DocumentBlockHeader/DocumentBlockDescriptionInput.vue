<template>
  <input
    :data-tipe-ui="$options.name"
    :value="value"
    :disabled="disabled || waiting"
    :class="rootClassObject"
    name="description"
    type="text"
    placeholder="give your block a description"
    @change="$emit('change', $event)"
  >
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeDocumentBlockDescriptionInput',
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
[data-tipe-ui='TipeDocumentBlockDescriptionInput'] {
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
  color: #627098;
  font-size: 0.875rem;
  letter-spacing: 0.009375rem;
}

[data-tipe-ui='TipeDocumentBlockDescriptionInput']:disabled {
  cursor: not-allowed;
}

[data-tipe-ui='TipeDocumentBlockDescriptionInput'].waiting {
  cursor: wait;
}
</style>
