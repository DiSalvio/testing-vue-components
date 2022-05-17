import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'

describe('lifecycle hooks', () => {
  it('mounted assigns interval', () => {
    const { vm } = mount(AlertMessage)
    expect(vm.interval).not.toBe(undefined)
  })

  it('counter works', () => {
    jest.useFakeTimers()
    const { vm } = mount(AlertMessage)
    expect(vm.counter).toBe(0)
    jest.advanceTimersByTime(1000)
    expect(vm.counter).toBe(1)
    jest.advanceTimersByTime(4000)
    expect(vm.counter).toBe(5)
  })

  it('destroys component after 5 seconds', () => {
    const beforeDestroySpy = jest.spyOn(AlertMessage, 'beforeDestroy')
    jest.useFakeTimers()
    const { vm } = mount(AlertMessage)
    vm.counter = vm.timer - 1
    jest.advanceTimersByTime(1000)
    expect(beforeDestroySpy).toHaveBeenCalled()
  })
})
