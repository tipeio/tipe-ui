import { storiesOf } from '@storybook/vue'

import FolderCard from '../src/components/FolderCard'
import DocCard from '../src/components/DocCard'
import LayoutCard from '../src/components/LayoutCard'

storiesOf('Cards', module)
  .add('folder card', () => ({
    components: { FolderCard },
    template: '<folder-card>Hero Sections</folder-card>'
  }))
  .add('layout card with text', () => ({
    components: { LayoutCard, FolderCard },
    template: '<layout-card><h1>Hello World</h1></layout-card>'
  }))
  .add('doc card default', () => ({
    components: { DocCard },
    template: '<doc-card>About</doc-card>'
  }))
  .add('doc card recent', () => ({
    components: { DocCard },
    template: '<doc-card recent>About</doc-card>'
  }))
