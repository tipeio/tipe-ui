<template>
  <div :data-tipe-ui="$options.name">
    <div class="filter-control-container">
      <tipe-template-browser-filter-control
        @change="$emit('filter-change', $event.value)"
      />
    </div>
    <div class="new-template-button-container">
      <tipe-button
        icon-before="plus"
        @click="$emit('new-template')"
      >
        New Template
      </tipe-button>
    </div>
  </div>
</template>

<script>
import TipeButton from '@/components/Button'
import TipeTemplateBrowserFilterControl from './TemplateBrowserFilterControl'

export default {
  name: 'TipeTemplateBrowserToolbar',
  components: {
    TipeButton,
    TipeTemplateBrowserFilterControl
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeTemplateBrowserToolbar'] {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: 100%;
}

.filter-control-container {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.new-template-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
