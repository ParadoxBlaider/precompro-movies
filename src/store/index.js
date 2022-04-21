import { createStore } from 'vuex'

export default createStore({
  state: {
    movies:[],
    range:0,
    range_actived:false,
    modal:false,
    movie:null,
    url_movies: 'https://image.tmdb.org/t/p/original/',
    class_animation:'width: 62px'
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
    },
    open(state,payload){
      state.movie = payload
      state.modal = true
      // esperar a que se abra modal para hacer animación 3d del elemento que se requiere
      setTimeout(() => {
          state.class_animation = 'width: 280px;'
          const card = document.querySelector("#container_3d");
          const element = document.querySelector(".card_movie__info_modal");
          const height = card.clientHeight
          const width = card.clientWidth
          const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
          function handleHover(e) {
            const { clientX, clientY } = e;
            const yRotation = (20 * ((clientX - width / 2) / width)).toFixed(2)
            const xRotation = (-20 * ((clientY - height / 2) / height)).toFixed(2)
            card.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1, 1, 1)`;
          }
          function resetStyles(e) {
            card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
          }
          if (!motionMatchMedia.matches) {
            card.addEventListener("mousemove", handleHover);
            card.addEventListener("mouseleave", resetStyles);
            card.addEventListener("click", (event) =>{
              const withinBoundaries = event.composedPath().includes(element)
              if (!withinBoundaries) {
                state.modal = false
                setTimeout(() => {
                  state.class_animation = 'width: 62px;'
                }, 300);
              }
            });
          }
      }, 600);
    },
    close(state){
      state.modal = false
      setTimeout(() => {
        state.class_animation = 'width: 62px;'
      }, 300);
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
      let moviesFiltered = null
      const movies = await dispatch('apiMovies')
      if(range == 0){
        moviesFiltered = movies
      }else{
        moviesFiltered = movies.filter((item)=>{
          return  parseFloat(range) >= item.vote_average
        })
      }
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
      const moviesFiltered = movies.filter((item)=>{
        return item.title.toLowerCase().includes(keyword.toLowerCase())
      })
      commit('filterKey',moviesFiltered)
    },
    async openModal({commit},id){
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=788725be04826f26be991b7a88462b46`);
      const dataMovieDetail = await res.json();
      commit('open',dataMovieDetail)
    },
    closeModal({commit}){
      commit('close')
    }
  },
  modules: {
  }
})
