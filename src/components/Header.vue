<template>
  <nav>
      <div class="logo">
          <img src="../assets/imgs/imbd.png" alt="">
      </div>
      <div class="carousel">
          <img src="../assets/imgs/banner_1.jpg" alt="">
      </div>
      <NavBar :titles="titles" classes="navbar_links"/>
      <div class="img_profile">
          <div>
            <img src="https://cdn.discordapp.com/avatars/567393700360224791/2a2e41e2e0e0fdd841c9664642f750de.webp?size=24" alt="">
          </div>
      </div>
  </nav>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    components:{
        NavBar
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
            ]
        }
    },
}
</script>

<style lang="scss">
    .img_profile{
        width: 98%;
        div{
            width: 45px;
            height: 45px;
            background: red;
            position: absolute;
            right: 20px;
            top: 35px;
            border-radius: 50%;
            img{
                width: 100%;
                border-radius: 50%;
            }
        }
    }
</style>