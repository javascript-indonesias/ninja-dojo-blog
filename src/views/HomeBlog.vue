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

const PostListComponent = defineAsyncComponent(() => import('../components/PostList.vue'));

export default {
    name: 'PropsComposition',
    components: {
        'post-list': PostListComponent,
    },
    setup() {
        const posts = ref([]);
        const errorReq = ref(null);
        const isPostShow = ref(true);

        const getDataBlog = async () => {
            try {
                const response = await fetch('http://localhost:3000/posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                });

                if (response.status === 200) {
                    const datajson = await response.json();
                    console.log(datajson);
                    posts.value = datajson;
                } else {
                    throw new Error(`Data tidak tersedia ${response.status}`);
                }
            } catch (err) {
                errorReq.value = err.message;
                console.warn(errorReq.value);
            }
        };

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
