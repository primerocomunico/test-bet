import Vue from 'vue'
import Vuex from 'vuex'
import data from "@/assets/data.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eventsData: data.events,
    betData: [],
    eventData: {}
  },
  mutations: {
    setChoiseData(state, betData) {
      state.betData.push(betData)
    },
    delChoiseData(state, betData) {
      const index = state.betData.indexOf(betData);
      if (index > -1) {
        state.betData.splice(index, 1);
      }
    },
    setEventData(state, eventData) {
      state.eventData = eventData
    }
  },
  actions: {},
  modules: {}
})