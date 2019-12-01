<template>
        <div class="py-4 d-flex justfy-content-center flex-column" > 
    <div v-for="article in articles" v-bind:key="article.id">
    <b-card id="b-card" img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <nuxt-link to="/posts/1">
      <b-card-text>
        <div v-html="article.content"></div>
      </b-card-text>
      </nuxt-link>
    </b-card>
     <b-button class="btn-danger">Delete</b-button>
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