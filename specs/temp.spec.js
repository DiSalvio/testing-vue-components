import TemperatureComponent from '@/temprature.vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('temperature component', () => {

  describe('computed properties', () => {
    test('celsius computed property', () => {
      const { vm } = mount(TemperatureComponent)
      expect(vm.celsius).toBe(0)
      vm.degrees = 23
      expect(vm.celsius).toBe(23)
    })

    test('fahrenheit computed property', () => {
      const { vm } = mount(TemperatureComponent)
      expect(vm.fahrenheit).toBe(32)
      vm.degrees = 16
      expect(vm.fahrenheit).toBe(60.8)
    })
  })

  describe('watchers', () => {
    test('celsius temp type set correctly', () => {
      const { vm } = mount(TemperatureComponent, {
        propsData: {
          temp: 40
        }
      })
      expect(vm.degrees).toBe(40)
      expect(vm.type).toBe('celsius')
    })

    test('fahrenheit temp type set correctly', () => {
      const { vm } = mount(TemperatureComponent, {
        propsData: {
          temp: '50f'
        }
      })
      expect(vm.type).toBe('fahrenheit')
      expect(vm.degrees).toBe(50)
    })
  })
})
