<template>
  <div
    :data-tipe-ui="$options.name"
  >
    <div class="margin">
      <tipe-document-block-margin
        :options="options"
      />
    </div>
    <div class="body">
      Please add a block.
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'
import TipeDocumentBlockMargin from './DocumentBlockMargin'

export default {
  name: 'TipeDocumentEmptyBlock',
  components: {
    TipeDocumentBlockMargin
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(interfaces.blockOption))
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentEmptyBlock'] {
  display: grid;
  grid-template-areas: 'margin body';
  grid-template-columns: 4.25rem 1fr;
  grid-template-rows: auto;
  border-radius: 0.1875rem;
  box-sizing: border-box;
  width: 100%;
  min-width: 20rem;
}

.margin {
  grid-area: margin;
}

.body {
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--midPurple);
}
</style>
