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
                            <a href="https://github.com/Mafestire/Calculator.git"><i
                                    class="fa-brands fa-github"></i></a>

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
                                    class="fa-brands fa-github"></i></a>

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
                                    class="fa-brands fa-github"></i></a>
                            <br />
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
.projects {
    display: flex;
    justify-content: space-between;
    padding: 2px 10px;
    margin: 3rem;
    text-align: center;
    animation: in 1.5s ease-in;
    animation-delay: 2s;
}

@keyframes in {
    0% {
        transform: translateX(100vh) scale(0);
    }

    100% {
        transform: translateX(-10vh) scale(1);
    }
}

h1 {
    color: rgb(175, 175, 238);
    width: 15rem;
    margin-left: 30rem;
    padding-top: 10px;
    border-bottom: 1px solid rgb(175, 175, 238);
}

.car {
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid rgb(175, 175, 238);
    padding-bottom: 5px;
    color: rgb(175, 175, 238);
    transition: all 0.6s;
    transform-style: preserve-3d;
}

.flip-car {
    border: 2px solid #8a307f;
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
    padding-right: 2.5rem;
    width: 11rem;
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
    padding-left: 2rem;
    transform: rotateY(180deg);
}

.description:hover {
    color: rgb(175, 175, 238);
}

h5 {
    font-size: 1.5rem;
}

h6 {
    font-size: 1rem;
}

.latest {
    margin-bottom: 10px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
}

.links {
    display: flex;
    flex-direction: column;
}

.links a {
    color: rgb(175, 175, 238);
    font-size: 1rem;
}

.links a:hover {
    font-size: 2rem;
}

@media (max-width: 768px) {
    .projects {
        display: flex;
        flex-direction: column;
        width: 10rem;
    }

    .image,
    .description {
        width: 12rem;
    }

    .flip-car {
        margin-top: 25px;
        width: 12rem;
    }

    h1 {
        font-size: 18px;
        margin-left: 35px;
        width: 9rem;
    }

    img {
        width: 12rem;
    }
}
</style>