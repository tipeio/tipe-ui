import { storiesOf } from '@storybook/vue'
import fileMock from '@/mocks/File'

import TipeFileIconSquare from '@/components/Finder/FileIcon/FileIconSquare'

const createStyle = () => ({
  height: '18rem',
  width: '18rem'
})

storiesOf('FileIconSquare', module).add('default', () => ({
  components: { TipeFileIconSquare },
  computed: {
    styleObject: () => createStyle(),
    file: () => fileMock()
  },
  template:
    '<div :style="styleObject"><tipe-file-icon-square :file="file" /></div>'
}))
