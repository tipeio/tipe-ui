<template>
  <div :data-tipe-ui="$options.name">
    <tipe-document-name-input
      :value="document.name"
      @change="handleChangeName"
    />
    <tipe-document-block-list
      :blocks="blocks"
      :disabled="disabled"
      @change="handleChangeBlock"
    />
  </div>
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
    isDisabled: props => props.disabled || props.document.name === '',
    blocks(props) {
      return props.document.blocks.map(block => ({
        ...block,
        disabled: this.isDisabled
      }))
    }
  },
  methods: {
    handleChange(document) {
      this.$emit('change', document)
    },
    handleChangeName(name) {
      this.handleChange({ name })
    },
    handleChangeBlock(block) {
      this.handleChange({ blocks: [block] })
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentEditor'] {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 8rem 1fr;
  grid-template-columns: 100%;
  overflow: hidden;
}

.block-list-container {
  padding-top: 2rem;
  padding-bottom: 10rem;
}
</style>
