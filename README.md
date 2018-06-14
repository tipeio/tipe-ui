# Tipe UI

Design Link [here](https://projects.invisionapp.com/share/WQHRUSL8S5J#/screens)

## Getting started

### Step 1.

Install dependencies.

```
yarn install
```

### Step 2.

Start storybook.

```
yarn storybook
```

## Components

### Button

The Button component currently supports `size`, `outline`, and `color` props.

* Size
  * Type: String
  * Valid Props: `small`, `medium`, `large`
  * Default Value: `medium`
* Color
  * Type: String
  * Valid Props: `purple`, `dark-purple`, `danger`, `gray`
  * Default: `purple`
* Outline
  * Type: Boolean
  * Default: false

**Click Event**

A tipe button takes a click attribute set equal to a method, once clicked, the event will be emitted to the parent.

Example

```
<tipe-button outline @click="action">Outline Button</tipe-button>
```

### TipeImage

The TipeImage component currently supports `url` and `alt`.

* url
  * Type: String
  * Default Value: `''`
* alt
  * Type: String
  * Default: `''`

Example

```
<tipe-image url="http://placekitten.com/200/300"  alt="a kitten" />
```

### TipeIcon

The TipeImage component currently supports `icon`. See inside `src/icons` for supported icons.

* icon
  * Type: String
  * Default Value: `''`

Example

```
<tipe-icon icon="plus" />
```

### Sidebar

Used as the main navigation between pages.

_:props_

:links - [{
icon: String,
label: String,
url: String,
active: boolean
}]

Example

```
<tipe-sidebar
  :links="[
    {
      icon: 'content-icon',
      label: 'content,
      url: '/content'
    },
    {
      icon: 'media-icon',
      label: 'media'
      url: '/media'
      active: true
    }
  ]"
/>
```

### TipeSelect

The TipeSelect component supports `label`, `placeholder`, `options`, `value`, and `disabled`

`label` is required
`disabled` defaults to false
`options` is required and must be an array of the `SelectOptionShape`
`placeholder` is optional, if no placeholder is provided, the first select option will be selected

Emits an onchange event to the parent with the selected option such as `{value: 'member', label: 'Member'}`

Example

```
  <tipe-select
    :options="options"
    class="role"
    label="Role"
    @change="onChange" />
```

### TipeSwitch

The TipeSwitch currently supports `label`, `value`, `name`, and `disabled`.

`value` and `disabled` default to `false`
`label` and `name` are required

Example

In the parent component `Settings`:

```
<template>
<tipe-switch
  :value="backup"
  name="backup"
  label="Backup"
  @change="onChangeBackup" />
</template>
<script>
...
export default {
  ...
  data() {
    return { sharing: false, backup: true }
  },
  methods: {
    onChangeBackup(val) {
      this.backup = val
    }
  }
}
</script>
```

### TipeTextInput

The TipeTextInput component supports `name`, `label`, `value`, `placeholder`, `status`, `disabled`, `waiting`, `size`, and `tabindex`.

`label` is used as the `id` on the `<input>` and the `<label>` in TipeField will have a `for` attribute set to this `label` value
`disabled` defaults to false, if true, the cursor will be set to `not-allowed` and the input won't be interactive
`waiting` defaults to false, if true, the cursor will be set to `wait` and the input won't be interactive
`value`, `placeholder`, and `name` are type string
`status` is one of `'error', 'success', 'warning', ''` and defaults to `''`
`size` is one of `'small', 'medium', 'large'` anf defaults to `medium`
`tabindex` type number

Emits change, focus, blur, and click events to the parent.

`status` and `size` will add different stylings to the `<input>`

Example

```
<tipe-text-input label="Name" placeholder="Type your name here" size="large"/>
```

### TipeField

The TipeSelect component supports `label`, `placeholder`, `options`, `value`, and `disabled`

`label` is required
`disabled` defaults to false
`options` is required and must be an array of the `SelectOptionShape`
`placeholder` is optional, if no placeholder is provided, the first select option will be selected

Emits an onchange event to the parent with the selected option such as `{value: 'member', label: 'Member'}`

Example

```
  <tipe-select
    :options="options"
    class="role"
    label="Role"
    @change="onChange" />
```
