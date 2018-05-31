<template>
  <button
    :data-tipe-ui="$options.name"
    :class="classObject"
    @click="onClick"
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
import vueTypes from 'vue-types'
import TipeIcon from '../Icon'

export default {
  name: 'TipeButton',
  components: { TipeIcon },
  props: {
    size: vueTypes.oneOf(['small', 'medium', 'large', 'full']).def('medium'),
    outline: vueTypes.bool.def(false),
    color: vueTypes
      .oneOf(['purple', 'purple-dark', 'gray', 'none'])
      .def('purple'),
    iconBefore: vueTypes.string.def(''),
    iconAfter: vueTypes.string.def('')
  },
  computed: {
    classObject: function() {
      const { color, size, outline } = this
      return {
        [size]: true,
        [color]: true,
        has_icon_before: !!this.iconBefore,
        has_icon_after: !!this.iconAfter,
        outline
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
button {
  height: 2.5rem;
  border-radius: 3px;
  margin: 0;
  padding: 0;
  border: none;
  color: #fff;
}

.layout {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  height: 100%;
  color: inherit;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

button.medium .icon-container,
button.large .icon-container {
  width: 3.125rem;
}

button.small .icon-container {
  width: 1.8125rem;
}

button.medium .icon,
button.large .icon {
  height: 0.8125rem;
  width: 0.8125rem;
}

button.small .icon {
  height: 0.5625rem;
  width: 0.5625rem;
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  overflow: hidden;
  white-space: nowrap;
  line-height: 0.6875rem;
}

button.medium .label,
button.large .label {
  padding-left: 1.5625rem;
  padding-right: 1.5625rem;
}

button.small .label {
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
}

button.has_icon_before .label {
  padding-left: 0;
}

button.has_icon_after .label {
  padding-right: 0;
}

/*
Sizes
*/

button.small {
  height: 1.75rem;
}

button.medium {
  height: 2.5rem;
}

button.large {
  height: 3.25rem;
}

button.full {
  width: 100%;
  height: 3.25rem;
}

button.small .label,
button.medium .label {
  font-size: 0.6875rem;
}

button.large .label,
button.full .label {
  font-size: 0.8125rem;
}

/*
Colors
*/

/* fill */
button.purple {
  background-color: var(--purple);
}

button.purple-dark {
  background-color: var(--purple-dark);
}

button.gray {
  background-color: var(--gray-blue-light);
}

button.none {
  background-color: transparent;
}
/* outline */
button.outline {
  background: transparent;
  border-style: solid;
  border-width: 1px;
}

button.outline.purple {
  border-color: var(--purple);
  color: var(--purple);
}

button.outline.purple-dark {
  border-color: var(--purple-dark);
  color: var(--purple-dark);
}

button.outline.gray {
  border-color: var(--gray-blue-light);
  color: var(--text-gray-dark);
}
</style>
