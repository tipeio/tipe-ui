<template>
  <progress
    :data-tipe-ui="$options.name"
    :value="value"
    :max="max" />
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeProgress',
  props: {
    value: vueTypes.number.def(0),
    max: vueTypes.number.def(100)
  }
}
</script>

<style scoped lang="postcss">
progress[value] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border: none;

  width: 15rem;
  height: 0.25rem;

  color: var(--purple);
}

progress[value]::-webkit-progress-bar {
  background-color: var(--gray-blue-light);
  border-radius: 0.125rem;
}

progress[value]::-webkit-progress-value {
  background-color: var(--purple);
  border-radius: 0.125rem;
}
</style>
