<template>
    <div class="create">
        <form @submit.prevent="sendSubmitDataBlog()">
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
    <div v-if="errorReq">
        Gagal mengirim postingan blog terbaru
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import postCreateBlog from '../composables/postCreateBlog';

export default {
    name: 'CreatePost',
    setup() {
        const stringTitle = ref('');
        const stringBody = ref('');
        const stringTag = ref('');
        const listTags = ref([]);

        const router = useRouter();

        const { isRequestSucceed, errorReq, sendBlogPost } = postCreateBlog();

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

        const sendSubmitDataBlog = async () => {
            const postData = {
                title: stringTitle.value,
                body: stringBody.value,
                tags: listTags.value,
            };

            // Kirim data ke server, dengan Composables
            // Composition API async await
            await sendBlogPost(postData);

            if (isRequestSucceed.value) {
                // navigasi ke halaman utama dengan home router
                console.log('Request telah sukses');
                router.push({ name: 'HomeBlog' });
            } else {
                console.log(`Terjadi error request ${errorReq.value}`);
            }
        };

        return {
            stringTitle,
            stringBody,
            stringTag,
            listTags,
            addTagPost,
            sendSubmitDataBlog,
            isRequestSucceed,
            errorReq,
            sendBlogPost,
        };
    },
};
</script>

<style lang="scss" src="./CreatePost.scss"></style>
