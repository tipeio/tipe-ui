<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootStyleObject"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <div class="margin">
      <tipe-document-block-margin
        v-if="hover"
        :options="options"
        :waiting="block.waiting"
        :disabled="block.disabled"
      />
    </div>
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
import documentBlockShape from '@/types/DocumentBlock'
import blockOptionShape from '@/types/BlockOption'
import TipeDocumentBlockValueInput from './DocumentBlockValueInput'
import TipeDocumentBlockHeader from './DocumentBlockHeader'
import TipeDocumentBlockMargin from './DocumentBlockMargin'
import TipeDocumentBlockMessage from './DocumentBlockMessage'

export default {
  name: 'TipeDocumentBlock',
  components: {
    TipeDocumentBlockValueInput,
    TipeDocumentBlockHeader,
    TipeDocumentBlockMargin,
    TipeDocumentBlockMessage
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(blockOptionShape)),
    block: vueTypes.shape(documentBlockShape)
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
  display: grid;
  grid-template-areas:
    'margin header'
    'margin body'
    'margin footer';
  grid-template-columns: 4.25rem 1fr;
  grid-template-rows: auto auto auto;
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
