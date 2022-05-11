import TestComponent from '@/test.vue'
import ListComponent from '@/list.vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('mounted test component', () => {

  test('has correct default prop value', () => {
    const wrapper = mount(TestComponent)

    expect(wrapper.props().value).toContain('Test')
  })

  test('prop value can be set correctly', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        value: 'You'
      }
    })

    expect(wrapper.props().value).toContain('You')
  })

  test('html matches snapshot with default prop value', () => {
    const wrapper = mount(TestComponent)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('html matches snapshot with default prop value', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        value: 'You'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('list component', () => {
  test('mount', () => {
    const wrapper = mount(ListComponent)
  })

  test('shallow mount', () => {
    const wrapper = shallowMount(ListComponent)
  })
})
