<template>
  <div class="container">
  
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo,
    
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
        cursor: pointer;
    }

.links {
  padding-top: 15px;
}
.nuxt-link-active {
  color: white;
  text-decoration: underline;
}
</style>
