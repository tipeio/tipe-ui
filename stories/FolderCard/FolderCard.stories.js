import { storiesOf } from '@storybook/vue'
import TipeFolderCard from '@/components/FolderCard'
import faker from 'faker'

const createFile = () => ({
  type: 'folder',
  label: faker.lorem.words(faker.random.number({ min: 1, max: 3 }))
})

const createManyFiles = (num = 10) => {
  const files = []
  for (var i = 0; i < num; i++) files.push(createFile())

  return files
}

storiesOf('FolderCard', module)
  .add('empty', () => ({
    components: { TipeFolderCard },
    computed: {
      styleObject() {
        return {
          height: '500px',
          width: '500px'
        }
      }
    },
    template: '<div :style="styleObject"><tipe-folder-card /></div>'
  }))
  .add('not empty', () => ({
    components: { TipeFolderCard },
    computed: {
      files() {
        return createManyFiles()
      },
      styleObject() {
        return {
          height: '500px',
          width: '500px'
        }
      }
    },
    template:
      '<div :style="styleObject"><tipe-folder-card :files="files" /></div>'
  }))
