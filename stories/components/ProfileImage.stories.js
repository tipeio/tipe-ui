import { storiesOf } from '@storybook/vue'

import TipeProfileImage from '../../src/components/ProfileImage.vue'

storiesOf('Profile Image', module)
  .add('no profile image', () => ({
    components: { TipeProfileImage },
    template: '<tipe-profile-image />'
  }))
  .add('has profile image', () => ({
    components: { TipeProfileImage },
    template: '<tipe-profile-image url="http://placekitten.com/200/300" />'
  }))
