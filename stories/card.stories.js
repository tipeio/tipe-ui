import { storiesOf } from '@storybook/vue'

import FolderCard from '../src/components/FolderCard.vue'
import DocCard from '../src/components/DocCard.vue'
import LayoutCard from '../src/components/LayoutCard.vue'

storiesOf('Cards', module)
  .add('Folder Card', () => ({
    components: { FolderCard },
    template: '<folder-card>Hero Sections</folder-card>'
  }))
  .add('Doc Card default', () => ({
    components: { DocCard },
    template: '<doc-card>About</doc-card>'
  }))
  .add('Doc Card recent', () => ({
    components: { DocCard },
    template: '<doc-card recent>About</doc-card>'
  .add('Layout Card', () => ({
    components: { LayoutCard, FolderCard },
    template:
      '<layout-card><folder-card>Hero Sections</folder-card></layout-card>'
  }))
