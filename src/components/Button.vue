<template>
  <button
    :class="classObject"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'TipeButton',
  props: {
    type: VueTypes.oneOf(['fill', 'outline']).def('fill'),
    size: VueTypes.oneOf(['small', 'medium', 'large']).def('medium'),
    btnStyle: VueTypes.oneOf(['danger', 'dark', '']).def('')
  },
  computed: {
    classObject: function() {
      const { type, size, btnStyle } = this
      return {
        [type]: true,
        [btnStyle]: !!btnStyle,
        [size]: true
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
  &.fill {
    color: #fff;
    background-image: var(--btn-gradient);

    &.dark {
      background-color: var(--purple-dark);
      border-color: var(--purple-dark);
      background-image: none;
    }

    &.danger {
      background-color: var(--danger);
      border-color: var(--danger);
      background-image: none;
    }
  }

  &.outline {
    color: var(--purple);
    background-color: #fff;
    border: 0.5px solid var(--purple);

    &.dark {
      color: var(--purple-dark);
      background-color: #fff;
      border-color: var(--purple-dark);
    }

    &.danger {
      color: var(--danger);
      background-color: #fff;
      border-color: var(--danger);
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
