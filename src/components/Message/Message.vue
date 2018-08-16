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
  name: 'TipeMessage',
  props: {
    status: vueTypes.oneOf(['', 'success', 'warning', 'error']),
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
          console.log(this.successMessage)
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
[data-tipe-ui='TipeMessage'] {
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8125rem;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 1rem;
}

[data-tipe-ui='TipeMessage'].status-success {
  color: var(--success);
}

[data-tipe-ui='TipeMessage'].status-warning {
  color: var(--warning);
}

[data-tipe-ui='TipeMessage'].status-error {
  color: var(--error);
}
</style>
