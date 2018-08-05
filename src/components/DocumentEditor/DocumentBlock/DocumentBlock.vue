<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootStyleObject"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <div class="header">
      <tipe-document-block-header
        v-bind="block"
        @change="value => $emit('change', value)"
      />
    </div>
    <div class="body">
      <tipe-document-block-value-input
        :status="block.status"
        :value="block.value"
        :waiting="block.waiting"
        :disabled="block.disabled"
        :type="block.type"
        @change="value => $emit('change', value)"
      />
    </div>
    <div class="footer">
      <tipe-document-block-message
        v-if="block.status != ''"
        :success-message="block.errorMessage"
        :warning-message="block.errorMessage"
        :error-message="block.errorMessage"
        :status="block.status"
      />
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeDocumentBlockValueInput from './DocumentBlockValueInput'
import TipeDocumentBlockHeader from './DocumentBlockHeader'
import TipeDocumentBlockMessage from './DocumentBlockMessage'

export default {
  name: 'TipeDocumentBlock',
  components: {
    TipeDocumentBlockValueInput,
    TipeDocumentBlockHeader,
    TipeDocumentBlockMessage
  },
  props: {
    block: vueTypes.shape(interfaces.documentBlock)
  },
  data() {
    return {
      hover: false
    }
  },
  computed: {
    rootStyleObject() {
      return {
        [`status-${this.block.status}`]: this.block.status,
        waiting: this.block.waiting,
        disabled: this.block.disabled
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentBlock'] {
  display: flex;
  flex-direction: column;
  border-radius: 0.1875rem;
  box-sizing: border-box;
  width: 100%;
  min-width: 20rem;
}

.margin {
  grid-area: margin;
}

.header {
  grid-area: header;
}

.body {
  grid-area: body;
}

.footer {
  grid-area: footer;
}

[data-tipe-ui='TipeDocumentBlock'].waiting {
  cursor: wait;
}

[data-tipe-ui='TipeDocumentBlock'].disabled {
  cursor: not-allowed;
}
</style>
