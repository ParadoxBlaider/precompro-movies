<template>
  <nav>
      <ul :class="classes">
            <router-link
                :to="title.url"
                v-for="title in titles"
                :key="title"
            >
                {{title.title}}
            </router-link>
        <div v-if="favorites" class="box_favorite">
            <div >
                ★
                179
            </div>
        </div>
      </ul>
  </nav>
</template>

<script>

export default {
    props:{
        titles:Array,
        classes: {
            type: String,
            default: ''
        },
        favorites:Boolean
    }
}
</script>