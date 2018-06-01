<template>
  <div data-tipe-ui="$options">
    <input
      :value="value"
      :placeholder="placeholder"
      autofocus
    >
    <div class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeFileNameInput',
  props: {
    value: vueTypes.string.def(''),
    message: vueTypes.string.def(''),
    placeholder: vueTypes.string.def('Untitled')
  }
}
</script>

<style lang="postcss" scoped>
input {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 1.5rem 0;
  color: var(--purple-dark);
  box-sizing: border-box;
  background-color: transparent;
}

input::-webkit-input-placeholder {
  color: var(--text-gray-blue-light);
}

.message {
  color: var(--text-gray-blue-light);
  font-weight: 400;
  font-size: 1rem;
}
</style>
