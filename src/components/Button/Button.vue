<template>
  <button
    :data-tipe-ui="$options.name"
    :class="classObject"
    @click="onClick"
  >
    <icon
      v-if="icon"
      :icon="icon"
      class="icon" />
    <slot />
  </button>
</template>

<script>
import vueTypes from 'vue-types'
import Icon from '../Icon'

export default {
  name: 'TipeButton',
  components: { Icon },
  props: {
    size: vueTypes.oneOf(['small', 'medium', 'large']).def('medium'),
    outline: vueTypes.bool.def(false),
    color: vueTypes
      .oneOf(['purple', 'danger', 'dark-purple', 'gray'])
      .def('purple'),
    icon: vueTypes.string.def('')
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
  display: flex;
  border-radius: 3px;
  border: none;
  color: #fff;
  justify-content: center;
  align-items: center;

  & .icon {
    padding-right: 10px;
    color: #fff;
  }

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
      @mixin hover-fill var(--purple);
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
      @mixin hover-fill var(--gray-blue-light);
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
    height: 1.75rem;
    font-size: 0.6875rem;
    padding: 0 1rem;
  }
  &.medium {
    height: 2.5rem;
    font-size: 0.8125rem;
    padding: 0 1.25rem;
  }

  &.large {
    height: 3.25rem;
    font-size: 0.9375rem;
    padding: 0 1.5rem;
  }
}
</style>
