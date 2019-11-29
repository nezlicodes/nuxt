<template>
    <div class="container">
        <h3>Posts page</h3>
        <PostsLists />
    </div>
</template>

<script>
import PostsLists from '~/components/postsList';
export default {
    components: {
        PostsLists
    },
    head() {
        return {
            title: 'Post single'
        }
    }
}
</script>

<style lang="css">
  
</style>