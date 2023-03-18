<template>
    <section>

        <div class= "image">
            <img src="@/assets/404-V2.png" alt="">
        </div>
        <ul>
            <router-link to="/">Go to main page</router-link>
        </ul>
    </section>
</template>

<script>
export default{
    name: 'NotFound'
}
</script>

<style scoped>
    section{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }
    .image{
        max-width: 500px;
        height: 400px;
    }
    .image img{
        width: 100%;
        height: 100%;
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
</style>