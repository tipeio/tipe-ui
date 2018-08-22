<template>
  <div :data-tipe-ui="$options.name">
    <tipe-tabs-menu-button
      v-for="(button, i) in buttons"
      :key="i"
      v-bind="button"
      @click="$emit('click', button.label)"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@/interfaces'
import TipeTabsMenuButton from './TabsMenuButton'

export default {
  name: 'TipeTabsMenu',
  components: {
    TipeTabsMenuButton
  },
  props: {
    buttons: vueTypes.arrayOf(vueTypes.shape(interfaces.tabsMenuButton))
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeTabsMenu'] {
  height: 2.6875rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  border-bottom: 1px solid var(--gray-light);
  box-sizing: border-box;
}
</style>
