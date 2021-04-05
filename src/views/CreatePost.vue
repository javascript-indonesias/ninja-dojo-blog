<template>
    <div class="create">
        <form action="">
            <label for="inputTitle">Title</label>
            <input
                type="text"
                required
                name="inputTitle"
                id="inputTitle"
                placeholder="masukkan judul blog"
                v-model="stringTitle"
            />

            <label for="inputContent">Content Blog</label>
            <textarea
                name="inputContent"
                id="inputContent"
                cols="30"
                rows="10"
                placeholder="masukkan isi blog"
                v-model="stringBody"
            ></textarea>

            <label for="inputTag">Tags (tekan enter untuk memasukkan tag)</label>
            <input
                type="text"
                placeholder="masukkan tag blog"
                id="inputTag"
                name="inputTag"
                v-model="stringTag"
                @keydown.enter.prevent="addTagPost()"
            />
            <div v-for="tag in listTags" :key="tag" class="pill">#{{ tag }}</div>

            <button>Kirim Blog Post</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'CreatePost',
    setup() {
        const stringTitle = ref('');
        const stringBody = ref('');
        const stringTag = ref('');
        const listTags = ref([]);

        // https://www.samanthaming.com/tidbits/81-how-to-check-if-array-includes-a-value/
        const addTagPost = () => {
            const isTagAvailable = listTags.value.includes(stringTag.value);
            if (!isTagAvailable) {
                // hapus semua whitespace
                stringTag.value = stringTag.value.replace(/\s/g, '');
                listTags.value.push(stringTag.value);
            }
            stringTag.value = '';
        };

        return { stringTitle, stringBody, stringTag, listTags, addTagPost };
    },
};
</script>

<style lang="scss" src="./CreatePost.scss"></style>
