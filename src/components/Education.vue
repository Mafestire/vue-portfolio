<template>
    <div>
        <div class="edu">

            <div class="education" v-for="item in education" :key="item">
                <!-- Education -->
                <div class="top">
                    <h1 style="width: 12rem;">{{ item.label }}</h1>
                    <h2>My Education History</h2>
                </div>

                <div class="tim">
                    <div class="conts" v-for="item in education" :key="item">
                        <div class="firstt">
                            <div class="date one">
                                <div class="content-d">
                                    <h3>{{ item.year4 }} </h3>
                                    <p>{{ item.time4 }}</p>
                                </div>
                                <div class="line">
                                    <p>--</p>
                                </div>
                            </div>
                            <div class="cont left o one-o">
                                <div class="content">
                                    <h6 style="margin-bottom: 2rem;">{{ item.name4 }}</h6>
                                    <div class="dv"></div>
                                    <p>{{ item.activity4 }}</p>
                                </div>
                            </div>

                            <div class="date two">
                                <div class="content-d">
                                    <h3>{{ item.year3 }}</h3>
                                    <p>{{ item.time3 }}</p>
                                </div>
                                <div class="line">
                                    <p>--</p>
                                </div>
                            </div>
                            <div class="cont right two-o">
                                <div class="content">
                                    <h6>{{ item.name3 }}</h6>
                                    <div class="dv"></div>
                                    <p>{{ item.activity2 }}</p>
                                </div>
                            </div>

                        </div>
                        <div class="secondd">
                            <div class="date three">
                                <div class="content-d">
                                    <h3>{{ item.year2 }}</h3>
                                    <p>{{ item.time2 }}</p>
                                </div>
                                <div class="line">
                                    <p>--</p>
                                </div>
                            </div>

                            <div class="cont left three-o">
                                <div class="content">
                                    <h6>{{ item.name2 }}</h6>
                                    <div class="dv"></div>
                                    <p>{{ item.activity3 }}</p>
                                </div>
                            </div>

                            <div class="date four">
                                <div class="content-d">
                                    <h3>{{ item.year1 }}</h3>
                                    <p>{{ item.time1 }}</p>
                                </div>
                                <div class="line">
                                    <p>--</p>
                                </div>
                            </div>
                            <div class="cont right four-o">
                                <div class="content">
                                    <h6>{{ item.name1 }}</h6>
                                    <div class="dv" style="margin-top: 1rem;"></div>
                                    <!-- <p>Activities:</p> -->
                                    <p>{{ item.activity1 }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="experience">
                <div class="top">
                    <h1 style="width: 12rem;">Experience</h1>
                    <h2>My Work Experience</h2>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-title-ex">
                            <div class="dot"></div>
                            <h5 class="card-title-exp">Job Description</h5>
                        </div>
                        <div class="company">
                            <h6>Life Choices Studio</h6>
                            <img src="https://i.postimg.cc/j5kGLNV5/Logo-Life-Choices-removebg-preview.png" alt="">
                        </div>
                        <p class="when">Learning Journey | April 2023 - Currently</p>
                        <div class="div"></div>

                        <h6 class="card-subtitle mb-2 text-body-secondary">Working on client based web development projects in a team of brilliant designers and developers and enrolled on a learning journey to upskilling</h6>
                        <P class="details">

                        </P>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            education: [
                {
                    label: "Education",
                    year1: "2017",
                    year2: "2018",
                    year3: "2019",
                    year4: "2022",
                    time1: "Passed Matric",
                    time2: "Volunteerd 2018-2022",
                    time3: "Volunteerd 2019-2022",
                    time4: "Currently",
                    name1: "Mfuleni Secondary School",
                    name2: "Mange Day Care",
                    name3: "African Climate Alliance",
                    name4: "Life Choices Academy",
                    activity1: "Volleyball, Student Leadership",
                    activity2: "Helped at a Early Childhood Development focused of solft skills development and arts",
                    activity3: "Assisted to spread awearness of the need to look after the enviroment and part-taked in enviromental clean ups",
                    activity4: "Studying and practising coding",
                    image1: "",
                    image2: "",
                    image3: "",
                    image4: ""
                }
            ]
        };
    },
}
</script>

