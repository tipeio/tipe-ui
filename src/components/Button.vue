<template>
  <button
    :class="classObject"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeButton',
  props: {
    size: vueTypes.oneOf(['small', 'medium', 'large']).def('medium'),
    outline: vueTypes.bool.def(false),
    color: vueTypes.oneOf(['purple', 'danger', 'dark-purple']).def('purple')
  },
  computed: {
    classObject: function() {
      const { color, size, outline } = this
      return {
        [size]: true,
        [color]: true,
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
  cursor: pointer;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #fff;

  &.purple {
    color: #fff;
    background-image: var(--purple-gradient);
    &.outline {
      border: 0.5px solid var(--purple);
      color: var(--purple);
      background-image: none;
    }
  }

  &.dark-purple {
    background-color: var(--purple-dark);
    &.outline {
      border: 0.5px solid var(--purple-dark);
      color: var(--purple-dark);
      background-color: #fff;
    }
  }

  &.danger {
    background-color: var(--danger);
    &.outline {
      border: 0.5px solid var(--danger);
      color: var(--danger);
      background-color: #fff;
    }
  }

  &.small {
    font-size: 0.75rem;
  }
  &.medium {
    font-size: 1.25rem;
  }

  &.large {
    font-size: 1.5rem;
  }
}
</style>
