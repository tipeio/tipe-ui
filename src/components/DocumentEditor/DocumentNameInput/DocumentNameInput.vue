<template>
  <div :data-tipe-ui="$options.name">
    <input
      :value="value"
      :class="inputClassObject"
      placeholder="Untitled"
      type="text"
      @change="handleChange"
    >
    <tipe-message
      :status="status"
      warning-message="name your document"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeMessage from '@/components/Message'

export default {
  name: 'TipeDocumentNameInput',
  components: {
    TipeMessage
  },
  props: {
    value: vueTypes.string.def('')
  },
  computed: {
    status: props => (props.value === '' ? 'warning' : ''),
    inputClassObject: props => ({
      [`status-${props.status}`]: !!props.status
    })
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style lang="postcss" scoped>
input {
  height: 5rem;
  width: 100%;
  outline: none;
  padding: 0 0.4rem;
  margin: 0;
  border-radius: 0.1875rem;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: 3.5rem;
  font-weight: 200;
  color: var(--dark-purple);
  box-sizing: border-box;
}

input.status-warning {
  border-color: var(--warning);
}

input::placeholder {
  color: var(--gray-blue-light);
}
</style>
