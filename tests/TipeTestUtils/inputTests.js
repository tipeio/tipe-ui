import { shallowMount } from '@vue/test-utils'

const defaultQuery = wrapper => wrapper

export const size = (Input, query = defaultQuery) => {
  it(':size(undefined) - has medium class ', () => {
    const wrapper = shallowMount(Input)
    expect(query(wrapper).classes()).toContain('medium')
  })

  it(':size(small) - has small class ', () => {
    const propsData = { size: 'small' }

    const wrapper = shallowMount(Input, { propsData })
    expect(query(wrapper).classes()).toContain('small')
  })

  it(':size(medium) - has medium class ', () => {
    const propsData = { size: 'medium' }

    const wrapper = shallowMount(Input, { propsData })
    expect(query(wrapper).classes()).toContain('medium')
  })

  it(':size(large) - has large class ', () => {
    const propsData = { size: 'large' }

    const wrapper = shallowMount(Input, { propsData })
    expect(query(wrapper).classes()).toContain('large')
  })
}

export const status = (Input, query = defaultQuery) => {
  it(':status(undefined) - no status class ', () => {
    const wrapper = shallowMount(Input)
    expect(query(wrapper).classes()).not.toEqual(
      expect.arrayContaining([expect.stringMatching(/status-/)])
    )
  })

  it(':status(success) - has status-success class', () => {
    const propsData = { status: 'success' }
    const wrapper = shallowMount(Input, { propsData })

    expect(query(wrapper).classes()).toContain('status-success')
  })

  it(':status(error) - has status-error class', () => {
    const propsData = { status: 'error' }
    const wrapper = shallowMount(Input, { propsData })

    expect(query(wrapper).classes()).toContain('status-error')
  })

  it(':status(warning) - has status-warning class', () => {
    const propsData = { status: 'error' }
    const wrapper = shallowMount(Input, { propsData })

    expect(query(wrapper).classes()).toContain('status-error')
  })
}

export const waiting = (Input, query = defaultQuery) => {
  it(':waiting(undefined) - no waiting class', () => {
    const wrapper = shallowMount(Input)

    expect(query(wrapper).classes()).not.toEqual(
      expect.arrayContaining(['waiting'])
    )
  })

  it(':waiting(false) - no waiting class', () => {
    const propsData = { waiting: false }
    const wrapper = shallowMount(Input, { propsData })

    expect(query(wrapper).classes()).not.toEqual(
      expect.arrayContaining(['waiting'])
    )
  })

  it(':waiting(true) - has waiting class', () => {
    const propsData = { waiting: true }
    const wrapper = shallowMount(Input, { propsData })

    expect(query(wrapper).classes()).toContain('waiting')
  })
}

export const disabled = (Input, query = defaultQuery) => {
  it(':disabled(undefined) - no disabled attribute', () => {
    const wrapper = shallowMount(Input)

    expect(query(wrapper).attributes().disabled).toBeFalsy()
  })

  it(':disabled(false) - has disabled attribute', () => {
    const propsData = { disabled: false }
    const wrapper = shallowMount(Input, { propsData })

    expect(query(wrapper).attributes().disabled).toBeFalsy()
  })

  it(':disabled(true) - has disabled attribute', () => {
    const propsData = { disabled: true }
    const wrapper = shallowMount(Input, { propsData })

    expect(query(wrapper).attributes().disabled).toBeTruthy()
  })
}

export const events = (Input, query = defaultQuery) => {
  it('@focus - should emit', () => {
    const wrapper = shallowMount(Input)
    query(wrapper).trigger('focus')
    expect(wrapper.emitted().focus).toBeTruthy()
  })

  it('@blur - should emit', () => {
    const wrapper = shallowMount(Input)
    query(wrapper).trigger('blur')
    expect(wrapper.emitted().blur).toBeTruthy()
  })

  it('@click - should emit', () => {
    const wrapper = shallowMount(Input)
    query(wrapper).trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('@change - should emit', () => {
    const wrapper = shallowMount(Input)
    query(wrapper).trigger('change')
    expect(wrapper.emitted().change).toBeTruthy()
  })
}
