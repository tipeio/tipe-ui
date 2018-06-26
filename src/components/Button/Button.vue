<template>
  <button
    :data-tipe-ui="$options.name"
    :class="classObject"
    @click="onClick"
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
import vueTypes from 'vue-types'
import TipeIcon from '../Icon'

export default {
  name: 'TipeButton',
  components: { TipeIcon },
  props: {
    size: vueTypes
      .oneOf(['mini', 'small', 'medium', 'large', 'full'])
      .def('medium'),
    outline: vueTypes.bool.def(false),
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
    waiting: vueTypes.bool.def(false),
    dropdown: vueTypes.bool.def(false)
  },
  computed: {
    classObject: function() {
      const { color, size, outline, waiting } = this
      return {
        [size]: true,
        [color]: true,
        has_icon_before: !!this.iconBefore,
        has_icon_after: !!this.iconAfter,
        outline,
        waiting
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="postcss" scoped>
@import './button.postcss';
</style>
