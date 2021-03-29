import { ref } from 'vue';

const getPostsData = () => {
    const posts = ref([]);
    const errorReq = ref(null);

    const getDataBlog = async () => {
        try {
            const response = await fetch('http://localhost:3000/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });

            if (response.status === 200) {
                const datajson = await response.json();
                console.log(datajson);
                posts.value = datajson;
            } else {
                throw new Error(`Data tidak tersedia ${response.status}`);
            }
        } catch (err) {
            errorReq.value = err.message;
            console.warn(errorReq.value);
        }
    };

    return { getDataBlog, posts, errorReq };
};

export default getPostsData;
