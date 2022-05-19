import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { faker } from '@faker-js/faker';

describe('users list', () => {
  it('renders single user', () => {
    const wrapper = mount(UserList, {
      propsData: {
        users: [faker.name.findName()]
      }
    })
    const li = wrapper.find('li')
    expect(li.text()).toBe(wrapper.props('users')[0])
  })

  it('renders multiple users', () => {
    const wrapper = mount(UserList, {
      propsData: {
        users: [faker.name.findName(), faker.name.findName(), faker.name.findName()]
      }
    })
    expect(wrapper.findAll('li').length).toBe(3)
    expect(wrapper.findAll('li').wrappers.map(l => l.text())).toEqual(wrapper.props('users'))
  })

  it('filters multiple users down to 1 user', async () => {
    const wrapper = mount(UserList, {
      propsData: {
        users: [faker.name.findName(), faker.name.findName(), faker.name.findName()]
      }
    })

    const input = wrapper.find('input')
    input.element.value = wrapper.props('users')[1]
    input.trigger('input')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').length).toBe(1)
    expect(wrapper.findAll('li').wrappers.map(l => l.text())[0]).
      toEqual(wrapper.props('users')[1])
  })
})
