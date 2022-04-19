import { createStore } from 'vuex'

export default createStore({
  state: {
    movies:[],
    range:0,
    range_actived:false,
  },
  mutations: {
    load(state,payload){
      state.movies = payload
    },
    filter(state,payload){
      state.movies = payload.moviesFiltered
      state.range = payload.range
      state.range_actived = true
    },
    filterKey(state,payload){
      state.movies = payload
    }
  },
  actions: {
    async apiMovies(){
      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=788725be04826f26be991b7a88462b46`);
      const dataApi = await res.json();
      return dataApi.results
    },
    async loadMovies({commit,dispatch }){
      const data = await dispatch('apiMovies')
      commit('load',data)
    },
    async filterMoviesByRate({commit,dispatch },range){
      const movies = await dispatch('apiMovies')
      const moviesFiltered = movies.filter((item)=>{
        return  parseFloat(range) >= item.vote_average
      })
      commit('filter',{moviesFiltered:moviesFiltered,range:range})
    },
    async filterByKeyWord({commit,dispatch},keyword){
      let movies = null
      if(this.state.range_actived){
          await dispatch('filterMoviesByRate',this.state.range)
          movies = this.state.movies
      }else{
          movies = await dispatch('apiMovies')
      }
      console.log(movies)
      const moviesFiltered = movies.filter((item)=>{
        return item.title.toLowerCase().includes(keyword.toLowerCase())
      })
      commit('filterKey',moviesFiltered)
    }
  },
  modules: {
  }
})
