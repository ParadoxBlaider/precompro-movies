<template>
<div class="box_movie">
  <article class="card_movie" @click="openModal">
      <div class="card_movie__container_img">
        <img class="card_movie__img" :src="`${url_movies}${movie.poster_path}`" alt="">
      </div>
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
</div>

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
    .box_movie{
        width: 25%;
        .card_movie{
            position: relative;
            box-shadow: 2px 7px 20px 1px rgb(0 0 0 / 20%);
            transition: all 0.5s;
            margin: 10px;
            &:hover{
                transform: scale(1.1);
                transition: all 0.5s;
            }
         
            &__img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
            .card_movie__info{
                padding: 13px;
                background: #fff;
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
    }
    @media screen and (min-width: 1360px) {
        .box_movie{
           width: 25%;
            .card_movie{
                &__container_img{
                    height: 400px;
                }
            }
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1360px){
       .box_movie{
           width: 33.3%;
           .card_movie{
                &__container_img{
                    height: 400px;
                }
            }
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1200px){
        .box_movie{
            width: 50%;
            .card_movie{
                &__container_img{
                    height: 550px;
                }
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 992px){
        .box_movie{
            width: 50%;
           .card_movie{
                &__container_img{
                    height: 450px;
                }
            }
        }
    }
    @media screen and (max-width: 768px){
        .box_movie{
            width: 100%;
        }
        .card_movie__modal_bg {
            .card_movie__info_modal {
                height: 440px;
                box-sizing: border-box;
                overflow: visible;
                .card_movie__info_modal_description {
                    position: absolute;
                    max-width: 415px;
                    background: #ffffffc7;
                    transform: scale(0.8);
                    .card_movie__info_modal_description__detail {
                        left: 7px;
                    }
                    .card_movie__info_modal__close_modal {
                        color: #000000;
                        cursor: pointer;
                    }
                }
                .card_movie__info_modal__img{
                    width: 280px;
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 576px) and (max-width: 768px){
        .box_movie{
            width: 50%;
            .card_movie{
                &__container_img{
                    height: 320px;
                }
            }
        }
    }
  
</style>