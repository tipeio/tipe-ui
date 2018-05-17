<template>
  <button
    :data-tipe-ui="$options.name"
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
    color: vueTypes
      .oneOf(['purple', 'danger', 'dark-purple', 'gray'])
      .def('purple')
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
  border: 1px solid $color;
  color: $color;
  background-color: #fff;
}

@define-mixin hover-outline $color {
  background-color: $color;
  color: #fff;
}

@define-mixin hover-fill $color {
  color: #fff;
  background-color: $color;
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
      &:hover {
        @mixin hover-outline var(--purple);
      }
    }
    &:hover {
      @mixin hover-fill var(--purple-light);
    }
  }

  &.dark-purple {
    background-color: var(--purple-dark);
    &.outline {
      @mixin outline var(--purple-dark);
      &:hover {
        @mixin hover-outline var(--purple-dark);
      }
    }
    &:hover {
      @mixin hover-fill var(--purple);
    }
  }

  &.gray {
    background-color: var(--gray-blue-light);
    &.outline {
      @mixin outline var(--gray-blue-light);
      color: var(--text-gray-dark);
      &:hover {
        @mixin hover-outline var(--gray-blue-light);
      }
    }
    &:hover {
      @mixin hover-fill var(--gray-light);
    }
  }

  &.danger {
    background-color: var(--danger);
    &.outline {
      @mixin outline var(--danger);
      &:hover {
        @mixin hover-outline var(--danger);
      }
    }
    &:hover {
      @mixin hover-fill var(--danger);
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
