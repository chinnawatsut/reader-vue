export const namespaced = true
export const state = {
  numbers: [5,31,325,21,52,21,32,21]
}
export const mutations = {
  ADD_NUMBER(state, number) {
    state.numbers.push(number)
  }
}
export const actions = {
  addNumber({ commit }, number) {
    commit('ADD_NUMBER', number)
  }
}
export const getters = {
  greaterNumber: (state) => {
    return state.numbers.filter( n => n > 30)
  }
}