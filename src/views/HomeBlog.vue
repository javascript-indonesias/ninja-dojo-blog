<template>
    <div class="home">
        <h1>Home</h1>
        <div class="error" v-if="errorReq">{{ errorReq }}</div>
        <div v-if="posts.length > 0">
            <post-list :posts="posts" v-if="isPostShow"></post-list>
        </div>
        <div v-else>
            Memuat halaman...
        </div>

        <div v-if="false">
            <button @click="togglePost()">Toggle Post</button>
        </div>
        <div v-if="false">
            <button @click="removePostOne()">Remove Post One</button>
        </div>
    </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import getPostsData from '../composables/getPostData';

const PostListComponent = defineAsyncComponent(() => import('../components/PostList.vue'));

export default {
    name: 'PropsComposition',
    components: {
        'post-list': PostListComponent,
    },
    setup() {
        const isPostShow = ref(true);

        // Menggunakan destructuring untuk ambil data ref dan func
        const { getDataBlog, posts, errorReq } = getPostsData();

        const togglePost = () => {
            isPostShow.value = !isPostShow.value;
        };

        const removePostOne = () => {
            posts.value.pop();
        };

        onMounted(() => {
            getDataBlog();
        });

        return { posts, isPostShow, togglePost, removePostOne, errorReq, getDataBlog };
    },
};
</script>

<style lang="scss"></style>
