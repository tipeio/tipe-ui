<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootStyleObject"
  >
    <div class="grab-handle">
      <tipe-icon icon="options" />
    </div>
    <tipe-select-block
      :waiting="waiting"
      :disabled="disabled"
      :options="options"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '@/components/Icon'
import interfaces from '@tipe/tipe-interfaces'
import TipeSelectBlock from './SelectBlock'

export default {
  name: 'TipeDocumentBlockMargin',
  components: {
    TipeIcon,
    TipeSelectBlock
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(interfaces.blockOption)),
    waiting: vueTypes.bool.def(false),
    disabled: vueTypes.bool.def(false)
  },
  computed: {
    rootStyleObject() {
      return {
        waiting: this.waiting,
        disabled: this.disabled
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentBlockMargin'] {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.grab-handle {
  display: grid;
  height: 1.75rem;
  width: 1rem;
  align-items: center;
  justify-content: center;
  cursor: grab;
}

[data-tipe-ui='TipeDocumentBlock'].waiting {
  cursor: wait;
}

[data-tipe-ui='TipeDocumentBlock'].disabled {
  cursor: not-allowed;
}
</style>
