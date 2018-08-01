import { storiesOf } from '@storybook/vue'

import FolderCard from '@/components/FolderCard'
import DocCard from '@/components/DocCard'
import TipeCard from '@/components/Card'

storiesOf('Cards', module)
  .add('folder card', () => ({
    components: { FolderCard },
    template: '<folder-card>Hero Sections</folder-card>'
  }))
  .add('layout card with text', () => ({
    components: { TipeCard, FolderCard },
    template: '<tipe-card><h1>Hello World</h1></tipe-card>'
  }))
  .add('doc card default', () => ({
    components: { DocCard },
    template: '<doc-card>About</doc-card>'
  }))
  .add('doc card recent', () => ({
    components: { DocCard },
    template: '<doc-card recent>About</doc-card>'
  }))
