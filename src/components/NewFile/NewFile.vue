<template>
  <tipe-tabs :data-tipe-ui="$options.name">
    <tipe-tabs-panel
      label="Documents"
      icon="files"
    >
      <tipe-new-document :templates="templates"/>
    </tipe-tabs-panel>
    <tipe-tabs-panel
      label="Folders"
      icon="folder"
    >
      <tipe-new-folder :folders="folders"/>
    </tipe-tabs-panel>
  </tipe-tabs>
</template>

<script>
import vueTypes from 'vue-types'
import FileShape from '@/types/File'
import TipeTabs from '@/components/Tabs'
import TipeTabsPanel from '@/components/TabsPanel'
import TipeNewDocument from './NewDocument.vue'
import TipeNewFolder from './NewFolder.vue'

export default {
  name: 'TipeNewFile',
  components: {
    TipeTabs,
    TipeTabsPanel,
    TipeNewDocument,
    TipeNewFolder
  },
  props: {
    templates: vueTypes.arrayOf(vueTypes.shape(FileShape)),
    folders: vueTypes.arrayOf(vueTypes.shape(FileShape))
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeNewFile'] {
  height: 100%;
  width: 100%;
}
</style>
