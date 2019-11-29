<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Ape</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
 <b-nav-item href="/posts">Posts</b-nav-item>
     <b-nav-item href="/about">About</b-nav-item>

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