<template>
  <tipe-document-block-list
    :data-tipe-ui="$options.name"
    :blocks="blocks"
    :options="options"
    :disabled="disabled"
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
    document: vueTypes.shape(interfaces.document),
    disabled: vueTypes.bool.def(false)
  },
  computed: {
    blocks: props =>
      props.document.blocks.map(block => ({
        ...block,
        disabled: props.disabled
      }))
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
