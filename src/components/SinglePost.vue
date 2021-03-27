<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ snippetParagraf }}</p>
    </div>
</template>

<script>
import { computed } from 'vue';

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

        return { snippetParagraf };
    },
};
</script>

<style lang="scss" scoped></style>
