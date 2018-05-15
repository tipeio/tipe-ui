<template>
  <button
    :class="classObject"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default() {
        return 'fill'
      },
      validator: value => isValidProp(value, ['fill', 'outline'])
    },
    size: {
      type: String,
      default() {
        return 'medium'
      },
      validator: value => isValidProp(value, ['small', 'medium', 'large'])
    },
    btnStyle: {
      type: String,
      required: false,
      default() {
        return ''
      },
      validator: value => isValidProp(value, ['danger', 'dark', ''])
    }
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
function isValidProp(value, arr) {
  return arr.indexOf(value) !== -1
}
</script>

<style scoped>
button {
  cursor: pointer;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  border: none;
}

.fill {
  color: #fff;
  background-image: var(--btnGradient);
}

.outline {
  color: var(--purple);
  background-color: #fff;
  border: 0.5px solid var(--purple);
}

.dark {
  background-color: var(--darkPurple);
  border-color: var(--darkPurple);
  background-image: none;
}
.danger {
  background-color: var(--danger);
  border-color: var(--danger);
  background-image: none;
}

.outline.dark {
  color: var(--darkPurple);
  background-color: #fff;
}

.outline.danger {
  color: var(--danger);
  background-color: #fff;
}

.small {
  font-size: 0.75rem;
}
.medium {
  font-size: 1.25rem;
}

.large {
  font-size: 1.5rem;
}
</style>
