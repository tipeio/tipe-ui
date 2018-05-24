import { storiesOf } from '@storybook/vue'
import TipeDocumentCard from '@/components/DocumentCard'
import faker from 'faker'

const createFile = () => ({
  type: 'document',
  label: faker.lorem.words(faker.random.number({ min: 1, max: 3 }))
})

const createManyFiles = (num = 10) => {
  const files = []
  for (var i = 0; i < num; i++) files.push(createFile())

  return files
}

storiesOf('DocumentCard', module)
  .add('empty', () => ({
    components: { TipeDocumentCard },
    computed: {
      styleObject() {
        return {
          height: '500px',
          width: '500px'
        }
      }
    },
    template: '<div :style="styleObject"><tipe-document-card /></div>'
  }))
  .add('not empty', () => ({
    components: { TipeDocumentCard },
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
      '<div :style="styleObject"><tipe-document-card :files="files" /></div>'
  }))
