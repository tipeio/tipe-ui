<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootStyleObject"
  >
    <div class="grab-handle">
      <tipe-icon icon="options"/>
    </div>
    <div class="name-container">
      <input
        :value="name"
        :disabled="disabled || waiting"
        name="name"
        class="name"
        type="text"
        @change="onChangeName"
      >
    </div>
    <div class="input-container">
      <slot/>
    </div>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
import documentBlockShape from '@/types/DocumentBlock'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeDocumentBlock',
  components: {
    TipeIcon
  },
  props: documentBlockShape,
  computed: {
    rootStyleObject() {
      return {
        [`status-${this.status}`]: this.status,
        waiting: this.waiting
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

.name {
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
  border: 1px solid var(--danger);
}

[data-tipe-ui='TipeDocumentBlock'].status-success .message {
  color: var(--success);
}

[data-tipe-ui='TipeDocumentBlock'].status-warning .message {
  color: var(--warning);
}

[data-tipe-ui='TipeDocumentBlock'].status-error .message {
  color: var(--danger);
}
</style>
