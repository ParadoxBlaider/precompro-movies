<template>
  <nav>
      <div class="menu_hamburguer">
            <div class="menu_hamburguer__container_icon" @click="openSidebar">
                <img src="@/assets/icons/hamburguer_Ai.svg" alt="">
            </div>
            <aside class="menu_hamburguer__container" v-if="hamburguer_actions">
                <NavBar :titles="titles" classes="navbar_links menu_hamburguer__container__options" @click="openSidebar"/>
            </aside>
      </div>
      <div class="logo">
          <img src="@/assets/imgs/imbd.png" alt="">
      </div>
      <div class="carousel">
        <Splide :options="{ rewind: true,direction:'ttb',height: '40em', }" aria-label="My Favorite Images">
            <SplideSlide>
                <img src="@/assets/imgs/banner_1.jpg" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img src="@/assets/imgs/banner_1.jpg" alt="Sample 2">
            </SplideSlide>
        </Splide>
      </div>
      <NavBar :titles="titles" classes="navbar_links"/>
      <div class="img_profile">
          <div>
            <img src="@/assets/imgs/profile.jpg" alt="">
          </div>
      </div>
  </nav>
</template>

<script>
import NavBar from '@/components/molecules/header/NavBar.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
// Default theme
export default {
    components:{
        NavBar,
        Splide,
        SplideSlide,
    },
    data() {
        return {
            titles: [
                {
                    title: 'MOVIES',
                    url: '/'
                },
                {
                    title: 'CELEBS & PHOTOS',
                    url: '/celebs-photos'
                },
                {
                    title: 'COMMUNITY',
                    url: '/community'
                },
                {
                    title: 'NEWS',
                    url: '/news'
                },
            ],
            hamburguer_actions:false
        }
    },
    methods:{
        openSidebar(){
            this.hamburguer_actions = !this.hamburguer_actions
        }
    }
}
</script>

<style lang="scss">
   .splide__pagination--ttb{
       left: 0;
        width: 25px;
        .splide__pagination__page.is-active{
            background: #ffffff;
        }
       .splide__pagination__page{
            height: 7px;
            width: 7px;
            background: #9b9999;
       }
   }
   .splide__arrow--prev,.splide__arrow--next{
       right: 0!important;
       left: initial;
   }
   .splide__arrow--prev{
       top: 45%!important;
   }
   .splide__arrow--next{
       bottom: 45%!important;
   }
   .splide__arrows--ttb {
       .splide__arrow{
           svg{
               width: 20px;
                fill: #ebebeb!important;
            }
           left: inherit;
       }
   }
@media screen and (min-width: 576px) and (max-width: 1200px){
    .splide__track{
        height: calc((20em - 0px) - 0px)!important;
    }
    .splide__arrow--prev{
       top: 40%!important;
    }
    .splide__arrow--next{
       bottom: 40%!important;
    }
}
@media screen and (max-width: 576px){
    .splide__track{
        height: calc((12em - 0px) - 0px)!important;
    }
    .splide__arrow--prev{
       top: 35%!important;
    }
    .splide__arrow--next{
       bottom: 35%!important;
    }
}
</style>