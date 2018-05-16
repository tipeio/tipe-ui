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

### TipeButton

The TipeButton component currently supports `size`, `outline`, and `color` props.

* Size
  * Type: String
  * Valid Props: `small`, `medium`, `large`
  * Default Value: `medium`
* Color
  * Type: String
  * Valid Props: `purple`, `dark-purple`, `danger`
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
