<template>
  <div 
    :data-tipe-ui="$options.name" 
    :class="classObject" 
    @click="click" 
    @focus="focus" 
    @change="change" 
    @blur="blur">
    <label 
      v-if="label" 
      :for="label">{{ label }}</label>
    <tipe-field-input 
      :field="field" 
      :name="name" 
      :status="status">
      <slot />
    </tipe-field-input>
    <span 
      v-if="message" 
      class="message">{{ message }}</span>
  </div>
</template>

<script>
import TipeFieldInput from './FieldInput'
import fieldShape from '@/types/FieldContainer'

export default {
  name: 'TipeFieldContainer',
  components: { TipeFieldInput },
  props: fieldShape,
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
div {
  display: flex;
  flex-direction: column;
}
label {
  color: #627098;
  font-weight: 500;
  font-size: 0.8125rem;
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
