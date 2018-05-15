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
  background-image: linear-gradient(108deg, #714bfe, #6047fa 51%, #5727e1);
}

.outline {
  color: #6047fa;
  background-color: #fff;
  border: 0.5px solid #6047fa;
}

.dark {
  background-color: #1f346c;
  border-color: #1f346c;
  background-image: none;
}
.danger {
  background-color: #e44646;
  border-color: #e44646;
  background-image: none;
}

.outline.dark {
  color: #1f346c;
  background-color: #fff;
}

.outline.danger {
  color: #e44646;
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
