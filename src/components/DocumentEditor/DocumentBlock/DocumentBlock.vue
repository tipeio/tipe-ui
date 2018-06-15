<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootStyleObject"
  >
    <div class="grab-handle">
      <tipe-icon icon="options"/>
    </div>
    <div class="name-container">
      <tipe-document-block-name-input
        :value="name"
        :waiting="waiting"
        :disabled="disabled"
        @change="onChangeName"
      />
    </div>
    <div class="input-container">
      <tipe-document-block-value-input
        :status="status"
        :value="value"
        :waiting="waiting"
        :disabled="disabled"
        :type="type"
        @change="onChangeValue"
      />
    </div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
import documentBlockShape from '@/types/DocumentBlock'
import TipeIcon from '@/components/Icon'
import TipeDocumentBlockValueInput from './DocumentBlockValueInput'
import TipeDocumentBlockNameInput from './DocumentBlockNameInput'

export default {
  name: 'TipeDocumentBlock',
  components: {
    TipeIcon,
    TipeDocumentBlockValueInput,
    TipeDocumentBlockNameInput
  },
  props: documentBlockShape,
  computed: {
    rootStyleObject() {
      return {
        [`status-${this.status}`]: this.status,
        waiting: this.waiting,
        disabled: this.disabled
      }
    },
    message() {
      switch (this.status) {
        case 'success':
          return this.successMessage
        case 'warning':
          return this.warningMessage
        case 'error':
          return this.errorMessage
        default:
          return ''
      }
    }
  },
  methods: {
    onChangeName(event) {
      this.$emit('change', { name: event.target.value })
    },
    onChangeValue(event) {
      this.$emit('change', { value: event.target.value })
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentBlock'] {
  display: grid;
  grid-template-areas:
    'grab-handle name'
    'grab-handle input'
    'grab-handle message';
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1.625rem auto 1rem;
  grid-row-gap: 0.5625rem;
  border-radius: 0.1875rem;
  box-sizing: border-box;
  padding: 1.3125rem;
  padding-left: 0;
  width: 100%;
  min-width: 12rem;
}

.grab-handle {
  grid-area: grab-handle;
  display: grid;
  align-items: center;
  justify-content: center;
  cursor: grab;
}

.name-container {
  grid-area: name;
  font-size: 1rem;
}

.input-container {
  grid-area: input;
}

.message {
  grid-area: message;
  font-size: 0.8125rem;
}

[data-tipe-ui='TipeDocumentBlock'].status-success {
  border: 1px solid var(--success);
}

[data-tipe-ui='TipeDocumentBlock'].status-warning {
  border: 1px solid var(--warning);
}

[data-tipe-ui='TipeDocumentBlock'].status-error {
  border: 1px solid var(--error);
}

[data-tipe-ui='TipeDocumentBlock'].status-success .message {
  color: var(--success);
}

[data-tipe-ui='TipeDocumentBlock'].status-warning .message {
  color: var(--warning);
}

[data-tipe-ui='TipeDocumentBlock'].status-error .message {
  color: var(--error);
}

[data-tipe-ui='TipeDocumentBlock'].waiting {
  cursor: wait;
}

[data-tipe-ui='TipeDocumentBlock'].disabled {
  cursor: not-allowed;
}
</style>
