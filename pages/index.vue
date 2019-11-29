<template>
  <div class="container">
    <PostsLists />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PostsLists from '~/components/postsList'

export default {
  components: {
    Logo,
    PostsLists
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

 #b-card:hover {
        opacity: 0.5;
        cursor: pointer;
    }

.links {
  padding-top: 15px;
}
.nuxt-link-active {
  font-weight: 800;
  color: white;
  text-decoration: underline;
}
</style>
