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
          :block="block"
          @change="handleChange"
        />
      </div>
    </template>
    <tipe-document-empty-block v-else/>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@/interfaces'
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
  },
  methods: {
    handleChange(block) {
      this.$emit('change', block)
    }
  }
}
</script>

<style lang="postcss" scoped>
.block-container {
  padding-bottom: 1rem;
}
</style>
