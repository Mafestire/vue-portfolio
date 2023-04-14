<template>
    <div class="latest">
        <h1>Latest Projects</h1>
        <div class="projects">
            <div class="flip-car one">
                <div class="car">
                    <div class="image">
                        <img src="https://i.postimg.cc/rshyZMxr/calculator.png" alt="">
                    </div>
                    <div class="description">
                        <h5 id="name">Calculator</h5>
                        <h6 id="brief">Standard to simplify your calculations</h6>

                        <div class="links">
                            <a href="https://github.com/Mafestire/Calculator.git"><i class="fa-brands fa-github"> | GitHub</i></a>

                            <a href="https://sibabalwe-calculator.netlify.app"><i class="fa-solid fa-link"> | Netlify</i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flip-car two">
                <div class="car">

                    <div class="image">
                        <img src="https://i.postimg.cc/VvGWkP99/Screenshot-2023-01-10-110752.png" alt="">
                    </div>
                    <div class="description">
                        <h5 id="name">BMI Calculator</h5>
                        <h6 id="brief">Standard to simplify your calculations</h6>

                        <div class="links">
                            <a href="https://github.com/Mafestire/BIM-Calculator.git"><i
                                    class="fa-brands fa-github"> | GitHub</i></a>

                            <a href="https://sibabalwe-bmi-calculator.netlify.app"><i class="fa-solid fa-link"> | Netlify</i></a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="flip-car three">
                <div class="car">
                    <div class="image">
                        <img src="https://i.postimg.cc/8PrbS5Xw/Screenshot-20221205-100323.png" alt="">
                    </div>
                    <div class="description">
                        <h5 id="name">Point of Sale system</h5>
                        <h6 id="brief">Standard to simplify your calculations</h6>

                        <div class="links">
                            <a href="https://github.com/Mafestire/Point-of-Sale-system.git"><i
                                    class="fa-brands fa-github"> | GitHub</i></a>
                            <!-- <br /> -->
                            <a href="https://seababags.netlify.app"><i class="fa-solid fa-link"> | Netlify</i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <button> <router-link id="link" to="/projects">View More...</router-link> </button>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.latest {
    margin-bottom: 10px;
    margin-top: 9rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    padding-bottom: 15px;
    height: 80vh;
    font-family: 'Lobster Two', cursive;

}
.projects {
    display: flex;
    justify-content: space-between;
    padding: 2px 10px;
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: center;
    margin-top: 5rem;
}

@keyframes rig {
    0% {
        transform: translateX(-100vh) scale(0);
    }

    100% {
        transform: translateX(0vh) scale(1);
    }
}
@keyframes down {
    0% {
        transform: translateY(100vh) scale(0);
    }

    100% {
        transform: translateY(0vh) scale(1);
    }
}
@keyframes lef {
    0% {
        transform: translateX(100vh) scale(0);
    }

    100% {
        transform: translateX(0vh) scale(1);
    }
}

.one{
    animation: rig 4s ease-in
}

.two{
    animation: down 4s ease-in
}

.three{
    animation: lef 4s ease-in
}

h1 {
    color: brown;
    margin-left: auto;
    margin-right: auto;
    width: 20rem;
    margin-top: 0rem;
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
    width: 20rem;
    padding: 5px 6px;
    height: 18rem;
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
    height: 18;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

img {
    width: 19.1rem;
    height: 17.2rem;
}

.description {
    text-align: center;
    transform: rotateY(180deg);
    width: 19rem;
    height: 15rem;
    margin-top: 3rem;
    margin-bottom: auto;
}

h5 {
    font-size: 2rem;
}

h6 {
    font-size: 1.5rem;
}



.links {
    display: flex;
    flex-direction: column;
}

.links a {
    font-size: 1rem;
text-decoration: none;
margin-top: 1rem;
color: brown;
}

.links a:hover {
    font-size: 1.5rem;
}

button{
    border: 2px solid brown;
    transform: translateX(913%);
    margin-top: 4rem;
    background-color: burlywood;
    font-size: 1.3rem;
}

#link{
 color: brown;
 text-decoration: none;
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