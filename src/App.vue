<template class="position-relative">
  <Header />
  <router-view/>
  <Footer />
  <Modal />

</template>
<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Modal from '@/components/Modal.vue'
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


