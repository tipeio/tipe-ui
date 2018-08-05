<template>
  <tipe-document-block-list
    :blocks="document.blocks"
    :options="options"
  />
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeDocumentBlockList from './DocumentBlockList'
import TipeDocumentNameInput from './DocumentNameInput'

export default {
  name: 'TipeDocumentEditor',
  components: {
    TipeDocumentBlockList,
    TipeDocumentNameInput
  },
  props: {
    document: vueTypes.shape(interfaces.document)
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
