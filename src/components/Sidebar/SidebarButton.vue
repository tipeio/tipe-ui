<template>
  <button
    :data-tipe-ui="$options.name"
    @click="$emit('click', $event)"
  >
    <div class="icon-container">
      <tipe-icon
        :icon="icon"
        height="1.5rem"
        width="1.5rem"
      />
    </div>
  </button>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '../Icon'

export default {
  name: 'TipeSidebarButton',
  components: {
    TipeIcon
  },
  props: {
    icon: vueTypes.string
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeSidebarButton'] {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background-color: var(--purple);
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
}

.icon-container {
  flex: 0 0 4.6875rem;
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
}
</style>
