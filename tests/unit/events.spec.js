import Events from '@/components/Events'
import {shallowMount} from '@vue/test-utils'

describe('Events component', () => {
  test('click adding bet', () => {
    const wrapper = shallowMount(Events, {
      propsData: {
        sport: 'futbol'
      }
    })
    console.log(wrapper.props());

    //await wrapper.trigger('click', {i: 1})
    //expect(wrapper.vm.activeItem).toContain(1)
  })
})