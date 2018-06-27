<template>
  <div :data-tipe-ui="$options.name">
    <tipe-document-name-input :value="document.name"/>
    <tipe-tabs>
      <tipe-tabs-panel label="Page Content">
        <tipe-scrollable>
          <div class="block-list-container">
            <tipe-document-block-list
              :blocks="document.blocks"
              :options="options"
            />
          </div>
        </tipe-scrollable>
      </tipe-tabs-panel>
      <tipe-tabs-panel label="API">
        <div>API</div>
      </tipe-tabs-panel>
    </tipe-tabs>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import blockOptionShape from '@/types/BlockOption'
import documentShape from '@/types/Document'
import TipeDocumentBlockList from './DocumentBlockList'
import TipeDocumentNameInput from './DocumentNameInput'
import TipeTabs from '@/components/Tabs'
import TipeTabsPanel from '@/components/TabsPanel'
import TipeScrollable from '@/components/Scrollable'

export default {
  name: 'TipeDocumentEditor',
  components: {
    TipeDocumentBlockList,
    TipeDocumentNameInput,
    TipeTabs,
    TipeTabsPanel,
    TipeScrollable
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(blockOptionShape)),
    document: vueTypes.shape(documentShape)
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentEditor'] {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.block-list-container {
  padding-top: 2rem;
  padding-bottom: 10rem;
}
</style>
