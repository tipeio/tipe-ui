# **Rendering**

* [ ] Components render as designed - check storybook
* [ ] Storybook stories display all states

# **Behaviour**

* [ ] Components behave as designed - check storybook

# **Code Style**

* [ ] The file has less than 200 line.
* [ ] All functions are less than 25 lines long, and do **one** thing.
* [ ] Variable names are descriptive (says what it is).
* [ ] Components are only concerned with presentation.
  * methods - do not transform data
  * computed - only transforms data for presentation purposes, and logic is simple and concise
  * data - only contains properties directly related to presentation logic
* [ ] Tipe components are prefixed 'Tipe', exp 'TipeButton'
* [ ] Tipe components are refrenced in <templates> with kebab-case, exp 'tipe-button'
* [ ] Component name is CamelCase, exp { name: 'TipeButton' }
* [ ] Components have `data-tipe-ui="$options.name"` on the root element.

# Tests

**<template>**

* [ ] tests `data-tipe-ui` on root is as expected
* [ ] snapshot test - should render to string

**:props**

* [ ] all props are tested

**@events**

* [ ] all events are tested

# README

**:props**

* [ ] all props are clearly described and easy to understand

**@events**

* [ ] all events are clearly described and easy to understand
