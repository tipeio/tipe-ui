import { storiesOf } from '@storybook/vue'

import FolderCard from '../src/components/FolderCard.vue'

storiesOf('Cards', module).add('Folder Card', () => ({
  components: { FolderCard },
  template: '<folder-card>Hero Sections</folder-card>'
}))
