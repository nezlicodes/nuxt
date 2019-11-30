<template>
    <div>
                <b-card>
            <b-card-header>
                <h2 class="card-title">New Post</h2>
            </b-card-header>
            <b class="card-body">
                <form action="" method="post">
                    <div class="form-group">
                        <lable class="label" for="title">Title</lable>
                        <input type="text" name="title" id="title" v-model="newPost.title" class="form-control">
                    </div>
                     <div class="form-group">
                        <lable class="label" for="desciption">Description</lable>
                        <input type="text" name="description" id="description" v-model="newPost.description" class="form-control">
                    </div>
                     <div class="form-group">
                        <label class="label" for="content">Content</label>
                        <textarea type="text" name="content" id="content" rows="10" v-model="newPost.content" c class="form-control textarea"> </textarea>
                    </div>
                    <div class="form-group">
                        <b-button variant="danger" @click="onCancel()">Cancel</b-button>
                        <b-button variant="success" @click="onSave()"> Post </b-button>
                    </div>
                </form>
                <font-awesome-icon :icon="['fab', 'linkedin']"/>
            </b>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'addPost',
    data() {
        return {
            newPost: {
                title: '',
                description:'',
                content:''
            }
        }
    },
    methods: {
        onCancel: function () {
            this.$router.push('/admin')
        },
        onSave: function() {
            console.log(this.newPost)
        }
    }
}
</script>

<style>
    .textarea {
       font-weight: bold
    }
</style>