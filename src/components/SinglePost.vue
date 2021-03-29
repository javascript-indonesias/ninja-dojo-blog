<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
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

<style lang="scss"></style>
