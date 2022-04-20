<template>
  <div class="container_catalog" >
        <NavBar :titles="titles" classes="catalog_options" :favorites="true"/>
        <div class="filters">
            <div class="d-flex filters__container_icons">
                <div>
                    <img class="filters__icon" src="@/assets/icons/hamburguer_Ai.svg" alt="" srcset="">
                </div>
                <div>
                    <img class="filters__icon" src="@/assets/icons/points_Ai.svg" alt="" srcset="">
                </div>
            </div>
             <div class="d-inline-g text-left filters__container_rating">
                <label for="rating_imdb" class="font-13 font-w-b">iMDb Rating</label>
                <div class="position-relative">
                    <div class="globe_range">{{range}} </div>
                    <input type="range" id="rating_imdb" min="0" max="10" step="0.1" v-model="range" @change="filterMoviesByRate(range)">
                </div>
                
            </div>
            <div class="d-flex filters__container_search">
                <input type="text" class="" v-model="keyword" @keyup="filterByKeyWord(keyword)">
                <img class="filters__icon" src="@/assets/icons/search_Ai.svg" alt="" srcset="">
            </div>
        </div>

        <div class="d-flex container_catalog__movies">
            <Card v-for="(movie) in movies" :key="movie.id" :movie="movie" @click="openModal(movie.id)"/>
        </div>
        
  </div>
</template>

<script>
import NavBar from '@/components/molecules/header/NavBar.vue'
import Card from '@/components/atoms/global/Card.vue'
import {mapState,mapActions} from 'vuex'


export default {
    components:{
        Card,
        NavBar
    },
    data() {
        return {
            titles: [
                {
                    title: 'IN THEATERS',
                    url: '/'
                },
                {
                    title: 'COMING SOON',
                    url: '/movies/coming-soon'
                },
                {
                    title: 'CHARTS',
                    url: '/movies/charts'
                },
                {
                    title: 'TV SERIES',
                    url: '/movies/tv-series'
                },
                {
                    title: 'TRAILERS',
                    url: '/movies/trailers'
                },
                   {
                    title: 'MORE',
                    url: '/movies/more'
                },
            ],
            range:0,
            keyword:''
        }
    },
    methods:{
        ...mapActions(['filterMoviesByRate','filterByKeyWord','openModal']),
        positionGlobeRating(){
           
            let inputRating = document.querySelector('#rating_imdb');
            if (inputRating) {
                let w = parseInt(window.getComputedStyle(inputRating, null).getPropertyValue('width')) -15;
                let globeInfo = document.querySelector('.globe_range');
                if (globeInfo) {
                    let pxls = w / 10;
                    globeInfo.style.left = ((inputRating.value * pxls) + 28) + 'px';
                    inputRating.addEventListener('input', function() {
                        globeInfo.style.left = ((inputRating.value * pxls) + 28) + 'px';
                    }, false);
                }
            }
        },
        resizeWindow(){
            let _this = this
            window.addEventListener('resize',function(){
                console.log('hola')
                _this.positionGlobeRating()
            })
        },
        rangeBar(){
            document.getElementById("rating_imdb").oninput = function() {
                var value = (this.value-this.min)/(this.max-this.min)*100
                this.style.background = 'linear-gradient(to right, #e9e211 0%, #e9e211 ' + value + '%, rgba(128, 128, 128, 0.182) ' + value + '%, rgba(128, 128, 128, 0.182) 100%)'
            };
        },
    },
    computed:{
        ...mapState(['movies']),
    },
    mounted(){
        //calcula el rango interior/progreso de la barra del input range
        this.rangeBar()
        //calcula y posiciona un objeto con la información del input range
        this.positionGlobeRating()
        this.resizeWindow()
    }
}
</script>

<style lang="scss">
    .home{
        z-index: 0;
        position: relative;
        background-color: #f9fafb;
        .container_catalog{
            
            padding: 0px 50px;
            width: 70%;
            margin: 0 auto;
            background: #f9fafb;
            transform: translateY(-60px);
            margin-right: auto;
            margin-left: auto;
            .filters{
                align-items: center;
                display: flex;
                padding: 30px 0;
                &__icon{
                    width: 25px;
                }
                div:not(:last-child){
                    margin-right: 17px;
                }
                &__container_rating{
                    width: 60%;
                    div{
                        position: relative;
                        .globe_range{
                            width: 30px;
                            height: 18px;
                            position: absolute;
                            background-color: rgb(255, 255, 255);
                            color: black;
                            font-size: 12px;
                            font-weight: bold;
                            text-align: center;
                            padding-top: 3px;
                            top: 4px;
                            border-radius: 10%;
                            box-shadow: 2px 2px 8px 1px rgb(0 0 0 / 20%);
                        }
                        .globe_range:after {
                            content: '';
                            display: block;
                            width: 10px;
                            height: 10px;
                            -webkit-transform: rotate(45deg);
                            -moz-transform: rotate(45deg);
                            -ms-transform: rotate(45deg);
                            transform: rotate(45deg);
                            background-color: rgb(255, 255, 255);
                            position: relative;
                            left: -5px;
                            top: -13px;
                        }
                    }
                }
                &__container_search{
                    width: 30%;
                    border-bottom: 2px solid #e8e8e8;
                    margin-bottom: -3px;
                    input{
                        width:100%;
                        background:#f9fafb;
                    }
                }
            }
            #rating_imdb{
                background: linear-gradient(to right, #e9e211 0%, #e9e211 0%, rgba(128, 128, 128, 0.182) 0%, rgba(128, 128, 128, 0.182) 100%);
                border-radius: 8px;
                height: 2px;
                width: 100%;
                outline: none;
                transition: background 450ms ease-in;
                -webkit-appearance: none;
                &::-webkit-slider-thumb{
                    width: 15px;
                    -webkit-appearance: none;
                    height: 15px;
                    border-radius: 50%;
                    cursor: pointer;
                    background: #f9d108;
                }
                &::before{
                    width: 10px;
                    height: 10px;
                    background: #f9d108;
                    position: absolute;
                    left: 2px;
                    top: 11px;
                    z-index: 8;
                    border-radius: 50%;
                    content: "";
                }
            }
            .container_catalog__movies{
                flex-wrap: wrap;
                display: -webkit-box;
                display: -ms-flexbox;
                margin-right: -10px;
                margin-left: -10px;
            }
        }
    }
    @media screen and (min-width: 1360px) {
    }
    @media screen and (min-width: 1200px) and (max-width: 1360px){
    }
    @media screen and (min-width: 992px) and (max-width: 1200px){
    }
    @media screen and (min-width: 768px) and (max-width: 992px){
    }
    @media screen and (min-width: 576px) and (max-width: 768px){
    }
    @media screen and (max-width: 576px) {
        
    }
    @media screen and (max-width: 400px) {
         .home{
            .container_catalog{ 
                width: 70%;
                padding: 0px 40px;
            }
        }
    }
    @media screen and (max-width: 768px){
        .home{
            .container_catalog{
                .filters{
                    display: block;
                    &__container_icons{
                        justify-content: center;
                    }
                    &__container_rating{
                        width: 100%;
                    }
                    &__container_search{
                        width: 100%;
                        margin-top: 5px;
                        input{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>