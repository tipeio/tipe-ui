<template>
  <textarea
    :data-tipe-ui="$options.name"
    :class="rootClassObject"
    :disabled="disabled || waiting"
    :name="name"
    :tabindex="tabindex"
    :value="value"
    :placeholder="placeholder"
    type="text"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @click="$emit('click', $event)"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
  />
</template>

<script>
import vueTypes from 'vue-types'
import inputProps from '@/types/InputProps'
import autosize from 'autosize'

export default {
  name: 'TipeTextarea',
  props: {
    value: vueTypes.string.def(''),
    placeholder: vueTypes.string.def(''),
    ...inputProps
  },
  computed: {
    rootClassObject() {
      return {
        [this.size]: true,
        [`status-${this.status}`]: this.status,
        waiting: this.waiting
      }
    }
  },
  mounted() {
    autosize(this.$el)
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeTextarea'] {
  max-height: 10rem;
  width: 100%;
  margin: 0;
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 0.25rem;
  outline: none;
  background-color: #fff;
  font-size: 0.875rem;
  line-height: 1.2rem;
  color: var(--purple-dark);
  box-sizing: border-box;
  resize: none;
}

[data-tipe-ui='TipeTextarea'].small {
  min-height: 4rem;
}

[data-tipe-ui='TipeTextarea'].medium {
  min-height: 8rem;
}

[data-tipe-ui='TipeTextarea'].large {
  min-height: 16rem;
}

[data-tipe-ui='TipeTextarea']::-moz-placeholder,
[data-tipe-ui='TipeTextarea']::-moz-placeholder {
  color: var(--light-gray);
}

[data-tipe-ui='TipeTextarea'].status-success {
  border: 1px solid var(--success);
}

[data-tipe-ui='TipeTextarea'].status-warning {
  border: 1px solid var(--warning);
}

[data-tipe-ui='TipeTextarea'].status-error {
  border: 1px solid var(--error);
}

[data-tipe-ui='TipeTextarea'].status-success:focus {
  border: 1px solid var(--success-active);
}

[data-tipe-ui='TipeTextarea'].status-warning:focus {
  border: 1px solid var(--warning-active);
}

[data-tipe-ui='TipeTextarea'].status-error:focus {
  border: 1px solid var(--danger-active);
}

[data-tipe-ui='TipeTextarea'].waiting {
  cursor: wait;
  color: var(--gray-light);
  border: 1px solid var(--gray-light);
}

[data-tipe-ui='TipeTextarea']:disabled {
  cursor: not-allowed;
  color: var(--gray-light);
  border: 1px solid var(--gray-light);
}
</style>
