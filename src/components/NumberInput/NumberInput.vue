<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootClassObject"
  >
    <input
      ref="input"
      :placeholder="placeholder"
      :value="displayValue"
      :disabled="disabled"
      :tabindex="tabindex"
      :max="max"
      :min="min"
      :step="step"
      type="number"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click', $event)"
      @change="onChange"
      @input="onInput"
    >
    <button
      :disabled="disabled"
      @mousedown.stop.prevent
      @click="onIncrement"
    >
      <tipe-icon
        height="0.6rem"
        width="0.6rem"
        icon="arrow-up"
      />
    </button>
    <button
      :disabled="disabled"
      @mousedown.stop.prevent
      @click="onDecrement"
    >
      <tipe-icon
        height="0.6rem"
        width="0.6rem"
        icon="arrow-down"
      />
    </button>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeIcon from '@/components/Icon'
import { getPrecision } from '@/libs/float'

export default {
  name: 'TipeNumberInput',
  components: {
    TipeIcon
  },
  props: {
    value: vueTypes.oneOfType([vueTypes.number, undefined]),
    max: vueTypes.number.def(Infinity),
    min: vueTypes.number.def(-Infinity),
    step: vueTypes.number.def(1),
    placeholder: vueTypes.oneOfType([vueTypes.number, vueTypes.string]),
    ...interfaces.input
  },
  data() {
    return {
      displayValue: this.value,
      focus: false
    }
  },
  computed: {
    rootClassObject() {
      return {
        [`status-${this.status}`]: this.status,
        waiting: this.waiting,
        [this.size]: true,
        focus: this.focus
      }
    }
  },
  methods: {
    getDisplayValue() {
      const displayValue = parseFloat(this.displayValue)
      return isNaN(displayValue) ? undefined : displayValue
    },
    setDisplayValue(value) {
      this.displayValue = Math.min(
        Math.max(
          parseFloat(value).toFixed(
            Math.min(getPrecision(this.step), getPrecision(value))
          ),
          this.min
        ),
        this.max
      )
    },
    onInput(event) {
      this.setDisplayValue(event.target.value)
      this.$emit('input', this.displayValue)
    },
    onChange(event) {
      this.setDisplayValue(event.target.value)
      this.$emit('change', this.displayValue)
    },
    onFocus(event) {
      this.focus = true
      this.$emit('focus', event)
    },
    onBlur(event) {
      this.focus = false
      this.$emit('blur', event)
    },
    onIncrement() {
      this.$refs.input.focus()
      const value = this.getDisplayValue()

      if (value === undefined) {
        if (this.min === -Infinity) {
          this.setDisplayValue(0)
        } else {
          this.setDisplayValue(this.min)
        }
      } else if (value + this.step <= this.max) {
        this.setDisplayValue(value + this.step)
      } else {
        return
      }

      this.$emit('change', this.displayValue)
    },
    onDecrement() {
      this.$refs.input.focus()
      const value = this.getDisplayValue()

      if (value === undefined) {
        if (this.min === -Infinity) {
          this.setDisplayValue(0)
        } else {
          this.setDisplayValue(this.min)
        }
      } else if (value - this.step >= this.min) {
        this.setDisplayValue(value - this.step)
      } else {
        return
      }

      this.$emit('change', this.displayValue)
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeNumberInput'] {
  display: grid;
  grid-template-areas:
    'input up'
    'input down';
  grid-template-columns: 1fr 2.4375rem;
  grid-template-rows: 1fr 1fr;
  border: 1px solid var(--gray-light);
  border-radius: 0.25rem;
  overflow: hidden;
  width: 10rem;
}

[data-tipe-ui='TipeNumberInput'].small {
  line-height: 0.6875rem;
  font-size: 0.6875rem;
  height: 1.625rem;
}

[data-tipe-ui='TipeNumberInput'].medium {
  line-height: 0.875rem;
  font-size: 0.8125rem;
  height: 2.5rem;
}

[data-tipe-ui='TipeNumberInput'].large {
  font-size: 1rem;
  height: 3rem;
}

[data-tipe-ui='TipeNumberInput'].status-error {
  border: 1px solid var(--error);
}

[data-tipe-ui='TipeNumberInput'].status-warning {
  border: 1px solid var(--warning);
}

[data-tipe-ui='TipeNumberInput'].status-success {
  border: 1px solid var(--success);
}

[data-tipe-ui='TipeNumberInput'].focus {
  border: 1px solid var(--gray);
}

[data-tipe-ui='TipeNumberInput'].focus.status-error {
  border: 1px solid var(--danger-active);
}

[data-tipe-ui='TipeNumberInput'].focus.status-warning {
  border: 1px solid var(--warning-active);
}

[data-tipe-ui='TipeNumberInput'].focus.status-success {
  border: 1px solid var(--success-active);
}

input:disabled,
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

input {
  grid-area: input;
  -moz-appearance: textfield;
  outline: none;
  background-color: #fff;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-size: inherit;
  letter-spacing: 0.00375rem;
  border: none;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  box-sizing: border-box;
  padding: 0.1875rem 0.8125rem;
  text-align: center;
  color: var(--dark-purple);
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  outline: none;
  background-color: #f7f8fb;
  box-sizing: border-box;
  border: none;
  border-left: 1px solid var(--gray-light);
}

button:first-of-type {
  grid-area: up;
  border-bottom: 1px solid var(--gray-light);
  border-top-right-radius: 0.25rem;
}

button:last-of-type {
  grid-area: down;
  border-bottom-right-radius: 0.25rem;
}
</style>
