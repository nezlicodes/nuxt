<template>
    <div class="container">
        <h2>Single post</h2>
        <div v-html="article.content"></div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Posts'
        }
    }
}
</script>