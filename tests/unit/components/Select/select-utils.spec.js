import { shallowMount } from '@vue/test-utils'
import {
  selectClick,
  selectChange,
  selectKeyup,
  selectKeydown,
  selectEnter,
  findSelected,
  selectDisabled
} from '@/components/Select/select-utils'
import SelectButton from '@/components/Select/SelectButton'

const props = {
  options: [
    { label: 'Owner', value: 'owner' },
    { label: 'Admin', value: 'admin' }
  ],
  activeIndex: 1,
  size: 'large',
  placeholder: 'test',
  color: 'danger'
}
describe('select-utils', () => {
  it('should return the correct open value', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    expect(selectClick(wrapper.vm)).toBe(!wrapper.vm.open)
  })
  it('should return the correct selected val', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    expect(
      selectChange(wrapper.vm, { label: 'Admin', value: 'admin' })
    ).toEqual({
      label: 'Admin',
      value: 'admin'
    })
  })
  it('should emit change event', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    selectChange(wrapper.vm, { label: 'Admin', value: 'admin' })
    expect(wrapper.emitted().change).toBeTruthy()
  })
  it('should return undefined on keyup when dropdown is closed', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    expect(selectKeyup(wrapper.vm)).toBeUndefined()
  })
  it('should return correct value on keyup when active index is 0', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    wrapper.setData({ open: true, activeIndex: 0 })
    expect(selectKeyup(wrapper.vm)).toBe(1)
  })
  it('should return correct value on keyup', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    wrapper.setData({ open: true, activeIndex: 1 })
    expect(selectKeyup(wrapper.vm)).toBe(0)
  })
  it('should return undefined on keydown when dropdown is closed', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    expect(selectKeydown(wrapper.vm)).toBeUndefined()
  })
  it('should return correct value on keydown when active index is the last item', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    wrapper.setData({ open: true, activeIndex: 1 })
    expect(selectKeydown(wrapper.vm)).toBe(0)
  })
  it('should return correct value on keydown', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    wrapper.setData({ open: true, activeIndex: 0 })
    expect(selectKeydown(wrapper.vm)).toBe(1)
  })
  it('should return disabled value', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props, disabled: true }
    })
    expect(selectDisabled(wrapper.vm)).toBe(true)
  })
  it('should return disabled for waiting', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props, waiting: true }
    })
    expect(selectDisabled(wrapper.vm)).toBe(true)
  })
  it('should not be disabled', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    expect(selectDisabled(wrapper.vm)).toBe(false)
  })
  it('should return undefined for no options', async () => {
    const wrapper = shallowMount(SelectButton)
    expect(selectEnter(wrapper.vm)).toBeUndefined()
  })
  it('should return open false when ooen', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    wrapper.setData({ open: true })
    expect(selectEnter(wrapper.vm)).toEqual({ open: false, activeIndex: -1 })
  })
  it('should return a message for no options', async () => {
    const wrapper = shallowMount(SelectButton)
    expect(findSelected(wrapper.vm)).toBe('Please provide select options')
  })
  it('should return a placeholder', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props }
    })
    expect(findSelected(wrapper.vm)).toBe('test')
  })
  it('should return the first option when no placeholder is present', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props, placeholder: '' }
    })
    expect(findSelected(wrapper.vm)).toBe('Owner')
  })
  it('should return the the selected value', async () => {
    const wrapper = shallowMount(SelectButton, {
      propsData: { ...props, placeholder: '' }
    })
    wrapper.setData({ selectedValue: { label: 'Admin', value: 'admin' } })

    expect(findSelected(wrapper.vm)).toBe('Admin')
  })
})
