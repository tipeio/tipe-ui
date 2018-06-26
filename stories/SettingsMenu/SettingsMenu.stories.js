import { storiesOf } from '@storybook/vue'

import SettingsMenu from '../../src/components/SettingsMenu'

const style = () => ({
  width: '191px'
})
storiesOf('Settings Menu', module).add('settings menu', () => ({
  components: { SettingsMenu },
  computed: { style },
  template: '<div :style="style"><settings-menu/></div>'
}))
