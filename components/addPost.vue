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
                       <!--   <div class="buttons d-flex">
                             <button class="btn" @click.prevent="bold = !bold"><font-awesome-icon :icon="['fas', 'bold']"/></button>
                             <button class="btn" @click.prevent="underline = !underline"><font-awesome-icon :icon="['fas', 'underline']"/></button>
                             <button class="btn" @click.prevent="underline = !underline"><font-awesome-icon :icon="['fas', 'heading']"/></button>
                         </div> -->
                        <textarea type="text" name="content" placeholder="type some html here" id="content" rows="10" v-bind:class="{'bold': bold, 'underline': underline}" v-model="newPost.content" c class="form-control textarea"> </textarea>
                    </div>
                         <div class="card-body"> 
            <p class="card-text"  v-html="newPost.content">
            
            </p>
             </div>
                    <div class="form-group">
                        <b-button variant="danger" @click="onCancel()">Cancel</b-button>
                        <b-button variant="success" @click="onSave()"> Post </b-button>
                    </div>
                </form>
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
            },
            bold: false,
            underline:false
        }
    },
    methods: {
        onCancel: function () {
            this.$router.push('/admin')
        },
        onSave: function() {
            alert(this.newPost)
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