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

The Button component currently supports `size`, `outline`, `color`, `iconBefore`, and `iconAfter` props.

* Size
  * Type: String
  * Valid Props: `mini`, `small`, `medium`, `large`
  * Default Value: `medium`
* Color
  * Type: String
  * Valid Props: `primary`, `default`, `info`, `success`, `warning`, and `danger`
  * Default: `default` (light gray with dark gray text)
* Outline
  * Type: Boolean
  * Default: false
* Icon
  * provide and icon name to `iconBefore` and or `iconAfter` that is supported by `TipeIcon`
  * `iconBefore` will add an icon to the button before the text
  * `iconAfter` will add an icon to the button after the text
  * you can use both of these at the same time

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

The TipeSelect component supports `type`, `placeholder`, `options`, `defaultSelected`, `color`, and `inputProps`

`type` is a string and the supported types are `button` and `underline`
`options` is an array of the `SelectOptionShape`, a message will render in the select if no options are provided
`placeholder` is optional, if no placeholder is provided, the first select option will be selected
`color` works for selects that are of type `button`. Supported colors are `default`, `primary`, `danger`, `success`, and `warning`.
`defaultSelected` is the `SelectOptionShape`. if you want the select to have a default value use this prop.

Emits an onchange event to the parent with the selected option such as `{value: 'member', label: 'Member'}`

Example

```
  <tipe-select
    :options="options"
    class="role"
    type="button"
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

### TipeTextarea

The TipeTextarea component supports `name`, `value`, `placeholder`, `status`, `disabled`, `waiting`, `size`, and `tabindex`.

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
<tipe-textarea placeholder="Type something here" size="large"/>
```

### TipeField

    name: vueTypes.string,
    field: vueTypes.object,
    label: vueTypes.string.isRequired,
    status: vueTypes.oneOf(['error', 'success', 'warning', '']).def(''),
    errorMessage: vueTypes.string,
    successMessage: vueTypes.string,
    warningMessage: vueTypes.string

The TipeField component supports `name`, `field`, `label`, `status`, `errorMessage`, `successMessage`, and `warningMessage`.

`label` and `name` type string
`field` type object such as `{ label: 'First Name', placeholder: 'What is your first name?', value: '', size: 'large' }`
`status` is one of `'error', 'success', 'warning', ''` and defaults to `''`
`errorMessage`, `successMessage`, and `warningMessage` type string, renders based on corresponding status

Emits change, focus, blur, and click events to the parent with the `event`.

In order for the message to render, `status` must correspond with the type of message. For example, if you want the `errorMessage` to render set the `status` prop to `'error'`.

The label and message will be styled depending on the status type.

`<slot>`: the `field`, `name`, and `status` props will be passed down to the component in the `slot` (in the example below `tipe-text-input` will receive these props)

TipeField can take multiple `slots` or no `slots`

Example

```
<tipe-field :label="field.label" name="firstName" :field="field"><tipe-text-input /></tipe-field>
```

## TipeTestUtils

### Parameters

#### Input: VueComponent

#### Query: (wrapper) => wrapper

### Methods

#### tipeTestUtils.tests.inputs.size(Input)

#### tipeTestUtils.tests.inputs.status(Input)

#### tipeTestUtils.tests.inputs.waiting(Input)

#### tipeTestUtils.tests.inputs.disabled(Input, Query)

#### tipeTestUtils.tests.inputs.events(Input, Query)

### TipeCheckbox

The TipeCheckbox component supports `label`, `checked`, `name`, `value`, `status`, `disabled`, `waiting`, `size`, and `tabindex`.

`label` is used as the `id` on the `<input>` and the `<label>` has a `for` attribute set to the `label` value
`disabled` defaults to false, if true, the cursor will be set to `not-allowed` and the input won't be interactive
`checked` defaults to false
`waiting` defaults to false, if true, the cursor will be set to `wait` and the input won't be interactive
`value`, and `name` are type string
`status` is one of `'error', 'success', 'warning', ''`
`size` is one of `'small', 'medium', 'large'` anf defaults to `medium`
`tabindex` type number

Emits change, focus, blur, and click events to the parent.

`status` and `size` will add different stylings to the `<input>`

Example

```
<tipe-checkbox label="Languages" size="large" name="languages" :checked="true" />
```

### TipeCheckboxGroup

The TipeCheckboxGroup component supports `name`, `tabindex`, `status`, `waiting`, `disabled`, and `options`.

`name` type string
`disabled` defaults to false, if true, the cursor will be set to `not-allowed` and the input won't be interactive
`waiting` defaults to false, if true, the cursor will be set to `wait` and the input won't be interactive
`status` is one of `'error', 'success', 'warning'`
`tabindex` type number
`options` and array of objects of the shape:

```
  {
    label: vueTypes.string.def(''),
    checked: vueTypes.bool.def(false),
    ...inputProps
  }
```

Emits change, focus, blur, and click events to the parent.

`status` will add different stylings group

Example

```
  <tipe-checkbox-group :name="name" :options="options">
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
  </tipe-checkbox-group>
```

### Confirm Modal

The TipeConfirmModal component supports `title`, `subtitle`, and `buttonText`.

`title` is type string and is the title of the modal
`subtitle` is type string and is the subtitle of the modal
`buttonText` is type string and is the button text for the button on the right side of the button

The button on the left hand side is the cancel button.

Emits close, action, and cancel events to the parent.

Example

```
<confirm-modal title="Delete Member?" subtitle="Are you sure you want to delete this member from the member list?" buttonText="DELETE"/>
```
