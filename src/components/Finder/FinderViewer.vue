<template>
  <div
    :data-tipe-ui="$options.name"
    class="viewer"
  >
    <div class="scrollable">
      <div :class="layoutClass">
        <type-file-icon
          v-for="(file, i) in files"
          :key="i"
          :file="file"
          :type="icon"
          class="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import FileType from './FileType'

import TypeFileIcon from './FileIcon'

export default {
  name: 'TipeFinder',
  components: {
    TypeFileIcon
  },
  props: {
    files: vueTypes.arrayOf(FileType).def([]),
    layout: vueTypes.oneOf(['list', 'grid']).def('list'),
    icon: vueTypes.oneOf(['rectangle', 'square']).def('rectangle')
  },
  computed: {
    layoutClass() {
      return {
        layout: true,
        [`${this.layout}-${this.icon}`]: true
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.viewer {
  overflow: hidden;
}

/* hide scrollbar */
.scrollable {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  padding-bottom: 1rem;
  box-sizing: content-box;
}

.layout.list-rectangle,
.layout.list-square {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 0.8rem;
}

.layout.grid-rectangle {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  grid-auto-rows: max-content;
  grid-gap: 0.8rem;
}

.layout.grid-square {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: max-content;
  grid-column-gap: 0.8rem;
  grid-row-gap: 1.8rem;
}
</style>
