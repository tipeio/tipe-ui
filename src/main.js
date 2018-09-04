import Vue from 'vue'
import { components } from './components'

// Globally register all components.
Object.keys(components).forEach(name => Vue.component(name, components[name]))
