<template>
  <div :data-tipe-ui="$options.name">
    <div :class="layoutClass">
      <tipe-file-icon
        v-for="({ file, selected }, i) in fileIcons"
        :key="i"
        :file="file"
        :type="icon"
        :picker="picker"
        :selected="selected"
        class="item"
        @click="handleSelect(file)"
      />
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@/interfaces'

import TipeFileIcon from './FileIcon'

export default {
  name: 'TipeFinder',
  components: {
    TipeFileIcon
  },
  props: {
    files: vueTypes.arrayOf(vueTypes.shape(interfaces.file)).def([]),
    layout: vueTypes.oneOf(['list', 'grid']).def('list'),
    icon: vueTypes.oneOf(['rectangle', 'square', 'details']).def('rectangle'),
    picker: vueTypes.bool.def(false),
    multi: vueTypes.bool.def(false)
  },
  data() {
    return {
      selected: []
    }
  },
  computed: {
    layoutClass() {
      return {
        layout: true,
        [`${this.layout}-${this.icon}`]: true
      }
    },
    fileIcons() {
      return this.files.map(file => ({
        selected: this.isSelected(file),
        file: file
      }))
    }
  },
  methods: {
    handleSelect(file) {
      this.selectFile(file)
      this.$emit('select', this.selected)
    },
    selectFile(file) {
      if (this.multi) {
        if (!this.isSelected(file)) {
          this.selected.push(file)
        }
      } else {
        this.selected = [file]
      }
    },
    isSelected(file) {
      const byId = id => file => file.id === id
      return this.selected.findIndex(byId(file.id)) > -1
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeFinder'] {
  height: 100%;
  width: 100%;
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

.layout.list-details,
.layout.grid-details {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
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
  grid-gap: 0.8rem;
}
</style>
