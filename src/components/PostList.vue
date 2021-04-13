<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <single-post :post="post"></single-post>
        </div>
    </div>
</template>

<script>
// Penggunaan lifecycle hooks
// https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html
import { defineAsyncComponent, onBeforeMount, onMounted, onUnmounted, onUpdated } from 'vue';

const singlePostComponent = defineAsyncComponent(() => import('./SinglePost.vue'));

export default {
    props: {
        posts: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    components: {
        'single-post': singlePostComponent,
    },
    setup(props) {
        // Menggunakan props dengan cara menambahkan parameter props di setup function
        console.log(props.posts);

        onBeforeMount(() => {
            console.log('Sebelum component mounted');
        });

        onMounted(() => {
            console.log('Component mounted');
        });

        onUpdated(() => {
            console.log('Component updated');
        });

        onUnmounted(() => {
            console.log('Component unmounted');
        });
        return {};
    },
};
</script>

<style lang="scss"></style>
