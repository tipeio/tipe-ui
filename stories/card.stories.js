import { storiesOf } from '@storybook/vue'

import FolderCard from '../src/components/FolderCard.vue'
import DocCard from '../src/components/DocCard.vue'
import LayoutCard from '../src/components/LayoutCard.vue'

storiesOf('Cards', module)
  .add('Folder Card', () => ({
    components: { FolderCard },
    template: '<folder-card>Hero Sections</folder-card>'
  }))
  .add('Layout Card with a Folder Card inside', () => ({
    components: { LayoutCard, FolderCard },
    template: '<layout-card><h1>Hello World</h1></layout-card>'
  }))
