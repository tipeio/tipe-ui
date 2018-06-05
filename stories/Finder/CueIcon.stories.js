import { storiesOf } from '@storybook/vue'

import TipeCueIcon from '@/components/Finder/FileIcon/CueIcon'

const createStyle = () => ({
  height: '18rem',
  width: '18rem'
})

storiesOf('CueIcon', module).add('default', () => ({
  components: { TipeCueIcon },
  computed: {
    styleObject: () => createStyle()
  },
  template: '<div :style="styleObject"><tipe-cue-icon /></div>'
}))
