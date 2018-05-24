import { configure, addDecorator } from '@storybook/vue'
import centered from '@storybook/addon-centered'
import '../src/styles/globals.css'

// automatically import all files ending in *.stories.js
const stories = require.context('../stories/', true, /.stories.js$/)

function loadStories() {
  stories.keys().forEach(filename => stories(filename))
}

addDecorator(centered)
configure(loadStories, module)
