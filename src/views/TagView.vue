<template>
    <div class="tag">
        <div v-if="errorReq">{{ errorReq }}</div>
        <div v-if="posts.length > 0">
            <postlist-component :posts="listPostWithTag"></postlist-component>
        </div>
        <div v-else>
            <spinner-component></spinner-component>
        </div>
    </div>
</template>

<script>
// Membuat tag route untuk menampung hasil pencarian berdasarkan tag
// Di dalam tag component, tampilkan hasil pencarian tag route
// Menggunakan computed property untuk mengembalikan semua nilai tag
// Menggunakan useRoute untuk mengakses parameter router
// Menggunakan postList component untuk menampilkan hasil pencarian tag
// Tampilkan spinner setelah data selesai diproses
import { defineAsyncComponent, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import getPostData from '../composables/getPostData';

const SpinnerComponent = defineAsyncComponent(() => import('../components/Spinner.vue'));
const PostListComponent = defineAsyncComponent(() => import('../components/PostList.vue'));

export default {
    components: {
        'spinner-component': SpinnerComponent,
        'postlist-component': PostListComponent,
    },
    setup() {
        const route = useRoute();
        const stringTag = route.params.tag;
        const { getDataBlog, posts, errorReq } = getPostData();

        const listPostWithTag = computed(() => {
            const filteredPost = posts.value.filter((postItem) => {
                return postItem.tags.includes(stringTag);
            });

            return filteredPost;
        });

        onMounted(() => {
            getDataBlog();
        });

        return { getDataBlog, posts, errorReq, listPostWithTag };
    },
};
</script>

<style lang="scss" scoped></style>
