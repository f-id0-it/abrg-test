import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_token: localStorage.getItem('user_token')
  },
  mutations: {
    set_user_token(state, param) {
      state.user_token = param
      localStorage.setItem('user_token', state.user_token)
    },
    remove_user_token(state) {
      state.user_token = '' // localStorage stores strings
      localStorage.setItem('user_token', state.user_token)
    }
  },
  // actions: {},
  getters: {
    schema_items: state => schema => {
      return schema._schema
    },
    schema_items_array: (state, getters) => schema => {
      // Get schema items
      let schema_items = getters.schema_items(schema)

      // Reformat object to array, add schema item name
      schema_items = Object.entries(schema_items).map(([key, value]) => {
        return {
          name: key,
          ...value
        }
      })

      return schema_items
    }
  }
})