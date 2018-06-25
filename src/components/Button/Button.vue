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
    size: vueTypes
      .oneOf(['mini', 'small', 'medium', 'large', 'full'])
      .def('medium'),
    outline: vueTypes.bool.def(false),
    color: vueTypes
      .oneOf(['default', 'primary', 'info', 'none'])
      .def('default'),
    status: vueTypes.oneOf(['success', 'error', 'warning']),
    iconBefore: vueTypes.string.def(''),
    iconAfter: vueTypes.string.def('')
  },
  computed: {
    classObject: function() {
      const { color, size, outline } = this
      return {
        [size]: true,
        [color]: true,
        ...(this.status && { [this.status]: true }),
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

  &:disabled {
    cursor: not-allowed;
  }
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

button.mini {
  width: 6.5625rem;
  height: 1.625rem;
}

button.small {
  width: 6.5625rem;
  height: 1.875rem;
}

button.medium {
  width: 10rem;
  height: 2.5rem;
}

button.large {
  width: 10.5625rem;
  height: 3.125rem;
}

button.full {
  width: 100%;
  height: 3.25rem;
}

button.mini .label,
button.small .label {
  font-size: 0.625rem;
}

button.medium .label {
  font-size: 0.75rem;
}

button.large .label,
button.full .label {
  font-size: 0.9375rem;
}

/*
Colors
*/

/* fill */
button {
  &.default {
    background-color: var(--default);
    color: var(--default-text);
    &:hover {
      box-shadow: var(--box-shawdow);
    }
    &:focus {
      background-color: var(--default-focus);
      color: var(--default-focus-text);
      box-shadow: none;
    }
    &:disabled {
      opacity: 0.4;
      box-shadow: none;
    }
  }
  &.primary {
    background-image: var(--primary);
    &:hover {
      background-image: var(--primary-hover);
    }
    &:focus {
      background-image: var(--primary-focus);
    }
    &:disabled {
      opacity: 0.4;
      background-image: var(--primary);
    }
  }
  &.success {
    background-color: var(--success);
    color: #fff;
    &:hover {
      background-color: var(--success-hover);
      box-shadow: var(--box-shawdow);
    }
    &:focus {
      background-color: var(--success-focus);
      box-shadow: none;
    }
    &:disabled {
      opacity: 0.4;
      box-shadow: none;
      background-color: var(--success);
    }
  }
  &.info {
    background-color: var(--info);
    color: var(--info-text);
    &:hover {
      box-shadow: var(--box-shawdow);
    }
    &:focus {
      background-color: var(--info);
    }
    &:disabled {
      opacity: 0.4;
      box-shadow: none;
    }
  }
  &.warning {
    background-color: var(--warning);
    color: #fff;
    &:hover {
      background-color: var(--warning-hover);
    }
    &:focus {
      background-color: var(--warning-focus);
    }
    &:disabled {
      opacity: 0.4;
      background-color: var(--warning);
    }
  }
  &.error {
    background-color: var(--danger);
    color: #fff;
    &:hover {
      background-color: var(--danger-hover);
    }
    &:focus {
      background-color: var(--danger-focus);
    }
    &:disabled {
      opacity: 0.4;
      background-color: var(--danger);
    }
  }
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
