export function selectClick(select) {
  return !select.open
}

export function selectChange(select, val) {
  select.$emit('change', val)
  return val
}

export function selectKeyup(select) {
  if (!select.open) {
  } else if (select.activeIndex === 0) return select.options.length - 1
  else return (select.activeIndex -= 1)
}

export function selectKeydown(select) {
  if (!select.open) {
  } else if (select.activeIndex === select.options.length - 1) return 0
  else return (select.activeIndex += 1)
}

export function selectEnter(select) {
  let selectOptions = {}
  if (!select.options) {
  } else if (!select.open) {
    selectOptions.open = true
    return selectOptions
  } else {
    selectChange(select, select.options[select.activeIndex])
    selectOptions.open = false
    selectOptions.activeIndex = -1
    return selectOptions
  }
}

export function findSelected(selected) {
  if (selected.selectedValue.label) return selected.selectedValue.label
  if (selected.placeholder) return selected.placeholder
  if (selected.options) return selected.options[0].label
  return 'Please provide select options'
}

export function selectDisabled(selected) {
  if (selected.waiting || selected.disabled) return true
  return false
}
