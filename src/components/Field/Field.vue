<template>
  <div
    :data-tipe-ui="$options.name"
    :class="classObject"
    class="field"
  >
    <label
      v-if="label"
      :for="label"
    >
      {{ label }}
    </label>
    <slot />
    <span
      v-if="message"
      class="message"
    >
      {{ message }}
    </span>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeField',
  props: {
    label: vueTypes.string.def(''),
    status: vueTypes.oneOf(['error', 'success', 'warning', '']).def(''),
    errorMessage: vueTypes.string.def(''),
    successMessage: vueTypes.string.def(''),
    warningMessage: vueTypes.string.def('')
  },
  computed: {
    classObject: function() {
      const { status } = this
      return {
        success: status === 'success',
        error: status === 'error',
        warning: status === 'warning'
      }
    },
    message() {
      switch (this.status) {
        case 'error':
          return this.errorMessage
        case 'warning':
          return this.warningMessage
        case 'success':
          return this.successMessage
        default:
          return ''
      }
    }
  },
  methods: {
    click(event) {
      this.$emit('click', event)
    },
    focus(event) {
      this.$emit('focus', event)
    },
    blur(event) {
      this.$emit('blur', event)
    },
    change(event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style scoped lang="postcss">
.field {
  display: flex;
  flex-direction: column;
  margin: 2.25rem 0;
}

label {
  color: #627098;
  font-weight: 400;
  font-size: 0.8125rem;
  letter-spacing: 0.3px;
}

.message {
  font-size: 0.6875rem;
  margin: 0;
  margin-top: 6.5px;
}

.warning {
  & label {
    color: var(--warning);
  }

  & .message {
    color: var(--warning);
  }
}

.success {
  & label {
    color: var(--success);
  }

  & .message {
    color: var(--success);
  }
}

.error {
  & label {
    color: var(--error);
  }

  & .message {
    color: var(--error);
  }
}
</style>
