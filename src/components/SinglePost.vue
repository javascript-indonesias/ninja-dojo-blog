<template>
    <div class="post">
        <router-link :to="{ name: 'DetailBlog', params: { id: post.id } }">
            <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ snippetParagraf }}</p>
        <span v-for="tag in postTags" :key="tag"> #{{ tag }} </span>
    </div>
</template>

<script>
import { computed, ref, toRefs } from 'vue';

export default {
    props: {
        post: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    setup(props) {
        // Menggunakan props dengan cara menambahkan parameter props di setup function
        const snippetParagraf = computed(() => {
            return `${props.post.body.substring(0, 100)}...`;
        });

        // https://stackoverflow.com/questions/64926354/vue-3-watch-doesn-t-work-if-i-watch-a-destructured-prop
        const postTags = ref([]);
        const { post } = toRefs(props);
        postTags.value = post.value.tags;

        return { snippetParagraf, postTags };
    },
};
</script>

<style lang="scss">
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}

.post h3::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
}
</style>
