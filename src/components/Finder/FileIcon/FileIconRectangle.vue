<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootClassObject"
    @click="$emit('click', $event)"
  >
    <button
      class="file-icon"
      @click="$emit('click', $event)"
    >
      <tipe-icon :icon="icon" />
    </button>
    <button
      class="label"
      @click="$emit('click', $event)"
    >
      {{ label }}
    </button>
    <button
      v-if="!picker"
      class="options-icon"
    >
      <tipe-icon icon="options" />
    </button>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '@/components/Icon'
import interfaces from '@tipe/tipe-interfaces'

export default {
  name: 'TipeFileIconRectangle',
  components: {
    TipeIcon
  },
  props: {
    picker: vueTypes.bool.def(false),
    selected: vueTypes.bool.def(false),
    ...interfaces.file
  },
  computed: {
    rootClassObject: props => ({
      selected: props.selected
    })
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeFileIconRectangle'] {
  height: 100%;
  width: 100%;
  min-width: 9rem;
  min-height: 3rem;
  display: grid;
  grid-template-columns: 3.75rem 1fr 3rem;
  border: 1px solid var(--gray-blue-light);
  border-radius: 0.3125rem;
  box-sizing: border-box;
}

.selected {
  border: 1px solid var(--text-gray-light);
}

button {
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.file-icon,
.options-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(31, 52, 108);
  font-size: 0.8125rem;
}
</style>
