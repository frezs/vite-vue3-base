import type { App } from 'vue'
import { createStore } from 'vuex'

export const store = createStore({
  state: {
    sidebarOpen: false
  },
  mutations: {
    SET_SIDEBAR(state: any) {
      state.sidebarOpen = !state.sidebarOpen
      localStorage.setItem('SIDEBAR_OPEN', state.sidebarOpen.toString())
    },
    GET_SIDEBAR(state: any) {
      const rSidebarOpen = localStorage.getItem('SIDEBAR_OPEN')
      if (rSidebarOpen) {
        state.sidebarOpen = rSidebarOpen === 'true' ? true : false
      }
    }
  },
  actions: {
    set({ commit }) {
      commit('SET_SIDEBAR')
    },
    get({ commit }) {
      commit('GET_SIDEBAR')
    }
  }
})

export function setupStore(app: App<Element>) {
  app.use(store)
}