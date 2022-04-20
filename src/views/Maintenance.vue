<template>
  <section class="d-flex container_maintenance">
    <div class="container_maintenance__img">
      <img src="@/assets/imgs/robot_working.svg" alt="" srcset="">
    </div>
    <div class="container_maintenance__text">
      
      <b>{{$route.path.includes('movie') ? 'WORKING ON THIS SECTION...' : 'WORKING ON THIS PAGE...'}}</b>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
<style lang="scss">
  .container_maintenance{
    background-color: #f9fafb;
    &__img{
      width: 50%;
    }
    &__text{
      width: 50%;
      align-self: center;
      padding: 0 70px;
      b{
        color: rgb(19, 18, 18);
      }
    }
    @media screen and (min-width: 1200px){
    &__text{
        b{
          font-size: 80px;
        }
      }
    }
    @media screen and (min-width: 992px) and (max-width: 1200px){
    &__text{
        b{
          font-size: 60px;
        }
      }
    }
    @media screen and (min-width: 768px) and (max-width: 992px){
    &__text{
        b{
          font-size: 50px;
        }
      }
    }
    @media screen and (min-width: 576px) and (max-width: 768px){
    &__text{
        b{
          font-size: 40px;
        }
      }
    }
    @media screen and (max-width: 576px){
      &{
        display: inherit!important;
      }
      &__img{
        margin: 0 auto;
      }
      &__text{
        margin: 0 auto;
        b{
          font-size: 30px;
        }
      }
    }
  }
   
</style>