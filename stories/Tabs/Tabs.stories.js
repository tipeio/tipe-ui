import { storiesOf } from '@storybook/vue'
import TipeTabs from '@/components/Tabs'
import TipeTabsPanel from '@/components/TabsPanel'

storiesOf('Tabs', module).add('default', () => ({
  components: { TipeTabs, TipeTabsPanel },
  computed: {
    styleObj() {
      return {
        height: '500px',
        width: '500px'
      }
    }
  },
  template: `
      <div :style="styleObj">
        <tipe-tabs>
          <tipe-tabs-panel
            :active="false"
            icon="files"
            label="Documents"
          >
          </tipe-tabs-panel>
          <tipe-tabs-panel
            :active="true"
            icon="folder"
            label="Folders"
          >
          </tipe-tabs-panel>
          <tipe-tabs-panel
            :active="false"
            icon="image"
            label="Media"
          >
          </tipe-tabs-panel>
        </tipe-tabs>
      </div>`
}))
