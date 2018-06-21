<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootStyleObject"
  >
    {{ message }}
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeDocumentBlockMessage',
  props: {
    status: vueTypes.oneOf(['success', 'warning', 'error', '']).def(''),
    successMessage: vueTypes.string.def(''),
    warningMessage: vueTypes.string.def(''),
    errorMessage: vueTypes.string.def('')
  },
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
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentBlockMessage'] {
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8125rem;
  white-space: nowrap;
  overflow: hidden;
}

[data-tipe-ui='TipeDocumentBlockMessage'].status-success {
  color: var(--success);
  border-bottom: 1px solid var(--success);
}

[data-tipe-ui='TipeDocumentBlockMessage'].status-warning {
  color: var(--warning);
  border-bottom: 1px solid var(--warning);
}

[data-tipe-ui='TipeDocumentBlockMessage'].status-error {
  color: var(--error);
  border-bottom: 1px solid var(--error);
}
</style>
