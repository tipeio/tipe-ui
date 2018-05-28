import { storiesOf } from '@storybook/vue'
import TipeContentBrowser from '@/components/ContentBrowser'

storiesOf('ContentBrowser', module).add('default', () => ({
  components: { TipeContentBrowser },
  // data() {
  //   return {
  //     links: [createLink(), createLink(), createLink()]
  //   }
  // },
  computed: {
    styleObj: () => ({
      height: '500px',
      width: '500px'
    })
  },
  template: '<div :style="styleObj"><tipe-content-browser /></div>'
}))
