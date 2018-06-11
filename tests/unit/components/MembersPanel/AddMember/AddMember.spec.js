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
  it('has correct data-tipe-ui attibute', () => {
    const wrapper = shallowMount(AddMember)
    expect(wrapper.attributes()['data-tipe-ui']).toBe('AddMember')
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
    wrapper.setData({ emailValue: '454' })
    wrapper.vm.emailValidate()
    expect(wrapper.vm.emailStatus).toBe('error')
  })
  it('should validate the email input', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({ emailValue: 'olivia@tipe.io' })
    wrapper.vm.emailValidate()
    expect(wrapper.vm.emailStatus).toBe('success')
  })
  it('should invalidate the name input', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({ nameValue: '' })
    wrapper.vm.nameValidate()
    expect(wrapper.vm.nameStatus).toBe('error')
  })
  it('should validate the name input', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({ nameValue: 'Olivia Oddo' })
    wrapper.vm.nameValidate()
    expect(wrapper.vm.nameStatus).toBe('success')
  })
  it('should not be able to submit the form', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailStatus: '',
      roleValue: { label: 'Member', value: 'member' },
      nameStatus: ''
    })
    expect(wrapper.vm.canSubmit).toBe(false)
  })
  it('should not be able to submit the form with invalid email', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailStatus: 'error',
      roleValue: { label: 'Member', value: 'member' },
      nameStatus: 'success'
    })
    expect(wrapper.vm.canSubmit).toBe(false)
  })
  it('should not be able to submit the form with invalid name', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailStatus: 'success',
      roleValue: { label: 'Member', value: 'member' },
      nameStatus: 'error'
    })
    expect(wrapper.vm.canSubmit).toBe(false)
  })
  it('should be able to submit the form', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailStatus: 'success',
      roleValue: { label: 'Member', value: 'member' },
      nameStatus: 'success'
    })
    expect(wrapper.vm.canSubmit).toBe(true)
  })
  it('should reset the form', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.setData({
      emailValue: 'olivia.oddo@gmail.com',
      roleValue: { label: 'Member', value: 'member' },
      nameValue: 'Olivia'
    })
    wrapper.vm.resetForm()
    expect(wrapper.vm.roleValue).toEqual({ label: 'Owner', value: 'owner' })
    expect(wrapper.vm.nameValue).toBe('')
    expect(wrapper.vm.emailValue).toBe('')
  })
  it('should update the name value', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.vm.onChangeName('Olivia')
    expect(wrapper.vm.nameValue).toEqual('Olivia')
  })
  it('should update the email value', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.vm.onChangeEmail('olivia.oddo@gmail.com')
    expect(wrapper.vm.emailValue).toEqual('olivia.oddo@gmail.com')
  })
  it('should update the role value', () => {
    const wrapper = shallowMount(AddMember)
    wrapper.vm.onChangeRole({ label: 'Owner', value: 'owner' })
    expect(wrapper.vm.roleValue).toEqual({ label: 'Owner', value: 'owner' })
  })
})
