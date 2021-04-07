import { ref } from 'vue';

const postCreateBlog = () => {
    const isRequestSucceed = ref(false);
    const errorReq = ref(null);

    const sendBlogPost = async (dataObject) => {
        try {
            const response = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(dataObject),
            });

            if (response.status >= 200 && response.status <= 205) {
                isRequestSucceed.value = true;
            } else {
                isRequestSucceed.value = false;
                throw new Error(`Error request data ${response.status}`);
            }
        } catch (err) {
            errorReq.value = err.message;
            isRequestSucceed.value = false;
            console.warn(errorReq.value);
        }
    };

    return { isRequestSucceed, errorReq, sendBlogPost };
};

export default postCreateBlog;
