import { storiesOf } from '@storybook/vue'

import SettingsMenu from '../../src/components/SettingsMenu'

storiesOf('Settings Menu', module).add('settings menu', () => ({
  components: { SettingsMenu },
  template: '<settings-menu/>'
}))
