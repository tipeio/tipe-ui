<template>
  <div class="checkbox">
    <tipe-icon 
      :width="checkSize.width" 
      :height="checkSize.height" 
      class="check-icon" 
      icon="check" />
    <input 
      :class="classObject"
      :name="name"
      :data-tipe-ui="$options.name" 
      :disabled="isDisabled"
      :id="label"
      :value="value" 
      :tabindex="tabindex"
      :checked="checked"
      type="checkbox"
      @click="inputEmit('click')"
      @blur="inputEmit('blur')"
      @focus="inputEmit('focus')"
      @change="inputEmit('change')">
    <label 
      :for="label" 
      class="label" >{{ label }}</label>

  </div>
</template>

<script>
import vueTypes from 'vue-types'
import inputProps from '@/types/InputProps'
import TipeIcon from '../Icon'

export default {
  name: 'TipeCheckbox',
  components: { TipeIcon },
  props: {
    label: vueTypes.string,
    checked: vueTypes.bool.def(false),
    ...inputProps
  },
  computed: {
    classObject() {
      const { size, waiting, status } = this
      return {
        [size]: true,
        success: status === 'success',
        error: status === 'error',
        warning: status === 'warning',
        waiting
      }
    },
    isDisabled() {
      if (this.waiting || this.disabled) return true
      return false
    },
    checkSize() {
      switch (this.size) {
        case 'small':
          return {
            height: '6px',
            width: '8px'
          }
        case 'medium':
          return {
            height: '8px',
            width: '10px'
          }
        case 'large':
          return {
            height: '10px',
            width: '12px'
          }
        default:
          return {
            height: '8px',
            width: '10px'
          }
      }
    }
  },
  methods: {
    inputEmit(type) {
      this.$emit(type)
    }
  }
}
</script>

<style scoped lang="postcss">
.checkbox {
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr 1fr;
  grid-auto-flow: column;
  align-items: center;
  z-index: 3;
  justify-items: center;
}

.check-icon {
  grid-row: 1/1;
  grid-column: 1/1;
  z-index: 2;
}

input:disabled {
  cursor: not-allowed;
}

input {
  margin: 0;
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 4px;
  border: solid 1px #b5baca;
  grid-row: 1/1;
  grid-column: 1/1;

  &.small {
    border-radius: 2px;
    width: 0.625rem;
    height: 0.625rem;
  }

  &.large {
    width: 1.125rem;
    height: 1.125rem;
  }
  &.success {
    border: solid 1px var(--success);
  }

  &.warning {
    border: solid 1px var(--warning);
  }

  &.error {
    border: solid 1px var(--error);
  }

  &.waiting {
    cursor: wait;
  }
}

input:checked {
  background-color: #6849fc;
  border: none;
  &.success {
    border: solid 1px var(--success);
  }

  &.warning {
    border: solid 1px var(--warning);
  }

  &.error {
    border: solid 1px var(--error);
  }
}

.label {
  letter-spacing: 0.3px;
  color: #1f346c;
}
</style>
