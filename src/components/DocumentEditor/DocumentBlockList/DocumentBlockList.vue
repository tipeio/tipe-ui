<template>
  <div :data-tipe-ui="$options.name">
    <div
      v-for="(block, i) in blocks"
      :key="i"
      class="block-container"
    >
      <tipe-document-block
        :options="options"
        :block="block"
      />
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import blockOptionShape from '@/types/BlockOption'
import documentBlockShape from '@/types/DocumentBlock'
import TipeDocumentBlock from '@/components/DocumentEditor/DocumentBlock'

export default {
  name: 'TipeDocumentBlockList',
  components: {
    TipeDocumentBlock
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(blockOptionShape)),
    blocks: vueTypes.arrayOf(vueTypes.shape(documentBlockShape))
  }
}
</script>

<style lang="postcss" scoped>
.block-container {
  padding-bottom: 2rem;
}
</style>
