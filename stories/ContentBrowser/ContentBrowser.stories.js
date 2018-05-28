import { storiesOf } from '@storybook/vue'
import linkMock from '@/mocks/Link'
import fileMock from '@/mocks/File'
import TipeContentBrowser from '@/components/ContentBrowser'

storiesOf('ContentBrowser', module).add('default', () => ({
  components: { TipeContentBrowser },
  computed: {
    styleObj: () => ({
      height: '500px',
      width: '500px'
    }),
    breadcrumbLinks: () => [linkMock(), linkMock(), linkMock()],
    documents: () => [
      fileMock({ type: 'document' }),
      fileMock({ type: 'document' }),
      fileMock({ type: 'document' }),
      fileMock({ type: 'document' }),
      fileMock({ type: 'document' }),
      fileMock({ type: 'document' })
    ],
    folders: () => [
      fileMock({ type: 'folder' }),
      fileMock({ type: 'folder' }),
      fileMock({ type: 'folder' }),
      fileMock({ type: 'folder' }),
      fileMock({ type: 'folder' }),
      fileMock({ type: 'folder' }),
      fileMock({ type: 'folder' }),
      fileMock({ type: 'folder' })
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
