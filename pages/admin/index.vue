<template>
    <div class="container">
        <section class="new-post">
          <b-button class="my-2" variant="success"> <nuxt-link style="color:white" to="/new-post"> Create new post</nuxt-link> </b-button>
        </section>

        <section class="existing-posts">
            <h3><u>All Posts</u></h3>
            <hr>
            <PostsList />
        </section>
    </div>
</template>

<script>
import PostsList from '~/components/postsList'
import { timeout } from 'q'
export default {
    components:{
        PostsList
    },
    head() {
        return {
            title: 'Admin'
        }
    }
}
</script>