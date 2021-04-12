<template>
    <div v-if="errorReq">{{ errorReq }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>
        <spinner></spinner>
    </div>
</template>

<script>
import { onMounted, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import getPostDetail from '../composables/getPostDetail';

const SpinnerComponent = defineAsyncComponent(() => import('../components/Spinner.vue'));

export default {
    props: {
        id: {
            type: String,
            default: '0',
        },
    },
    components: {
        spinner: SpinnerComponent,
    },
    setup(props) {
        const route = useRoute();
        console.log(route);
        const propsId = route.params.id;

        console.log('Post id', propsId);
        const { getSinglePost, post, errorReq } = getPostDetail(props.id);

        onMounted(() => {
            getSinglePost();
        });

        return { getSinglePost, post, errorReq };
    },
};
</script>

<style lang="scss">
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}
</style>
