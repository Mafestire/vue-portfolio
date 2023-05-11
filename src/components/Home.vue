<template>
    <section>
        <div class="wel">
            <div class="image">
                <img src="https://i.postimg.cc/nrFsMdyL/C11-Sibabalwe-Mafestire-1-removebg-preview.png" alt="">
            </div>
            <div class="greet">
                <h1> <span id="first">Hello! </span> <br> I am <br><span id="name">Sibabalwe Mafestire</span> <br>a <br>
                    <span id="name">Web developer</span> Welcome To My Portfolio
                </h1>
            </div>
            <!-- <div class="back">
                <p class="one">HTML:5 | height: 184px</p>
                <p class="three">CSS | .eventListiner</p>
                <p class="five">Color: #222; | JSON</p>
                <p class="six">QuerySelector | Vue</p>
                <p class="eight">Bootstrap | Footer</p>
            </div> -->
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.greet {
    width: 20rem;
    color: brown;
    text-align: center;
    padding: 1px 4px;
    margin-left: auto;
    margin-right: 25rem;
    margin-top: -2rem;
    animation: in 2s ease-in;
}

@keyframes in {
    0% {
        transform: translateX(50vh) scale(0);
    }

    100% {
        transform: translateX(0vh) scale(1);
    }
}

#first {
    font-size: 4rem;
}

#name {
    font-size: 4rem;
}

h1 {
    font-size: 2rem;
}

.wel {
    display: flex;
    transform: translateY(10%);
    justify-content: space-around;
    margin-top: 4rem;
    font-family: 'Lobster Two', cursive;
}

.image {
    z-index: 4;
    transform: translateX(50%);
    margin-right: 15rem;
    animation: come 2s ease-in;
}

@keyframes come {
    0% {
        transform: translateX(-50vh) scale(0);
    }

    100% {
        transform: translateX(30vh) scale(1);
    }
}

img {
    width: 22rem;
    margin-top: 0;
    margin-left: 5rem;
}

@media (width < 900px) {
    .greet {
        width: 25rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3rem;
        font-size: 2rem;
        text-align: center;
    }

    .image{
        width: 20rem;
    }

    #first {
        font-size: 2rem;
    }

    #name {
        font-size: 2rem;
    }

    h1 {
        font-size: 1.5rem;
    }

    .image img {
        width: 15rem;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }

    .wel {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
    }
}

@media (width < 600px) {
    .image img {
        margin-left: auto;
        margin-right: auto;
        margin-top: 0rem;
    }

    .greet {
        font-size: 1rem;
        box-shadow: none;
        text-align: center;
        border: none;
        width: 20rem;
        margin-top: -1.5rem;
    }

    .wel {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>