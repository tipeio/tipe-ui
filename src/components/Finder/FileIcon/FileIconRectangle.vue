<template>
  <div :data-tipe-ui="$options.name">
    <button
      class="file-icon"
    >
      <tipe-icon :icon="icon" />
    </button>
    <button
      class="label"
    >
      {{ file.label }}
    </button>
    <button
      class="options-icon"
    >
      <tipe-icon icon="options" />
    </button>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeIcon from '@/components/Icon'
import { getFileIcon } from './utils'

export default {
  name: 'TipeFileIconRectangle',
  components: {
    TipeIcon
  },
  props: {
    file: vueTypes.shape(interfaces.file)
  },
  computed: {
    icon() {
      return getFileIcon(this.file)
    }
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
