import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {

  test('compose url', () => {
    const { composeUrl } = GithubCard.methods
    expect(composeUrl('codebyro')).toBe('https://api.github.com/users/codebyro')
    expect(composeUrl(1234)).toBe('https://api.github.com/users/1234')
  })

  test('fetchData', async () => {
    const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA')
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock
    })

    const wrapper = mount(GithubCard, {
      data () {
        return {
          username: '1234'
        }
      }
    })

    await wrapper.vm.fetchData()

    expect(window.fetch).toHaveBeenCalledWith('https://api.github.com/users/1234')
    expect(jsonMock).toHaveBeenCalled()
    expect(wrapper.vm.data).toBe('GITHUB DATA')

  })
})
