<template>
    <div class="home">
        <h1>Home</h1>
        <div class="error" v-if="errorReq">{{ errorReq }}</div>
        <div v-if="posts.length > 0" class="layout">
            <post-list :posts="posts" v-if="isPostShow"></post-list>
            <tagscloud-view :posts="posts"></tagscloud-view>
        </div>
        <div v-else>
            <spinners></spinners>
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

const SpinnerComponent = defineAsyncComponent(() => import('../components/Spinner.vue'));

const TagCloudComponent = defineAsyncComponent(() => import('../components/TagCloud.vue'));

export default {
    name: 'PropsComposition',
    components: {
        'post-list': PostListComponent,
        spinners: SpinnerComponent,
        'tagscloud-view': TagCloudComponent,
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

<style lang="scss">
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

.layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
}

.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>
