import { createStore } from 'vuex'

export default createStore({
    state: {
      residentData: {},
      addressData: {},
    },
    mutations: {
      SAVE_RESIDENT_DATA(state, data) {
        state.residentData = data;
      },
      SAVE_ADDRESS_DATA(state, data) {
        state.addressData = data;
      },
    },
    // Add actions and getters if needed
  });