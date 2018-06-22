<template>
  <div
    :data-tipe-ui="$options.name"
    :name="name"
    :class="classObject"
    :tabindex="tabindex"
    :status="status"
    class="checkbox-group"
    @click="click"
    @focus="focus"
    @change="change"
    @blur="blur"
  >
    <slot v-bind="$props"/>
  </div>
</template>

<script>
import checkboxGroupShape from '@/types/CheckboxGroup'

export default {
  name: 'TipeCheckboxGroup',
  props: checkboxGroupShape,
  computed: {
    classObject: function() {
      const { status, waiting, disabled } = this
      return {
        [`status-${status}`]: status,
        waiting,
        disabled
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
.checkbox-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 2.9375rem;
}

.disabled {
  cursor: not-allowed;
}

.waiting {
  cursor: wait;
}

.status-success {
  border: 1px solid var(--success);
}

.status-error {
  border: 1px solid var(--error);
}

.status-warning {
  border: 1px solid var(--warning);
}
</style>
