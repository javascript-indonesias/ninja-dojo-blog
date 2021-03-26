<template>
    <div class="post-list">
        <div v-for="(post, index) in posts" :key="index">
            <single-post :post="post"></single-post>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

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
        console.log(props.posts);
        return {};
    },
};
</script>

<style lang="scss"></style>
