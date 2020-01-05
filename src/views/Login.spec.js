import { mount, createLocalVue } from "@vue/test-utils";
import Login from './Login.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("Login Page", () => {
  let actions, store
  beforeEach(() => {
    actions = {
      login: jest.fn(() => Promise.reject({ response: {} }))
    }
    store = new Vuex.Store({
      actions
    })    
  })
  it("should call login with crendential when click Login btn", () => {
    let wrapper = mount(Login, {
      localVue,
      store
    })
  
    const userInput = wrapper.find('#username')
    const passwordInput = wrapper.find('#password')
    const form = wrapper.find('form')

    userInput.setValue('john')
    passwordInput.setValue('password')

    form.trigger('submit.prevent')

    expect(actions.login).toHaveBeenCalled()
    expect(actions.login.mock.calls[0][1]).toEqual({ login: "john", password: "password"})
  })
})