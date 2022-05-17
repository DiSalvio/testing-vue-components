import FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'

function sleep(ms) {
  return new Promise(resolve => { 
    setTimeout(resolve, ms)
  })
}

describe('dom object', () => {
  it('add fruits to basket', async () => {
    const wrapper = mount(FruitBasket)

    const input = wrapper.find('input')
    const button = wrapper.find('button')

    expect(wrapper.findAll('li').length).toBe(0)

    input.element.value = 'banana'
    input.trigger('input')
    expect(wrapper.vm.fruit).toBe('banana')

    button.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.fruit).toBe("")
    expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']))
    expect(wrapper.findAll('li').length).toBe(1)
  })


})
