<template>
    <div class="tag">
        <div v-if="errorReq">{{ errorReq }}</div>
        <div v-if="posts.length > 0" class="layout">
            <postlist-component :posts="listPostWithTag"></postlist-component>
            <tagcloud-component :posts="posts"></tagcloud-component>
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
import { defineAsyncComponent, computed, onMounted, watch, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import getPostData from '../composables/getPostData';

const SpinnerComponent = defineAsyncComponent(() => import('../components/Spinner.vue'));
const PostListComponent = defineAsyncComponent(() => import('../components/PostList.vue'));
const TagCloudComponent = defineAsyncComponent(() => import('../components/TagCloud.vue'));

export default {
    props: {
        tag: {
            type: String,
            defaul: '',
        },
    },
    components: {
        'spinner-component': SpinnerComponent,
        'postlist-component': PostListComponent,
        'tagcloud-component': TagCloudComponent,
    },
    setup(props) {
        const route = useRoute();
        const { tag: stringTag } = toRefs(props);
        const { getDataBlog, posts, errorReq } = getPostData();

        const listPostWithTag = computed(() => {
            const filteredPost = posts.value.filter((postItem) => {
                return postItem.tags.includes(stringTag.value);
                // return postItem.tags.includes(route.params.tag);
            });
            console.log('Update post data computed', stringTag.value, route.params.tag);
            return filteredPost;
        });

        onMounted(() => {
            getDataBlog();
        });

        watch(stringTag, (newValue, oldValue) => {
            console.log('tag parameter router', newValue, oldValue);
        });

        return { getDataBlog, posts, errorReq, listPostWithTag };
    },
};
</script>

<style lang="scss">
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>
