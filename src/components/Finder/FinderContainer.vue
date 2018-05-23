<template>
  <type-finder-empty v-if="empty" />
  <type-finder-viewer
    v-else
    :files="files"
    :layout="layout"
  />
</template>

<script>
import vueTypes from 'vue-types'
import FileType from './FileType.js'
import TypeFinderViewer from './FinderViewer.vue'
import TypeFinderEmpty from './FinderEmpty.vue'

export default {
  name: 'TipeFinderContainer',
  components: {
    TypeFinderViewer,
    TypeFinderEmpty
  },
  props: {
    files: vueTypes.arrayOf(FileType).def([]),
    layout: vueTypes.oneOf(['list', 'grid']).def('list')
  },
  computed: {
    empty() {
      return this.files.length < 1
    }
  }
}
</script>
