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
