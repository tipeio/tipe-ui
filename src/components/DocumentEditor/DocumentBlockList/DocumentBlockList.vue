<template>
  <div :data-tipe-ui="$options.name">
    <template
      v-if="blocks.length"
    >
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
    </template>
    <tipe-document-empty-block
      v-else
      :options="options"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import blockOptionShape from '@/types/BlockOption'
import documentBlockShape from '@/types/DocumentBlock'
import TipeDocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import TipeDocumentEmptyBlock from '@/components/DocumentEditor/DocumentBlock/DocumentEmptyBlock'

export default {
  name: 'TipeDocumentBlockList',
  components: {
    TipeDocumentBlock,
    TipeDocumentEmptyBlock
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(blockOptionShape)),
    blocks: vueTypes.arrayOf(vueTypes.shape(documentBlockShape)).def([])
  }
}
</script>

<style lang="postcss" scoped>
.block-container {
  padding-bottom: 2rem;
}
</style>
