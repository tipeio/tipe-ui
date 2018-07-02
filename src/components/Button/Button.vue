<template>
  <button
    :data-tipe-ui="$options.name"
    :class="classObject"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <div
      :class="{dropdown}"
      class="layout">
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
          v-if="dropdown"
          :icon="iconAfter"
          class="icon"
          height="6px"
          width="10px"
        />
        <tipe-icon
          v-else
          :icon="iconAfter"
          class="icon"

        />
      </div>
    </div>
  </button>
</template>

<script>
import inputProps from '@/types/InputProps'
import vueTypes from 'vue-types'
import TipeIcon from '../Icon'
export default {
  name: 'TipeButton',
  components: { TipeIcon },
  props: {
    size: vueTypes
      .oneOf(['mini', 'small', 'medium', 'large', 'full'])
      .def('medium'),
    color: vueTypes
      .oneOf([
        'default',
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'none'
      ])
      .def('default'),
    iconBefore: vueTypes.string.def(''),
    iconAfter: vueTypes.string.def(''),
    ...inputProps
  },
  computed: {
    classObject: function() {
      const { color, size, status, waiting } = this
      return {
        [size]: true,
        [color]: true,
        waiting: waiting,
        [`status-${status}`]: status,
        has_icon_before: !!this.iconBefore,
        has_icon_after: !!this.iconAfter
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import './button.postcss';
</style>
