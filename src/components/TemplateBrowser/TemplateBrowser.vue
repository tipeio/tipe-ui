<template>
  <div :data-tipe-ui="$options.name">
    <tipe-template-browser-toolbar
      @filterChange="$emit('filter-change', $event.value)"
      @newTemplate="$emit('new-template', $event.value)"
    />
    <tipe-finder
      :files="templates"
      icon="details"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import FileShape from '@/types/File'
import TipeFinder from '@/components/Finder'
import TipeTemplateBrowserToolbar from './TemplateBrowserToolbar.vue'

export default {
  name: 'TipeTemplateBrowser',
  components: {
    TipeFinder,
    TipeTemplateBrowserToolbar
  },
  props: {
    templates: vueTypes.arrayOf(vueTypes.shape(FileShape))
  }
}
</script>

<style>
[data-tipe-ui='TipeTemplateBrowser'] {
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-rows: 4rem 1fr;
  grid-template-columns: 1fr;
  grid-gap: 0.375rem;
}
</style>
