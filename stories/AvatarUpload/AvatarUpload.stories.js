import { storiesOf } from '@storybook/vue'

import AvatarUpload from '../../src/components/AvatarUpload'

storiesOf('Avatar Upload', module).add('avatar upload', () => ({
  components: { AvatarUpload },
  template: '<avatar-upload />'
}))
