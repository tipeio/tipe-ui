import { storiesOf } from '@storybook/vue'
import { mocks } from '@tipe/tipe-test-utils'
import TipeContentBrowser from '@/components/ContentBrowser'

storiesOf('ContentBrowser', module).add('default', () => ({
  components: { TipeContentBrowser },
  computed: {
    styleObj: () => ({
      height: '500px',
      width: '500px'
    }),
    breadcrumbLinks: () => [mocks.link(), mocks.link(), mocks.link()],
    documents: () => [
      mocks.file({ type: 'document' }),
      mocks.file({ type: 'document' }),
      mocks.file({ type: 'document' }),
      mocks.file({ type: 'document' }),
      mocks.file({ type: 'document' }),
      mocks.file({ type: 'document' })
    ],
    folders: () => [
      mocks.file({ type: 'folder' }),
      mocks.file({ type: 'folder' }),
      mocks.file({ type: 'folder' }),
      mocks.file({ type: 'folder' }),
      mocks.file({ type: 'folder' }),
      mocks.file({ type: 'folder' }),
      mocks.file({ type: 'folder' }),
      mocks.file({ type: 'folder' })
    ]
  },
  template: `
    <div :style="styleObj">
      <tipe-content-browser
        :breadcrumbLinks="breadcrumbLinks"
        :documents="documents"
        :folders="folders"
      />
    </div>`
}))
