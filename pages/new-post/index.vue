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
                        <input type="text" name="title" id="title" class="form-control">
                    </div>
                     <div class="form-group">
                        <lable class="label" for="desciption">Description</lable>
                        <input type="text" name="description" id="description" class="form-control">
                    </div>
                     <div class="form-group">
                        <lable class="label" for="content">Content</lable>
                        <textarea type="text" name="content" id="content" rows="10" class="form-control"> </textarea>
                    </div>
                    <div class="form-group">
                        <b-button variant="success"> Post </b-button>
                    </div>
                </form>
            </b>
        </b-card>
    </div>
</template>