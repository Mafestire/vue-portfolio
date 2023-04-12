<template>
    <div class="latest">
        <h1>Latest Projects</h1>
        <div class="projects">
            <div class="flip-car">
                <div class="car">
                    <div class="image">
                        <img src="https://i.postimg.cc/rshyZMxr/calculator.png" alt="">
                    </div>
                    <div class="description">
                        <h5 id="name">Calculator</h5>
                        <h6 id="brief">Standard to simplify your calculations</h6>

                        <div class="links">
                            <a href="https://github.com/Mafestire/Calculator.git"><i class="fa-brands fa-github">GitHub</i></a>

                            <a href="https://sibabalwe-calculator.netlify.app">netlify</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flip-car">
                <div class="car">

                    <div class="image">
                        <img src="https://i.postimg.cc/VvGWkP99/Screenshot-2023-01-10-110752.png" alt="">
                    </div>
                    <div class="description">
                        <h5 id="name">BMI Calculator</h5>
                        <h6 id="brief">Standard to simplify your calculations</h6>

                        <div class="links">
                            <a href="https://github.com/Mafestire/BIM-Calculator.git"><i
                                    class="fa-brands fa-github">GitHub</i></a>

                            <a href="https://sibabalwe-bmi-calculator.netlify.app">netlify</a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="flip-car">
                <div class="car">
                    <div class="image">
                        <img src="https://i.postimg.cc/8PrbS5Xw/Screenshot-20221205-100323.png" alt="">
                    </div>
                    <div class="description">
                        <h5 id="name">Point of Sale system</h5>
                        <h6 id="brief">Standard to simplify your calculations</h6>

                        <div class="links">
                            <a href="https://github.com/Mafestire/Point-of-Sale-system.git"><i
                                    class="fa-brands fa-github">GitHub</i></a>
                            <!-- <br /> -->
                            <a href="https://seababags.netlify.app">Netlify</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.latest {
    margin-bottom: 10px;
    margin-top: 10rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    padding-bottom: 15px;
    animation: in 4s ease-in;
}
.projects {
    display: flex;
    justify-content: space-between;
    padding: 2px 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

@keyframes in {
    0% {
        transform: translateX(100vh) scale(0);
    }

    100% {
        transform: translateX(0vh) scale(1);
    }
}

h1 {
    color: brown;
    margin-left: auto;
    margin-right: auto;
    width: 20rem;
    text-align: center;
    border-bottom: 2px solid brown;
}

.car {
    width: 100%;
    height: 100%;
    position: relative;
    border: 2px solid brown;
    padding-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    color: brown;
    transition: all 0.6s;
    transform-style: preserve-3d;
}

.flip-car {
    width: 15.8rem;
    padding: 5px 6px;
    height: 14rem;
    position: relative;
    text-align: center;
    transition: all .5s;
    transform-style: preserve-3d;
}

.flip-car:hover .car {
    transform: rotateY(180deg);
    transition: transform 0.6s;
}

.image,
.description {
    position: absolute;
    text-align: center;
    height: 13rem;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

img {
    width: 15rem;
    height: 13rem;
}

.description {
    text-align: center;
    transform: rotateY(180deg);
    width: 15rem;
}

h5 {
    font-size: 2rem;
}

h6 {
    font-size: 1.2rem;
}



.links {
    display: flex;
    flex-direction: column;
}

.links a {
    font-size: 1rem;
text-decoration: none;
}

.links a:hover {
    font-size: 1.5rem;
}

@media (width < 576px) {
    .projects {
        display: flex;
        flex-direction: column;
        width: 20rem;
        margin-left: auto;
        margin-right: auto;
    }

    .image,
    .description {
        width: 100%;
    }

    .description{
        margin-left: 0rem;
    }

    .flip-car {
        margin-top: 25px;
        width: 18rem;
    }

    h1 {
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
        width: 14rem;
        text-align: center;
    }

    /* img {
        width: 12rem;
    } */
}
</style>