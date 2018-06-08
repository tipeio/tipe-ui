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
`placeholder` is optional, but `value` must be initialized to an empty string for the `placeholder` to appear
`value` is required

Example

In the parent component: Form

```
<template>
<tipe-select
  :options="options"
  :value="roleValue"
  class="role"
  label="Role"
  @change="onChangeRole" />
</template>

<script>
...
export default {
  name: 'TipeForm',
  components: {
    TipeSelect
  },
  data() {
    return {
      roleValue: 'member', // member will be selected as a default
    }
  },
  methods: {
    onChangeRole(val) {
      this.roleValue = val
    },
  }
}
</script>
```
