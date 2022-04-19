<template class="position-relative">
  <Header />
  <router-view/>
  <Footer />
  <div class="card_movie__modal_bg" v-if="modal">
    <div class="card_movie__info_modal">
      <div class="card_movie__info_modal__img">
        <img src="https://image.tmdb.org/t/p/original//q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" alt="">
      </div>
      <div class="card_movie__info_modal_description">
        <div class="card_movie__info_modal_description__detail">
          <h2>
            THE HUNGER GAMES: MOCKINGJAY - PART 1
          </h2>
          <div class="d-flex font-13 card_movie__info_modal_description__detail_2">
            <div class="font-13">
              Adventure, Sci-Fi, Thriller
            </div>
            <div class="d-flex font-13">
              <div>PG-13</div>
              <div>2h 3m</div>
            </div>
          </div>
          <div class="d-flex card_movie__info_modal_description__detail__achievements">
            <div class="card_movie__info_modal_description__detail__achievements__container">
              <div class="d-flex">
                <img src="./assets/icons/hearth_Ai.svg" alt="">
                <div>
                  6.8
                </div>
              </div>
              <label for="">Rating</label>
            </div>
            <div class="card_movie__info_modal_description__detail__achievements__container">
              <div class="d-flex">
                <img src="./assets/icons/dislike_Ai.svg" alt="">
                <div>
                  64
                </div>
              </div>
              <label for="">Score</label>
            </div>
            <div class="card_movie__info_modal_description__detail__achievements__container">
              <div class="d-flex">
                <img src="./assets/icons/trophy_Ai.svg" alt="">
                <div>
                  12
                </div>
              </div>
              <label for="">Awards</label>
            </div>
          </div>
        </div>
        <div class="card_movie__info_modal_description__resume">
          <div class="text-left card_movie__info_modal_description__resume__container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et doloribus illo obcaecati ipsum culpa? Numquam commodi quas qui enim sit temporibus assumenda, id sed tenetur incidunt magni natus debitis ipsam!
              id sed tenetur incidunt magni natus debitis ipsam!
            </p>
          
            <a href="" class="text-left">FULL MOVIE PROFILE <span>➔</span></a>
          </div>
          <div class="d-flex">
            <button class="card_movie__info_modal_action">Watch Trailer <span>▶</span></button>
            <button class="card_movie__info_modal_action">To Watchlist <span>★</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import './assets/scss/colors/__variables.scss'
  import {mapActions} from 'vuex'
  export default {
    components:{
      Header,
      Footer
    },
    data() {
      return {
        modal: true
      }
    },
    methods:{
      ...mapActions(['loadMovies']),
      openModal(){
        this.modal= true
      }
    },
    created(){
      this.loadMovies();
    }
  } 
</script>
<style lang="scss">
  .card_movie__modal_bg{
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 84%);
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .card_movie__info_modal{
      width: auto;
      max-width: 690px;
      height: 423px;
      background: #fff;
      position: fixed;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      box-sizing: border-box;
      .card_movie__info_modal__img{
        height: 100%;
        float: left;
        img{
          height: 100%;
        }
      }
      .card_movie__info_modal_description{
        position: relative;
        .card_movie__info_modal_description__detail{
          max-width: 20em;
          width: 20em;
          height: 160px;
          position: absolute;
          background: rgb(255, 255, 255);
          left: -23px;
          top: 32px;
          box-shadow: 2px 7px 20px 1px rgb(0 0 0 / 20%);
          padding: 15px 20px;
          text-align: left;
          font-size: 18px;
          h2{
            font-size: 18px;
            margin-bottom: 0px;
          }
          .card_movie__info_modal_description__detail_2{
            position: relative;
            border-bottom: 1px solid #f1f1f1;
            padding: 10px 0 15px 0;
            .font-13{
              color: #00c4ff;
            }
            .d-flex{
              position: absolute;
              right: 0;
              top: 5px;
              div{
                background: rgb(222, 222, 222);
                color: #868686;
                padding: 3px 6px;
                border-radius: 10px;
                font-weight: bold;
                &:not(:last-child){
                  margin-right: 10px;
                }
              }
            }
          }
          .card_movie__info_modal_description__detail__achievements{
            justify-content: center;
            padding-top: 15px;
            .card_movie__info_modal_description__detail__achievements__container{
              display: grid;
              justify-items: center;
              font-weight: bold;
              &:not(:last-child){
                margin-right: 3.5em;
              }
              .d-flex{
                place-content: center;
                img{
                  width: 20px;
                  &:not(:last-child){
                    margin-right: 8px;
                  }
                }
              }
              label{
                font-size: 13px;
                font-weight: 600;
              }
            }
          }
        }
        .card_movie__info_modal_description__resume{
          margin-top: 50%;
          .card_movie__info_modal_description__resume__container{
            padding: 15px;
            p{
              overflow: hidden;
              text-align: left;
              font-size: 13px;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
              display: -webkit-box;
            }
            a{
              color: #00c4ff;
              font-size: 11px;
            }
          }
          div{
            .card_movie__info_modal_action{
              width: 50%;
              border: 0;
              padding: 20px;
              &:nth-child(1){
                background: #f9d108;
                color: white;
              }
               &:nth-child(2){
                background: #363636;
                color: #f9d108;
              }
              span{
                margin-left: 5px;
              }
            }
          }
        }
       
      }
    }
  }
</style>

