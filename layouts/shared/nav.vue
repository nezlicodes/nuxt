<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><nuxt-link to="/"> Ape</nuxt-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
 <b-nav-item > <nuxt-link to="/posts"> Posts</nuxt-link></b-nav-item>
     <b-nav-item><nuxt-link to="/about"> About</nuxt-link></b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
export default {
    name:'Nav'
}
</script>

