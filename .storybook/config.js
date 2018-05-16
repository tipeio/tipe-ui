import { configure } from '@storybook/vue'
import '../src/styles/globals.css'

// automatically import all files ending in *.stories.js
const components = require.context('../stories/components/', true, /.stories.js$/)
const compositions = require.context('../stories/compositions/', true, /.stories.js$/)

function loadStories() {
  components.keys().forEach(filename => components(filename))
  compositions.keys().forEach(filename => compositions(filename))
}

configure(loadStories, module);
