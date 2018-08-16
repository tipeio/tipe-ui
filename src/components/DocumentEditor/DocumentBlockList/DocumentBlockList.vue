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
import interfaces from '@tipe/tipe-interfaces'
import TipeDocumentBlock from '@/components/DocumentEditor/DocumentBlock'
import TipeDocumentEmptyBlock from '@/components/DocumentEditor/DocumentBlock/DocumentEmptyBlock'

export default {
  name: 'TipeDocumentBlockList',
  components: {
    TipeDocumentBlock,
    TipeDocumentEmptyBlock
  },
  props: {
    blocks: vueTypes.arrayOf(vueTypes.shape(interfaces.documentBlock)).def([])
  }
}
</script>

<style lang="postcss" scoped>
.block-container {
  padding-bottom: 1rem;
}
</style>
