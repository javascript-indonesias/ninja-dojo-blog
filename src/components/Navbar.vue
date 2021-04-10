<template>
    <header>
        <h1>The Dojo Blog</h1>
        <nav>
            <router-link :to="{ name: 'HomeBlog' }">Home</router-link>
            <router-link :to="{ name: 'CreatePost' }">Create Post</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

header h1 {
    color: #dfdfdf;
    font-size: 48px;
}

header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
}

header a.router-link-active {
    color: #444;
    font-weight: bold;
}
</style>
