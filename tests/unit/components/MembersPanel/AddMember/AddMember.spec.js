import { shallowMount } from '@vue/test-utils'
import { AddMember } from '@/components/MembersPanel'
import { createRenderer } from 'vue-server-renderer'

import Icon from '@/components/Icon'
import TipeButton from '@/components/Button'
import Seperator from '@/components/Seperator'
import AvatarUpload from '@/components/AvatarUpload'
import TipeInput from '@/components/Input'
import TipeSelect from '@/components/Select'

describe('AddMember.vue', () => {
  it('renders', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(AddMember)
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
  it('should render the Icon component', () => {
    const wrapper = shallowMount(AddMember)
    expect(wrapper.contains(Icon)).toBe(true)
  })
  it('should render the TipeButton component', () => {
    const wrapper = shallowMount(AddMember)
    expect(wrapper.contains(TipeButton)).toBe(true)
  })
  it('should render the Seperator component', () => {
    const wrapper = shallowMount(AddMember)
    expect(wrapper.contains(Seperator)).toBe(true)
  })
  it('should render the AvatarUpload component', () => {
    const wrapper = shallowMount(AddMember)
    expect(wrapper.contains(AvatarUpload)).toBe(true)
  })
  it('should render the TipeInput component', () => {
    const wrapper = shallowMount(AddMember)
    expect(wrapper.contains(TipeInput)).toBe(true)
  })
  it('should render the TipeSelect component', () => {
    const wrapper = shallowMount(AddMember)
    expect(wrapper.contains(TipeSelect)).toBe(true)
  })
  it('should have the grid class', () => {
    const wrapper = shallowMount(AddMember)
    expect(wrapper.classes()).toContain('grid')
  })
  it('should invalidate the email input', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({ emailValue: { value: '454', changed: true } })
    expect(wrapper.vm.emailValidity).toEqual({
      valid: false,
      status: 'error',
      message: 'Please enter a valid email address'
    })
  })
  it('should validate the email input', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({ emailValue: { value: 'olivia@tipe.io', changed: true } })
    expect(wrapper.vm.emailValidity).toEqual({
      valid: true,
      status: 'success',
      message: ''
    })
  })
  it('should invalidate the name input', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({ nameValue: { value: '', changed: true } })
    expect(wrapper.vm.nameValidity).toEqual({
      valid: false,
      status: 'error',
      message: 'Please enter a valid name'
    })
  })
  it('should validate the name input', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({ nameValue: { value: 'Olivia Oddo', changed: true } })
    expect(wrapper.vm.nameValidity).toEqual({
      valid: true,
      status: 'success',
      message: ''
    })
  })
  it('should not be able to submit the form', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailValue: {
        value: '',
        changed: true
      },
      roleValue: 'member',
      nameValue: { value: '', changed: true }
    })
    expect(wrapper.vm.canSubmit).toBe(false)
  })
  it('should not be able to submit the form with invalid email', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailValue: {
        value: 'dsfdsfs',
        changed: true
      },
      roleValue: 'member',
      nameValue: { value: 'Olivia', changed: true }
    })
    expect(wrapper.vm.canSubmit).toBe(false)
  })
  it('should not be able to submit the form with invalid name', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailValue: {
        value: 'olivia.oddo@gmail.com',
        changed: true
      },
      roleValue: 'member',
      nameValue: { value: '', changed: true }
    })
    expect(wrapper.vm.canSubmit).toBe(false)
  })
  it('should be able to submit the form', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailValue: {
        value: 'olivia.oddo@gmail.com',
        changed: true
      },
      roleValue: 'member',
      nameValue: { value: 'Olivia', changed: true }
    })
    expect(wrapper.vm.canSubmit).toBe(true)
  })
  it('should reset the form', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailValue: {
        value: 'olivia.oddo@gmail.com',
        changed: true
      },
      roleValue: 'member',
      nameValue: { value: 'Olivia', changed: true }
    })
    wrapper.vm.resetForm()
    expect(wrapper.vm.roleValue).toBe('member')
    expect(wrapper.vm.nameValue).toEqual({ value: '', changed: false })
    expect(wrapper.vm.emailValue).toEqual({
      value: '',
      changed: false
    })
  })
  it('should update the name value', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.vm.onChangeName('Olivia')
    expect(wrapper.vm.nameValue).toEqual({ value: 'Olivia', changed: true })
  })
  it('should update the email value', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.vm.onChangeEmail('olivia.oddo@gmail.com')
    expect(wrapper.vm.emailValue).toEqual({
      value: 'olivia.oddo@gmail.com',
      changed: true
    })
  })
  it('should update the role value', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.vm.onChangeRole('owner')
    expect(wrapper.vm.roleValue).toEqual('owner')
  })
})
