<template>
  <div
    v-if="$slots.default"
    :data-tipe-ui="$options.name"
  >
    <slot/>
  </div>
  <div
    v-else
    :data-tipe-ui="$options.name"
    class="empty"
  >
    empty
  </div>
</template>

<script>
import interfaces from '@/interfaces'

export default {
  name: 'TipeTabsPanel',
  props: {
    ...interfaces.tabsMenuButton
  },
  computed: {
    isActive() {
      console.log('activePanelLabel', this.activePanelLabel)
      return false
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeTabsPanel'] {
  height: 100%;
  width: 100%;
}

.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  background-color: var(--gray-lightest);
  color: var(--text-gray-light);
  font-size: 0.8125rem;
}
</style>
