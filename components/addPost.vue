<template>
    <div>
                <b-card>
            <b-card-header>
                <h2 class="card-title">New Post</h2>
            </b-card-header>
            <div class="card-body">
                <form action="" method="post">
                    <div class="form-group">
                        <label class="label" for="title">Title</label>
                        <input type="text" name="title" id="title" v-model="newPost.title" class="form-control">
                    </div>
                     <div class="form-group">
                        <label class="label" for="desciption">Description</label>
                        <input type="text" name="description" id="description" v-model="newPost.description" class="form-control">
                    </div>
                     <div class="form-group">
                         <label class="label" for="content">Content</label>
                       <!--   <div class="buttons d-flex">
                             <button class="btn" @click.prevent="bold = !bold"><font-awesome-icon :icon="['fas', 'bold']"/></button>
                             <button class="btn" @click.prevent="underline = !underline"><font-awesome-icon :icon="['fas', 'underline']"/></button>
                             <button class="btn" @click.prevent="underline = !underline"><font-awesome-icon :icon="['fas', 'heading']"/></button>
                         </div> -->
                        <textarea type="text" name="content" placeholder="type some html here" id="content" rows="10" v-bind:class="{'bold': bold, 'underline': underline}" v-model="newPost.content" c class="form-control textarea"> </textarea>
                    </div>
                         <div class="card-body"> 
            <div class="card-text"  v-html="newPost.content">
            
            </div>
             </div>
                    <div class="form-group">
                        <b-button variant="danger" @click="onCancel()">Cancel</b-button>
                        <b-button variant="success" @click="onSave()"> Post </b-button>
                    </div>
                </form>
            </div>
        </b-card>
   
    </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {

    name: 'addPost',
    data() {
        return {
            newPost: {
                title: '',
                description:'',
                content:''
            },
            bold: false,
            underline:false
        }
    },
    methods: {
        onCancel: function () {
            // this.$router.push('/admin')
        },
        onSave: function() {
            console.log(this.newPost)
            this.$store.dispatch('posts/postNewArticle', this.newPost)
        }

    }
}
</script>

<style>
    .bold {
       font-weight: bold
    }
    .underline{
        text-decoration: underline;
    }
    .buttons {
        border: solid 2px ghostwhite
    }
</style>