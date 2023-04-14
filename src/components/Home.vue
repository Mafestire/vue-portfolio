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
        transform: translateX(-100vh) scale(0);
    }

    100% {
        transform: translateX(0vh) scale(1);
    }
}

img {
    width: 22rem;
    margin-top: 0;
    margin-left: 5rem;
}

@media (width < 700px) {
    .greet {
        width: 20rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3rem;
        font-size: 2rem;
        text-align: center;
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
    }

    .back p {
        display: none;
    }

    .wel {
        display: flex;
        flex-direction: column-reverse;
    }
}

@media (width < 400px) {
    img {
        margin-left: 2rem;
        margin-top: 9rem;
    }

    .greet {
        font-size: 1rem;
        box-shadow: none;
        text-align: center;
        border: none;
        width: 20rem;

    }

    .wel {
        display: flex;
        flex-direction: column-reverse;
    }
}</style>