<style scoped>
/* education */

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    font-family: 'Nunito Sans', sans-serif;
}

h1 {
    font-size: 2rem;
    font-weight: 600;
    color: black;
    border: 1px solid aqua;
    width: 10rem;
    height: 3rem;
    text-align: center;
    background-color: aqua;
    padding: .5rem;
    font-family: 'Nunito Sans', sans-serif;
    animation: head 3s forwards;
}

h6{
    margin-top: 1rem;
}

@keyframes head {
    0% {
        opacity: 0;
    }
}

.top h2 {
    color: #fff;
    font-size: 1.5rem;
    margin-top: 1rem;
    height: 3rem;
    overflow: hidden;
    font-family: 'Nunito Sans', sans-serif;
    animation: label 3s forwards;
}

@keyframes label {
    0% {
        transform: translateY(200%);
        opacity: 0;
    }
}

.edu {
    padding-left: 11.1rem;
    padding-right: 11.1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem ;
    display: flex;
    height: 160vh;
    justify-content: space-between;
    margin-top: 4rem;
    font-family: 'Nunito Sans', sans-serif;
}

.education {
    height: 100vh;
    padding: 1rem 2rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.experience {
    margin-left: auto;
    margin-right: auto;
}

.tim {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    padding-top: .5rem;
    margin-left: auto;
    margin-right: auto;
}

.tim::after {
    content: '';
    position: absolute;
    width: 1vh;
    height: 130vh;
    background-color: aqua;
    top: 1%;
    bottom: 0;
    margin-left: 16rem;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: label 3s ease;
}

.conts {
    margin-left: auto;
    margin-right: auto;
    width: 110%;
    position: relative;
}

.cont h6 {
    font-size: 1.3rem;
}

.cont h2 {
    font-size: 1rem;
}

.cont {
    background-color: inherit;
    width: 18rem;
    height: 10rem;
    padding: 1.5rem;
    text-align: center;
    margin-top: -4.5rem;
    color: white;
    /* font-size: 20px; */
    box-shadow: 0 8px 32px 0 black;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid black;
}

.dv {
    border-bottom: 1px solid #808080;
}

h3,
h6,
p {
    color: white;
    font-size: 1.3rem;
}

.left {
    margin-left: 20rem;
}

.right {
    margin-left: 20rem;
}

.left::before {
    content: '';
    height: 0;
    position: absolute;
    width: 0;
    z-index: 1;
    right: 17rem;
    border: medium solid white;
    border-width: 1rem 0rem 1rem 1rem;
    top: 18rem;
    border-color: transparent transparent transparent aqua;
    ;
}

.right::before {
    content: '';
    height: 0;
    position: absolute;
    width: 0;
    z-index: 1;
    top: -13.6rem;
    left: -3rem;
    border: medium solid black;
    border-width: 1rem 1rem 1rem 0rem;
    border-color: transparent aqua transparent transparent;
}

.date h2,
p {
    font-size: 1rem;
}

.date {
    margin-top: 2rem;
    width: 16rem;
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
}

.line p {
    color: palevioletred;
    font-size: 2rem;
}

.content-d::after {
    content: " ";
    height: 1rem;
    width: 1rem;
    /* position: absolute; */
    z-index: 1;
    top: 2rem;
    border-width: 1rem 1rem 1rem 0rem;
    /* border-color: transparent transparent transparent aqua; */
    background-color: aqua;
}

/** --------ANIMATION--------- */

.one {
    animation: one 3s ease;
}
@keyframes one {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
}

.one-o{
    animation: one-o 3s ease;
}
@keyframes one-o {
    0%{
        transform: translateX(100%);
        opacity: 0;
    }
}

.two {
    animation: two 5s ease;
}
@keyframes two {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
}

.two-o{
    animation: two-o 5s ease;
}
@keyframes two-o {
    0%{
        transform: translateX(100%);
        opacity: 0;
    }
}

.three {
    animation: three 7s ease;
}

@keyframes three {
    0% {
        transform: translateX(-300%);
        opacity: 0;
    }
}

.three-o{
    animation: three-o 7s ease;
}

@keyframes three-o {
    0%{
        transform: translateX(100%);
        opacity: 0;
    }
}

.four {
    animation: four 9s ease;
}

@keyframes four {
    0% {
        transform: translateX(-300%);
        opacity: 0;
    }
}

.four-o{
    animation: four-o 9s ease;
}
@keyframes four-o {
    0%{
        transform: translateX(100%);
        opacity: 0;
    }
}


/* 
EXPERIENCE 
*/

.card {
    background-color: #171717;
    color: white;
    border: 1px solid black;
    padding: 2rem 1rem;
    margin-top: 7rem;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 8px 32px 0 black;
    width: 25rem;
    animation: exp 3s ease;
}
@keyframes exp {
    0%{
        transform: translateY(50%);
        opacity: 0;
    }
}

.card-title-ex {
    border: 1px solid aqua;
    width: 10rem;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
}

.card-title-exp {
    font-size: .8rem;
    margin: .5rem;
}

.dot {
    width: .7rem;
    height: .7rem;
    background-color: aqua;
    border-radius: 50%;
    margin: .5rem;
}

.when {
    font-size: .9rem;
    color: #808080;
}

.company {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
}

.company h6 {
    font-size: 1.2rem;
}

.company img {
    width: 10rem;
    height: 3rem;
    margin-top: -1rem;
}

.div {
    width: 21rem;
    border-bottom: 1px solid #808080;
    margin-left: auto;
    margin-right: auto;
}

/*
    media query
    */

@media (width < 800px) {
    .edu {
        margin: 0;
        margin-bottom: 5rem;
        padding: 0rem 1rem;
        display: flex;
        height: 150%;
        flex-direction: column;
        align-items: center;
    }

    .education {
        height: 120%;
        margin-bottom: 5rem;
        padding: 0rem 1rem;
    }

    .cont {
        padding: 1.5rem;
        text-align: center;
        margin-top: 0rem;
        color: white;
        width: 12rem;
    }

    .firstt {
        display: flex;
        flex-direction: column;
    }

    

    .date {
        margin-top: 2rem;
        width: 12rem;
        display: flex;
        justify-content: space-between;
        padding-right: 0rem;
        margin-left: 5rem;
    }

    .tim::after {
        height: 180vh;
        margin-left: 0rem;
    }

    .left {
        margin-left: 5rem;
    }

    .right {
        margin-left: 5rem;
    }

    .line {
        display: none;
    }

    .left::before {
        top: 21rem;
    }

    .right::before {
        left: -3rem;
    }

    .experience {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }

    .card {
        width: 20rem;
        margin-top: 0;
    }

    .top {
        margin-bottom: 1rem;
    }

    .card-title-ex {
        margin-bottom: 1rem;
    }

    .div {
        width: 15rem;
        border-bottom: 1px solid #808080;
        margin-left: auto;
        margin-right: auto;
    }

}

@media (width > 800px) {
    .edu {
        margin: 0;
        margin-bottom: 3rem;
        padding: 0rem 1rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 175vh;

    }
    .education{
        height: 175vh;

    }

    .date {
        margin-top: 2rem;
        width: 7rem;
        display: flex;
        padding-right: 0rem;
        margin-left: 0rem;
    }

    .line {
        display: none;
    }

    .firstt {
        display: flex;
        flex-direction: column;
        width: 10rem;
    }

    .tim::after {
        height: 140vh;
        margin-left: 8rem;
    }

    .conts {
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }

    .cont {
        margin-left: 13rem;
        width: 18rem;
        height: 15rem;
    }

    .dv{
        margin: 1rem 0rem;

    }

    .content p{
        display: flex;
        justify-content: center;
    }

    .card {
        width: 30rem;
        margin-top: 5;
    }

    .div {
        width: 16rem;
        border-bottom: 1px solid #808080;
        margin-left: auto;
        margin-right: auto;
    }

    .right::before {
        left: -3rem;
    }

    .left::before {
        left: -3rem;
    }
}</style>