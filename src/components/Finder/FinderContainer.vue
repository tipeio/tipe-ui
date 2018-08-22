<template>
  <type-finder-empty v-if="empty" />
  <type-finder-viewer
    v-else
    :files="files"
    :layout="layout"
    :icon="icon"
    :picker="picker"
    :multi="multi"
    @select="files => $emit('select', files)"
  />
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@/interfaces'
import TypeFinderViewer from './FinderViewer.vue'
import TypeFinderEmpty from './FinderEmpty.vue'

export default {
  name: 'TipeFinderContainer',
  components: {
    TypeFinderViewer,
    TypeFinderEmpty
  },
  props: {
    files: vueTypes.arrayOf(vueTypes.shape(interfaces.file)).def([]),
    layout: vueTypes.oneOf(['list', 'grid']).def('list'),
    icon: vueTypes.oneOf(['rectangle', 'square', 'details']).def('rectangle'),
    picker: vueTypes.bool.def(false),
    multi: vueTypes.bool.def(false)
  },
  computed: {
    empty() {
      return this.files.length < 1
    }
  }
}
</script>
