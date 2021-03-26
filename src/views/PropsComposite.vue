<template>
    <div class="home">
        <h1>Home</h1>
        <post-list :posts="posts"></post-list>
    </div>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';

const PostListComponent = defineAsyncComponent(() => import('../components/PostList.vue'));

export default {
    name: 'PropsComposition',
    components: {
        'post-list': PostListComponent,
    },
    setup() {
        const posts = ref([
            {
                title: 'Selamat datang di blog',
                body:
                    'In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. This means you should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console.',
                id: 1,
            },
            {
                title: 'Makan sate ayam',
                body:
                    'Tes props body 2 In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. This means you should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console. 1',
                id: 1,
            },
        ]);

        return { posts };
    },
};
</script>

<style lang="scss"></style>
