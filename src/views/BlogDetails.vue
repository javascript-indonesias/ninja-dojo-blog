<template>
    <div v-if="errorReq">{{ errorReq }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import getPostDetail from '../composables/getPostDetail';

export default {
    props: {
        id: {
            type: String,
            default: '0',
        },
    },
    setup(props) {
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
