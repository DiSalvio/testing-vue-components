import Vuex from 'vuex'
import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'

import SaladBowlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'

const TestVue = createLocalVue()
TestVue.use(Vuex)
const store = new Vuex.Store(saladStore)

test('store is loaded', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(SaladBowlComponent, {
    localVue: TestVue,
    store
  })
  store.state.salad.push('cucumber')
  expect(wrapper.vm.salad).toEqual(['cucumber'])
})

test('store adds ingredient', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(SaladBowlComponent, {
    localVue: TestVue,
    store
  })
  wrapper.vm.addIngredient('tomato')
  expect(wrapper.vm.salad).toEqual(['tomato'])
})
