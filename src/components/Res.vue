<template>
    <div>
        <div class="skills">
            <div class="top">
                <h1 class="sl">Skills</h1>
                <h2>"An investment in knowledge always pays the best interest."</h2>
                <h2 class="Q"> -Benjamin Franklin</h2>
            </div>
            <div class="progress">
                <div class="back">
                    <li>
                        <h3>html</h3>
                        <span class="bar"><span class="html"></span></span>
                    </li>
                    <li>
                        <h3>JavaScript</h3>
                        <span class="bar"><span class="javascript"></span></span>
                    </li>
                    <li>
                        <h3>MySQL</h3>
                        <span class="bar"><span class="mysql"></span></span>
                    </li>
                    <li>
                        <h3>Node js</h3>
                        <span class="bar"><span class="node"></span></span>
                    </li>

                </div>

                <div class="front">
                    <li>
                        <h3>CSS</h3>
                        <span class="bar"><span class="css"></span></span>
                    </li>
                    <li>
                        <h3>Bootstrap</h3>
                        <span class="bar"><span class="bootstrap"></span></span>
                    </li>
                    <li>
                        <h3>Vue 3</h3>
                        <span class="bar"><span class="vue"></span></span>
                    </li>
                    <li>
                        <h3>UI/UX</h3>
                        <span class="bar"><span class="ui-ux"></span></span>
                    </li>
                    <li>
                        <h3>WordPress</h3>
                        <span class="bar"><span class="wordpress"></span></span>
                    </li>

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
/* Skills */
.skills {
    padding: 5rem, 10rem;
    margin-top: 4rem;
    font-family: 'Nunito Sans', sans-serif;
}

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    margin-top: 2rem;
    font-family: 'Nunito Sans', sans-serif;
}

.progress {
    height: 25rem;
    display: flex;
    justify-content: space-between;
    background-color: #171717;
    padding: 0rem 11.1rem;
    margin-top: -3rem;
}

.progress li {
    margin: 0rem 0;
    padding: 0rem;
}

.back li,
.front li {
    width: 20rem;
}

.bar {
    background-color: aqua;
    display: block;
    height: 1rem;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(.25, .8, .25, .1);

}

li h3 {
    font-size: 1.3rem;
    color: white;
}

h2 {
    color: #fff;
    margin-top: 1rem;
    font-size: 1.5rem;
}

.Q {
    margin-left: 10rem;
}

h1 {
    font-size: 2rem;
    font-weight: 600;
    color: black;
    border: 1px solid aqua;
    width: 10rem;
    text-align: center;
    background-color: aqua;
    padding: .5rem;
    font-family: 'Nunito Sans', sans-serif;
}


.bar span {
    height: 6rem;
    float: left;
    background-color: palevioletred;
}

.html {
    width: 80%;
    animation: html 3s;
}

.css {
    width: 70%;
    animation: css 3s;
}

.bootstrap {
    width: 40%;
    animation: bootstrap 3s;
}

.javascript {
    width: 60%;
    animation: javascript 3s;
}

.vue {
    width: 70%;
    animation: vue 3s;
}

.mysql {
    width: 80%;
    animation: mysql 3s;
}

.node {
    width: 70%;
    animation: node 3s;
}

.ui-ux {
    width: 70%;
    animation: ui 3s;
}

.wordpress {
    width: 65%;
    animation: wp 3s;
}

@keyframes html {
    0% {
        width: 0%;
    }

    100% {
        width: 80%;
    }
}

@keyframes css {
    0% {
        width: 0%;
    }

    100% {
        width: 70%;
    }
}

@keyframes bootstrap {
    0% {
        width: 0%;
    }

    100% {
        width: 40%;
    }
}

@keyframes javascript {
    0% {
        width: 0%;
    }

    100% {
        width: 60%;
    }
}

@keyframes vue {
    0% {
        width: 0%;
    }

    100% {
        width: 70%;
    }
}

@keyframes mysql {
    0% {
        width: 0%;
    }

    100% {
        width: 80%;
    }
}

@keyframes node {
    0% {
        width: 0%;
    }

    100% {
        width: 70%;
    }
}

@keyframes ui {
    0% {
        width: 0%;
    }

    100% {
        width: 70%;
    }
}

@keyframes wp {
    0% {
        width: 0%;
    }

    100% {
        width: 65%;
    }
}

/*
        Media Screen 
        */

@media (width < 800px) {
    .skills {
        padding: 0rem, 0rem;
        margin-top: 0rem;
        margin-bottom: 3rem;
        margin-left: auto;
        margin-right: auto;
    }

    .top {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 0rem 2rem;
    }

    .progress {
        height: 38rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: -3rem;
    }
}

@media (width > 800px) {
    .progress {
        height: 38rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 2rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: -9rem;
    }
}
</style>