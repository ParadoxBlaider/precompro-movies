<template class="position-relative">
  <Header />
  <router-view/>
  <Footer />
  <Modal />

</template>
<script>
  import Header from '@/components/molecules/header/Header.vue'
  import Footer from '@/components/molecules/footer/Footer.vue'
  import Modal from '@/components/atoms/global/Modal.vue'
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


