import { storiesOf } from '@storybook/vue'
import faker from 'faker'

import TipeFinder from '@/components/Finder'

const createStyle = () => ({
  height: '500px',
  width: '500px'
})

const fileTypes = ['document', 'folder']

const createFile = () => ({
  label: faker.lorem.words(3),
  type: fileTypes[Math.floor(Math.random() * fileTypes.length)]
})

const createManyFiles = (num = 10) => {
  const files = []

  while (files.length < num) files.push(createFile())

  return files
}

const files = createManyFiles(100)

storiesOf('Finder', module)
  .add('empty', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template: '<tipe-finder :style="styleObject" />'
  }))
  .add('list', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template: '<tipe-finder :style="styleObject" :files="files" />'
  }))
  .add('grid', () => ({
    components: { TipeFinder },
    computed: {
      styleObject: () => createStyle(),
      files: () => files
    },
    template:
      '<tipe-finder layout="grid" :style="styleObject" :files="files" />'
  }))
