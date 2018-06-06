import { storiesOf } from '@storybook/vue'
import fileMock from '@/mocks/File'

import TipeFileIconDetails from '@/components/Finder/FileIcon/FileIconDetails'

const createStyle = () => ({
  height: '18rem',
  width: '30rem'
})

storiesOf('FileIconDetails', module).add('default', () => ({
  components: { TipeFileIconDetails },
  computed: {
    styleObject: () => createStyle(),
    file: () => fileMock()
  },
  template:
    '<div :style="styleObject"><tipe-file-icon-details :file="file" /></div>'
}))
