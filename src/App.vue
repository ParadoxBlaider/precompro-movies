<template class="position-relative">
  <Header />
  <router-view/>
  <Footer />
  <Modal />

</template>
<script>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'
  import Modal from '@/components/global/atoms/Modal.vue'
  import './assets/scss/colors/__variables.scss'
  import {mapActions} from 'vuex'
  export default {
    components:{
      Header,
      Footer,
      Modal
    },
   
    methods:{
      ...mapActions(['loadMovies']),
    },
    created(){
      this.loadMovies();
    }
  }
</script>


