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
    size: vueTypes.oneOf(['small', 'medium', 'large']).def('medium'),
    outline: vueTypes.bool.def(false),
    color: vueTypes.oneOf(['purple', 'gray']).def('purple'),
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

<style scoped>
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
  width: 3.125rem;
  justify-content: center;
  align-items: center;
}

.icon {
  height: 0.8125rem;
  width: 0.8125rem;
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1.5625rem;
  padding-right: 1.5625rem;
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

button.small .label,
button.medium .label {
  font-size: 0.8125rem;
}

button.large .label {
  font-size: 0.875rem;
}

/*
Colors
*/

/* fill */
button.purple {
  background-color: var(--purple);
}

button.gray {
  background-color: var(--gray-blue-light);
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

button.outline.gray {
  border-color: var(--gray-blue-light);
  color: var(--text-gray-dark);
}
</style>
