import Axios from "axios";

const url = '/api/posts'


export const state = () => ({
  articles: []
})
export const mutations = {
  GET_ALL_ARTICLES(state, payload) {
    state.articles = payload;
  },
  CREATE_NEW_ARTICLE(state, payload) {
    state.articles.push(payload)
  }
}
export const actions = {
  getArticles({
    commit
  }) {
    Axios.get(url).then((response) => {
      commit('GET_ALL_ARTICLES', response.data)
    })
  },
  postNewArticle({
    commit
  }, post) {
    Axios.post(url, post).then(res => {
      commit('CREATE_NEW_ARTICLE', res.data)
    })
  }
}
export const getters = {
  getAllArticles: state => state.articles,
}
