<template>
  <div class="container">
    <div class="py-4 d-flex justfy-content-center flex-column">
  <b-card id="b-card" img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <nuxt-link to="/posts/1">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
      </nuxt-link>
    </b-card>


    <b-card id="b-card" img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <nuxt-link to="/posts/1">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
      </nuxt-link>
    </b-card>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
