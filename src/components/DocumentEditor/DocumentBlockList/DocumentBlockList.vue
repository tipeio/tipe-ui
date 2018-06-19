<template>
  <div :data-tipe-ui="$options.name">
    <tipe-document-block
      v-for="(block, i) in blocks"
      :key="i"
      v-bind="block"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import documentBlockShape from '@/types/DocumentBlock'
import TipeDocumentBlock from '@/components/DocumentEditor/DocumentBlock'

export default {
  name: 'TipeDocumentBlockList',
  components: {
    TipeDocumentBlock
  },
  props: {
    blocks: vueTypes.arrayOf(vueTypes.shape(documentBlockShape))
  }
}
</script>
