import { ref } from 'vue';

function getPostDetail(idpost) {
    const post = ref(null);
    const errorReq = ref(null);

    // Ambil data post untuk detail
    const getSinglePost = async () => {
        try {
            // Beri jeda sementara waktu
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 2500);
            });

            const response = await fetch(`http://localhost:3000/posts/${idpost}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });

            if (response.status === 200) {
                const datajson = await response.json();
                console.log(datajson);
                post.value = datajson;
            } else {
                throw new Error(`Data artikel tidak tersedia ${response.status}`);
            }
        } catch (err) {
            errorReq.value = err.message;
            console.warn(errorReq.value);
        }
    };

    return { getSinglePost, post, errorReq };
}

export default getPostDetail;
