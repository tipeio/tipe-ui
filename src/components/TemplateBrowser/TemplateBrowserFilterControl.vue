<template>
  <div :data-tipe-ui="$options.name">
    <button
      v-for="({ label, value }, i) in filters"
      :key="i"
      :class="buttonClassObject(value)"
      @click="() => onClick(value)"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
const filters = [
  { label: 'Recently Viewed', value: 'recently-viewed' },
  { label: 'Starred', value: 'starred' },
  { label: 'Created by me', value: 'created-by-me' },
  { label: 'Shared with me', value: 'shared-with-me' }
]

export default {
  name: 'TipeTemplateBrowserFilterControl',
  data() {
    return {
      value: 'recently-viewed',
      filters
    }
  },
  methods: {
    buttonClassObject(value) {
      return {
        on: value === this.value
      }
    },
    onClick(value) {
      this.value = value
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeTemplateBrowserFilterControl'] {
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

button {
  height: auto;
  width: auto;
  border: none;
  outline: none;
  padding: 0 1rem 0 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  background-color: transparent;
  white-space: nowrap;
}

button.on {
  font-weight: 800;
}
</style>
