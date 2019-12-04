<template>
        <div class="py-4 d-flex justfy-content-center flex-column" > 
    <div v-for="article in articles" v-bind:key="article.id">
    <b-card id="b-card">
      <nuxt-link to="/posts/1">
      <b-card-text>
        <p> {{article.description}} </p>
      </b-card-text>
      </nuxt-link>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PostsLists',
    created() {
     this.$store.dispatch('posts/getArticles');
    },
    computed: {
      articles: function () {
        return this.$store.state.posts.articles;
      }
    }
}
</script>