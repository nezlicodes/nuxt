<template>
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
</template>

<script>
export default {
    name: 'PostsLists',
    created() {
     
    }
}
</script>