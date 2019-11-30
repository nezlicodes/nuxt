<template>
    <div>
        <b-navbar toggleable="lg" variant="warning">
    <b-navbar-brand><nuxt-link to="/"> Ape</nuxt-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
 <b-nav-item class="nav-item"> <nuxt-link to="/posts"> Posts</nuxt-link></b-nav-item>
     <b-nav-item class="nav-item" ><nuxt-link to="/about"> About</nuxt-link></b-nav-item>
      <b-nav-item class="nav-item"><nuxt-link to="/admin"> Admin</nuxt-link></b-nav-item>


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


<style lang="css">
  .nav-item{
    font-size: 1.3rem;
  }
</style>