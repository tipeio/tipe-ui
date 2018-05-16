import { storiesOf } from '@storybook/vue'

import TipeProfileImage from '../../src/components/ProfileImage.vue'

storiesOf('Profile Image', module).add('default', () => ({
  components: { TipeProfileImage },
  template: '<tipe-profile-image>😀 😎 👍 💯</tipe-profile-image>'
}))
