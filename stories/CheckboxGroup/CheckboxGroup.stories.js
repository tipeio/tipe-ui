import { storiesOf } from '@storybook/vue'

import TipeCheckbox from '../../src/components/Checkbox'
import TipeCheckboxGroup from '../../src/components/CheckboxGroup'

const style = () => ({
  width: '300px'
})

storiesOf('Checkbox Group', module)
  .add('default checkbox group', () => ({
    components: { TipeCheckbox, TipeCheckboxGroup },
    computed: { style },
    data() {
      return {
        options: [
          { label: 'Javascript', value: 'javascript', checked: true },
          { label: 'Python', value: 'python', checked: false }
        ],
        name: 'languages'
      }
    },
    template: `
      <div :style="style"><tipe-checkbox-group
      :name="name"
      :options="options"
    >
		<template slot-scope="{option}">
      <tipe-checkbox
        v-for="option in options"
        :key="option.value"
				:name="name"
				:label="option.label"
				:value="option.value"
				:checked="option.checked"
			/>
		</template>
    </tipe-checkbox-group></div>
      `
  }))
  .add('large checkbox group', () => ({
    components: { TipeCheckbox, TipeCheckboxGroup },
    computed: { style },
    data() {
      return {
        options: [
          { label: 'Javascript', value: 'javascript', checked: true },
          { label: 'Python', value: 'python', checked: false }
        ],
        name: 'languages'
      }
    },
    template: `
      <div :style="style"><tipe-checkbox-group
      :name="name"
      :options="options"
    >
		<template slot-scope="{option}">
      <tipe-checkbox
        v-for="option in options"
        :key="option.value"
        size="large"
        :name="name"
				:label="option.label"
				:value="option.value"
				:checked="option.checked"
			/>
		</template>
    </tipe-checkbox-group></div>
      `
  }))
  .add('small checkbox group', () => ({
    components: { TipeCheckbox, TipeCheckboxGroup },
    computed: { style },
    data() {
      return {
        options: [
          { label: 'Javascript', value: 'javascript', checked: true },
          { label: 'Python', value: 'python', checked: false }
        ],
        name: 'languages'
      }
    },
    template: `
      <div :style="style"><tipe-checkbox-group
      :name="name"
      :options="options"
    >
		<template slot-scope="{option}">
      <tipe-checkbox
        v-for="option in options"
        size="small"
        :key="option.value"
				:name="name"
				:label="option.label"
				:value="option.value"
				:checked="option.checked"
			/>
		</template>
    </tipe-checkbox-group></div>
      `
  }))
