import { configure } from '@storybook/vue'
import '../src/styles/globals.css'

// automatically import all files ending in *.stories.js
const stories = require.context('../stories/', true, /.stories.js$/)

function loadStories() {
  stories.keys().forEach(filename => stories(filename))
}

configure(loadStories, module);
