<template>
  <button
    :data-tipe-ui="$options.name"
    :class="classObject"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <div class="layout">
      <div
        v-if="iconBefore"
        class="icon-container"
      >
        <tipe-icon
          :icon="iconBefore"
          class="icon"
        />
      </div>
      <div
        v-if="$slots.default"
        class="label">
        <slot />
      </div>
      <div
        v-if="iconAfter"
        class="icon-container"
      >
        <tipe-icon
          :icon="iconAfter"
          class="icon"

        />
      </div>
    </div>
  </button>
</template>

<script>
import interfaces from '@tipe/tipe-interfaces'
import vueTypes from 'vue-types'
import TipeIcon from '../Icon'

export default {
  name: 'TipeButton',
  components: { TipeIcon },
  props: {
    color: vueTypes
      .oneOf(['primary', 'success', 'info', 'warning', 'danger', 'none'])
      .def('primary'),
    outline: vueTypes.bool.def(false),
    iconBefore: vueTypes.string.def(''),
    iconAfter: vueTypes.string.def(''),
    ...interfaces.input,
    size: vueTypes.oneOf(['mini', 'small', 'medium', 'large']).def('medium')
  },
  computed: {
    classObject: function() {
      const { color, size, status, waiting, dropdown } = this
      return {
        [size]: true,
        [color]: true,
        outline: this.outline,
        [`status-${status}`]: status,
        has_icon_before: !!this.iconBefore,
        has_icon_after: !!this.iconAfter,
        dropdown,
        waiting
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import './button.postcss';
</style>
