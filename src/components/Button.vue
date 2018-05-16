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
@define-mixin outline $color {
  border: 0.5px solid $color;
  color: $color;
  background-color: #fff;
}

button {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  color: #fff;

  &.purple {
    background-image: var(--purple-gradient);
    &.outline {
      background-image: none;
      @mixin outline var(--purple);
    }
  }

  &.dark-purple {
    background-color: var(--purple-dark);
    &.outline {
      @mixin outline var(--purple-dark);
    }
  }

  &.danger {
    background-color: var(--danger);
    &.outline {
      @mixin outline var(--danger);
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
