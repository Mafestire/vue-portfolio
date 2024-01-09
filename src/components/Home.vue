<template>
    <section>
        <div class="wel">
            <div class="image">
                <img src="https://i.postimg.cc/4xgLG7J7/C11-Sibabalwe-Mafestire-1-removebg-preview.png
" alt="">
            </div>
            <div class="greet">
                <h1 class="hi"><span>Hello,</span> I am</h1>
                <p></p>
                <h1 class="who" style="color: aqua;">Sibabalwe Mafestire</h1>
                <h3>a Full Stack Developer</h3>
            </div>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.greet {
    color: #fff;
    text-align: center;
    margin-top: 5rem;
    animation: in 2s ease-in;
    font-family: 'Nunito Sans', sans-serif;
}

.hi {
    font-size: 4rem;
}

span{
    font-size: 3.5rem;
}

/* .who {
    font-size: 5rem;
    color: aqua;
} */

.wel {
    display: flex;
    flex-direction: row-reverse;
    background-color: #000;
    overflow: hidden;
    padding-top: 2rem;
    justify-content: space-around;
    font-family: "Nunito Sans", sans-serif;
}

.image {
    animation: come 2s ease-in;
    display: flex;
    align-items: center;
    margin-right: 15%; 
}

img {
    width: 24rem;
}

@media (width < 766px) {
    .greet {
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        font-size: 1.5rem;
        text-align: center;
        padding: 1rem 0rem;
    }

    .hi {
        font-size:1.5rem;
    }

    span{
        font-size: 1.8rem;
    }

    .image {
        display: flex;
        align-items: center;
        margin: 0;
        margin-left: auto;
        margin-right: auto;
    }

    img{
        width: 12rem;
    }

    .who {
        font-size: 2rem;
    }

    .wel {
        display: flex;
        flex-direction: column-reverse;
    }
}

@media (width > 767px) {
    .greet {
        margin-left: auto;
        margin-right: auto;
        font-size: 1.7rem;
        padding: 1rem 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 0rem;
    }

    .hi {
        font-size: 1.2rem;
    }

    .who {
        font-size: 2rem;
    }

    h1 {
        font-size: 1rem;
    }

    span{
        font-size: 1.5rem ;
    }

    .image {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin-right: 5%;
    }

    img{
        width: 18rem;
    }

    .wel {
        display: flex;
        justify-content: space-around;
    }
}
@media (width > 1010px) {
    .greet {
        margin-left: 15%;
        font-size: 1.7rem;
        padding: 1rem 0rem;
    }

    .hi {
        font-size: 2.5rem;
    }

    .who {
        font-size: 4rem;
    }

    h3 {
        font-size: 2.5rem;
    }

    .image {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin-right: 15%;
    }

    img{
        width: 24rem;
    }

    span{
        font-size: 3rem;
    }

    .wel {
        display: flex;
        justify-content: space-around;
    }
}

</style>