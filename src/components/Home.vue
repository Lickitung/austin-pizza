<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>Welcome to Austin Pizza!</h1>
                <h2>Feeling hungry?</h2>
                <button class="btn btn-success">Let's order!</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #home {
        background: url('../../src/assets/pizza.jpg');
        height: 800px;
        padding: 10%;
    }

    h1, h2 {
        margin: 6%;
    }

    .background {
        background: #eee;
        opacity: 0.8;
        max-width: 65%;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>