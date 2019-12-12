import Vuex from 'vuex';
import Axios from 'axios';

const url = process.env.BASE_URL || 'http://localhost:3000'
const path = url + '/api/posts'

export const store = new Vuex.Store({
    modules: {
        posts: {
            namespaced: true,
            state: () => ({
                articles: []
            }),
            mutations: {
                GET_ALL_ARTICLES(state, payload) {
                    state.articles = payload;
                },
                CREATE_NEW_ARTICLE(state, payload) {
                    state.articles.push(payload)
                }
            },
            actions: {
                getArticles({
                    commit
                }) {
                    Axios.get(path).then((response) => {
                        commit('GET_ALL_ARTICLES', response.data)
                    })
                },
                postNewArticle(commit, payload) {
                    Axios.post(path, post).then(res => {
                        commit('CREATE_NEW_ARTICLE', payload)
                    })
                },

            },
            getters: {
                getAllArticles: state => state.articles,
            }
        }
    }
})