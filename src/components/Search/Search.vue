<template>
  <div :data-tipe-ui="$options.name">
    <type-icon
      class="search-icon"
      icon="search"
      color="#b5baca"
    />
    <input
      type="search"
      placeholder="Find everthing..."
    >
  </div>
</template>

<script>
import TypeIcon from '../Icon'

export default {
  name: 'TipeSearch',
  components: {
    TypeIcon
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
[data-tipe-ui='TipeSearch'] {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;
}

.search-icon {
  flex: 0 0 auto;
  height: 1.25rem;
  width: 1.25rem;
}

[data-tipe-ui='TipeSearch'] > input {
  flex: 1;
  margin-left: 0.437rem;
  margin-right: 0.437rem;
  border: none;
  border-radius: 0;
  color: var(--text-gray);
  background-color: transparent;
  font-size: 1rem;
  height: 1.625rem;
  line-height: 1.625rem;
}

[data-tipe-ui='TipeSearch'] > input::-webkit-input-placeholder {
  color: var(--text-gray);
  opacity: 0.4;
}
</style>
