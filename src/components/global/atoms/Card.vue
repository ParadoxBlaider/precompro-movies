<template>
  <article class="card_movie" @click="openModal">
      <img :src="`${url_movies}${movie.poster_path}`" alt="">
      <div class="card_movie__info">
            <h2 class="">{{movie.title.toUpperCase()}}</h2>
            <h3 class="text_color_imdb mt-2">
                {{genres.join(', ')}}
                
            </h3>
            <div class="card_movie__loved text-left font-w-b">
                <span></span>
                {{movie.vote_average}}
            </div>
          <div class="card_movie__plus_action"></div>
      </div>
  </article>

</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            arrayGenres: [],
            genres:[]
        }
    },
    props:{
        movie:Object,
    },
    methods:{
        async getGenre(){
            const res_secondary = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=788725be04826f26be991b7a88462b46`);
            const dataGenres = await res_secondary.json();
            this.arrayGenres.push(dataGenres.genres)
            let _this = this
            this.movie.genre_ids.map((item)=>{
                dataGenres.genres.map((genre)=>{
                    if(item == genre.id){
                        _this.genres.push(genre.name)
                    }
                })
            })
        },
       
        
    },
    computed:{
        ...mapState(['url_movies'])
    },
    created(){
        this.getGenre()
    }
}
</script>

<style lang="scss">
    .card_movie{
        position: relative;
        margin-top: 30px;
        width: 265px;
        box-shadow: 2px 7px 20px 1px rgb(0 0 0 / 20%);
        transition: all 0.5s;
        &:not(:last-child){
            margin-right: 15px;
        }
        &:hover{
            transform: scale(1.1);
            transition: all 0.5s;
        }
        img{
            width: 100%;
        }
        .card_movie__info{
            padding: 13px;
            h2{
                margin:0;
                font-weight: bold;
                overflow: hidden;
                text-align: left;
                font-size: 13px;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                display: -webkit-box;
            }
            h3{
                margin:0;
                font-weight: bold;
                overflow: hidden;
                text-align: left;
                font-size: 10px;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                display: -webkit-box;
            }
            .card_movie__plus_action{
                width: 0;
                height: 0;
                border-left: 27px solid transparent;
                border-right: 27px solid transparent;
                border-top: 27px solid #e9e211;
                position: absolute;
                right: -18px;
                bottom: -4px;
                transform: rotate(315deg);
                &::after{
                    content: "+";
                    position: absolute;
                    top: -28px;
                    right: -7px;
                    transform: rotate(44deg);
                    color: white;
                    font-weight: bold;
                    cursor:pointer;
                }
            }
        }
        .card_movie__loved{
            padding: 10px 0;
        }
    }

</style>