import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexUndoState from './plugins/vuex-undo-state.js'
//import VueAxios from 'vue-axios'

Vue.use(Vuex, VuexUndoState)

const postAPI = `https://jsonplaceholder.typicode.com/posts`

export default new Vuex.Store({
  state: {
    title: 'My custom title',
    isLoading: false,
    postList: [],
    actionList: [],
    overIndexList: [],
    setNull: null
  },
  getters: {
    countLinks: state => {
      return state.postList.length
    }
  },
  actions: {
    fetchPostList(payload) {
      payload.commit('SET_LOADING_STATUS')
      axios
        .get(`${postAPI}?_limit=5`)
        .then(response => {
          payload.commit('SET_POSTS', response.data)
        })
        .catch(error => {
          throw new error(console.log(`API ${error}`))
        })
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    SET_LOADING_STATUS: state => {
      state.isLoading != state.isLoading
    },
    SET_POSTS: (state, postList) => {
      state.postList = postList
    },
    ADD_ACTION_CARD: (state, cardContent) => {
      state.actionList.unshift(cardContent)
    },
    MOVE_ELEMENT: (state, params) => {
      state.postList.move(params.from, params.to)
    },
    OVERINDEX_LIST: (state, params) => {
      state.overIndexList = params
    },
    REMOVE_ACTION_CARD: (state, params) => {
      state.actionList.splice(params.index, params.length)
    },
    emptyState() {
      this.replaceState({ setNull: null })
    }
  }
})
