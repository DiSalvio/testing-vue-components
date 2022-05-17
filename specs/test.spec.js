import TestComponent from '@/test.vue'
import ListComponent from '@/list.vue'
import { mount } from '@vue/test-utils'

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

    expect(wrapper).toMatchSnapshot()
  })

  test('html matches snapshot with given prop value', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        value: 'You'
      }
    })

    expect(wrapper).toMatchSnapshot()
  })
})

describe('list component', () => {
  test('html lists existing movie data plus any added data', () => {
    const wrapper = mount(ListComponent)
    const movies = wrapper.vm.marvelMovies
    wrapper.setData({ marvelMovies: [ ...movies, 'Endgame' ] })
    expect(wrapper).toMatchSnapshot()
  })
})
