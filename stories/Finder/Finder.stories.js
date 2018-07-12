import { storiesOf } from '@storybook/vue'
import { mocks } from '@tipe/tipe-test-utils'

import TipeFinder from '@/components/Finder'

const createStyle = () => ({
  height: '500px',
  width: '700px'
})

const files = mocks.createManyMocks(mocks.file, 20)

storiesOf('Finder', module)
  .add('empty', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template: '<tipe-finder :style="styleObject" />'
  }))
  .add('list, rectangle', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template: '<tipe-finder :style="styleObject" :files="files" />'
  }))
  .add('grid, rectangle', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template:
      '<tipe-finder layout="grid" :style="styleObject" :files="files" />'
  }))
  .add('list, square', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template:
      '<tipe-finder :style="styleObject" :files="files" icon="square" />'
  }))
  .add('grid, square', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template:
      '<tipe-finder layout="grid" :style="styleObject" :files="files" icon="square" />'
  }))
  .add('list, details', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template:
      '<tipe-finder :style="styleObject" :files="files" icon="details"/>'
  }))
  .add('grid, details', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template:
      '<tipe-finder :style="styleObject" :files="files" icon="details" layout="grid"/>'
  }))
