<template>
  <div :data-tipe-ui="$options.name">
    <tipe-document-block-list
      :blocks="blocks"
      :options="options"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import blockOptionShape from '@/types/BlockOption'
import documentBlockShape from '@/types/DocumentBlock'
import TipeDocumentBlockList from './DocumentBlockList'

export default {
  name: 'TipeDocumentEditor',
  components: {
    TipeDocumentBlockList
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(blockOptionShape)),
    blocks: vueTypes.arrayOf(vueTypes.shape(documentBlockShape))
  }
}
</script>
