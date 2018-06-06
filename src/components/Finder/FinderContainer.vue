<template>
  <type-finder-empty v-if="empty" />
  <type-finder-viewer
    v-else
    :files="files"
    :layout="layout"
    :icon="icon"
  />
</template>

<script>
import vueTypes from 'vue-types'
import FileShape from '@/types/File'
import TypeFinderViewer from './FinderViewer.vue'
import TypeFinderEmpty from './FinderEmpty.vue'

export default {
  name: 'TipeFinderContainer',
  components: {
    TypeFinderViewer,
    TypeFinderEmpty
  },
  props: {
    files: vueTypes.arrayOf(vueTypes.shape(FileShape)).def([]),
    layout: vueTypes.oneOf(['list', 'grid']).def('list'),
    icon: vueTypes.oneOf(['rectangle', 'square', 'details']).def('rectangle')
  },
  computed: {
    empty() {
      return this.files.length < 1
    }
  }
}
</script>
