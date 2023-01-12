<template>
    <section>
        <div class="greet">
            <h1> <span id="first">Hello! </span> <br> I am <br><span id="name">Sibabalwe Mafestire</span> <br>a <br>
                <span id="name">Web developer</span> Welcome To My Portfolio
            </h1>
        </div>

        <div class="wel">
            <div class="image">
                <img src="https://i.postimg.cc/nrFsMdyL/C11-Sibabalwe-Mafestire-1-removebg-preview.png" alt="">
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
    width: 15rem;
    color: #79a7d3;
    text-align: center;
    padding: 1px 4px;
    margin-left: 90px;
    margin-top: 80px;
    box-shadow: 0 8px 32px 0 #8a307f;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

#first {
    font-size: 34px;
}

#name {
    font-size: 38px;
}

h1 {
    font-size: 20px;
}

/* .back {
    width: 18rem;
    height: 13rem;
    text-align: center;
    transform: translateY(50%);

} */

/* .back p {
    color: rgb(90, 88, 88);
    margin-right: 50px;
} */

section {
    border-bottom: 2px solid rgb(175, 175, 238);
    padding-top: 40px;
}

.wel {
    display: flex;
    justify-content: center;
    transform: translateY(-50%);
    margin-bottom: -7rem;
}

.image {
    z-index: 4;
    transform: translateX(50%);
    margin-right: 12rem;
}

.image img {
    width: 18rem;
    margin-top: 80px;
}

@media (max-width: 768px) {
    .greet {
        width: 5rem;
        margin-left: 5px;
        margin-top: 10px;
    }

    .image img {
        width: 9rem;
        margin-left: -30px;
    }

    .back p {
        display: none;
    }
}
</style>