<template>
  <tipe-card :data-tipe-ui="$options.name">
    <div :class="$style.layout">
      <div :class="$style.header">
        <div :class="$style.title">Documents</div>
        <tipe-button
          size="small"
          icon-before="plus"
        >
          Add Document
        </tipe-button>
      </div>
      <div :class="$style.body">
        <div :class="$style.scrollable">
          <tipe-finder
            :files="files"
            layout="grid"
          />
        </div>
      </div>
    </div>
  </tipe-card>
</template>

<script>
import vueTypes from 'vue-types'
import TipeCard from '@/components/LayoutCard'
import TipeButton from '@/components/Button'
import TipeFinder from '@/components/Finder'

export default {
  name: 'TipeDocumentCard',
  components: {
    TipeCard,
    TipeButton,
    TipeFinder
  },
  props: {
    files: vueTypes.array
  }
}
</script>

<style lang="postcss" module>
.layout {
  height: 100%;
  width: 100%;
  padding: 0 1.8rem 1.8rem 1.2rem;
  display: grid;
  grid-template-rows: 5rem 1fr;
  box-sizing: border-box;
}

.header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.body {
  position: relative;
  overflow: hidden;
}

/* hide scrollbar */
.scrollable {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
}

.title {
  font-size: 0.75rem;
  color: var(--text-gray);
  letter-spacing: 0.00625rem;
  text-transform: uppercase;
}
</style>
