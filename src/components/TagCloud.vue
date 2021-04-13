<template>
    <div class="tag-cloud">
        <h3>List Tags</h3>
        <div v-for="tag in listTags" :key="tag">
            <router-link
                :to="{
                    name: 'TagView',
                    params: {
                        tag: tag,
                    },
                }"
                >#{{ tag }}</router-link
            >
        </div>
    </div>
</template>

<script>
import filterTagData from '../composables/filterTagData';

export default {
    props: {
        posts: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    setup(props) {
        const { listTags } = filterTagData(props.posts);

        return { listTags };
    },
};
</script>

<style lang="scss">
.tag-cloud {
    padding: 10px;
}

.tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}

.tag-cloud div {
    display: inline-block;
    padding: 10px;
}

.tag-cloud a {
    color: #ccc;
    text-decoration: none;
}

.tag-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
}
</style>
