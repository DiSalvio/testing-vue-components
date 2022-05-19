import ExerciseForm from '@/exercise-2';
import { mount } from '@vue/test-utils';
import { faker } from '@faker-js/faker';


describe('task component', () => {
  it('adds task to list', async () => {
    const wrapper = mount(ExerciseForm)

    const form = wrapper.find('form')
    const input = form.find('input')
    const tasksList = wrapper.find('ul')

    expect(wrapper.findAll('li').length).toBe(0)

    input.setValue('my task')
    form.trigger('submit')
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('li').length).toBe(1)
    expect(input.value).toBe(undefined)
    expect(wrapper.find('span').text()).toBe('my task')

  })
  it('removes task from list', async () => {
    const wrapper = mount(ExerciseForm, {
      data() {
        return {
          tasks: ['my task']
        }
      }
    })

    expect(wrapper.findAll('li').length).toBe(1)
    const done = wrapper.find('li').find('button')
    done.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').length).toBe(0)
  })
})
