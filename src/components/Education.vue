<template>
    <div>
        <div class="edu">

            <div class="education" v-for="item in education" :key="item">
                <!-- Education -->
                <div class="top">
                    <h1>{{ item.label }}</h1>
                    <!-- <h2>My Education History</h2> -->
                </div>

                <div class="conts" v-for="item in education" :key="item">
                    <div class="cont left o one-o">

                        <div class="content">
                            <h6>{{ item.name4 }}</h6>
                            <div class="content-d m">
                                <h3>{{ item.year4 }} </h3>
                                <p class="yr">{{ item.time4 }}</p>
                            </div>
                            <div class="dv"></div>
                            <p>{{ item.activity4 }}</p>
                        </div>
                    </div>

                    <div class="cont right two-o">

                        <div class="content">
                            <h6>{{ item.name3 }}</h6>
                            <div class="content-d">
                                <h3>{{ item.year3 }}</h3>
                                <p class="yr">{{ item.time3 }}</p>
                            </div>
                            <div class="dv"></div>
                            <p>{{ item.activity2 }}</p>
                        </div>
                    </div>

                    <div class="cont left three-o">

                        <div class="content">
                            <h6>{{ item.name2 }}</h6>
                            <div class="content-d m">
                                <h3>{{ item.year2 }}</h3>
                                <p class="yr">{{ item.time2 }}</p>
                            </div>
                            <div class="dv"></div>
                            <p>{{ item.activity3 }}</p>
                        </div>
                    </div>

                    <div class="cont right four-o">

                        <div class="content">
                            <h6>{{ item.name1 }}</h6>
                            <div class="content-d m">
                                <h3>{{ item.year1 }}</h3>
                                <p class="yr">{{ item.time1 }}</p>
                            </div>
                            <div class="dv" ></div>
                            <!-- <p>Activities:</p> -->

                            <p>{{ item.activity1 }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="experience">
                <div class="top">
                    <h1>Experience</h1>
                    <!-- <h2>My Work Experience</h2> -->
                </div>

                <div class="card" v-motion :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }">
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

                        <h6 class="card-subtitle txt mb-2 text-body-secondary">Working on client based web development projects
                            in a team of brilliant designers and developers and enrolled on a learning journey to upskilling
                        </h6>
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
                    time2: "2018-2022",
                    time3: "2019-2022",
                    time4: "Currently",
                    name1: "Mfuleni S.S",
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
    margin-bottom: 1rem;
    font-family: 'Nunito Sans', sans-serif;
}

h1 {
    font-size: 3rem;
    color: #fff;
    border-bottom: 1px solid aqua;
    text-align: center;
    padding: .5rem;
    font-family: 'Nunito Sans', sans-serif;
    animation: head 3s forwards;
}

h6 {
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
    height: 2rem;
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
    padding: 0rem 5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0rem;
    margin-top: 0rem;
    font-family: 'Nunito Sans', sans-serif;
}

.education {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.experience {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.conts {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 7rem;
    align-items: center;
    gap: 1;
    justify-content: center;
}

.cont h6 {
    font-size: 1.3rem;
    text-align: start;
}

.cont h2 {
    font-size: 1rem;
}

.cont {
    background-color: inherit;
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    margin-top: 1.5rem;
    color: white;
    box-shadow: 0 2px 7px 0 black;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid black;
    border-left: 4px solid aqua;
}

.dv {
    border-bottom: 1px solid #808080;
    width: 100%;
}

h3,
h6,
p {
    color: white;
}

h3 {
    font-size: 1rem;
}

.content-d {
    display: flex;
    align-items: center;
    /* margin-bottom: -1.7rem; */
}

.yr {
    margin-left: 1rem;
    margin-top: .5rem;
    color: aqua;
}

.content p {
    text-align: start;
}

/** --------ANIMATION--------- */

.one-o {
    animation: one-o 3s ease;
}

@keyframes one-o {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
}

.two-o {
    animation: two-o 5s ease;
}

@keyframes two-o {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
}

.three-o {
    animation: three-o 7s ease;
}

@keyframes three-o {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
}

.four-o {
    animation: four-o 9s ease;
}

@keyframes four-o {
    0% {
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
    box-shadow: 0 2px 7px 0 black;
    width: 100%;
    animation: exp 3s ease;
    display: flex;
    align-items: center;
}

@keyframes exp {
    0% {
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

@media (width < 550px) {
    .cont {
        padding: 1.5rem;
        text-align: center;
        margin: 0rem;
        margin-bottom: 1rem;
        color: white;
        width: 90% !important;
        height: 100%;
    }
}

@media (width < 766px) {
    .edu {
        margin: 0;
        margin-bottom: 5rem;
        padding: 0rem 1rem;
        display: flex;
        height: 285vh;
        flex-direction: column;
        align-items: center;
        align-items: center;
    }

    .education {
        height: 270vh;
        margin-bottom: 1rem;
        padding: 0rem 1rem;        
        margin-top: 5rem;
        margin-top: -1rem;
    }

    .cont {
        padding: 1.5rem;
        text-align: center;
        margin: 0rem;
        margin-bottom: 1rem;
        color: white;
        width: 50%;
        height: 100%;
    }

    .conts{
        display: flex;
        flex-direction: column;
        padding: 0;
        height: 200vh;
    }

    .left::before {
        display: none;
    }

    .right::before {
        display: none;
    }

    .experience {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1rem;
        height: 90vh;
        margin-top: 1rem;
    }

    .card {
        width: 100%;
        margin-top: 0;
    }

    .top {
        margin-bottom: 4rem;
    }

    .top h1{
        font-size: 2rem;
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

@media (width > 767px) {
    .edu {
        margin: 0;
        margin-bottom: 5rem;
        padding: 0rem 1rem;
        height: 210vh;
        align-items: center;
        align-items: center;
    }

    .education {
        margin-bottom: 1rem;
        padding: 0rem 1rem;
        height: 140vh;
    }

    .conts {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        align-items: center;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        margin-bottom: 4rem;
        justify-content: center;
    }

    .cont {
        padding: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-bottom: 1rem;
        color: white;
        width: 80%;
        height: 80%;
    }

    /* .m{
        margin-top: 2rem;
    } */

    .left::before {
        display: none;
    }

    .right::before {
        display: none;
    }

    .experience {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: -5rem;
        padding: 0 2rem;
    }

    .card {
        width: 70%;
        margin-top: 0;
        padding: 2rem 2rem;
    }

    .top {
        margin-bottom: 1rem;
    }

    .top h1{
        font-size: 32px;
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

    .dv{
        margin-bottom: .5rem;
    }

}

@media (width > 1025px) {
    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1.5rem;
        margin-top: 2rem;
        font-family: 'Nunito Sans', sans-serif;
    }

    h1 {
        font-size: 36px !important;
        font-weight: 100;
        text-align: center;
    }

    h6 {
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
        height: 2rem;
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
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3rem;
        height: 140vh;
        margin-top: 0rem;
        font-family: 'Nunito Sans', sans-serif;
    }

    .education {
        width: 100%;
        height: 65vh;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .experience {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        margin-top: 1rem;
    }

    .conts {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        align-items: center;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .cont h6 {
        font-size: 1.5rem;
        text-align: start;
    }

    .cont {
        background-color: inherit;
        width: 90%;
        height: 38vh;
        padding: 1rem 1.5rem;
        text-align: center;
        margin-top: 1.5rem;
        color: white;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(4px);
        border-left: 4px solid aqua;
    }

    .dv {
        border-bottom: 1px solid #808080;
        width: 100%;
        margin-bottom: .5rem;
    }

    h3,
    h6,
    p {
        color: white;
    }

    h3 {
        font-size: 1rem;
    }

    .content-d {
        display: flex;
        align-items: center;
        margin-top: -.5rem;
    }

   /* .content{
     padding: 1rem 2rem;
   } */

    .content p {
        margin-top: .5rem;
        text-align: start;
        font-size: 1.3rem;
    }

    /* 
EXPERIENCE 
*/

    .card {
        color: white;
        padding: 2rem 2rem;
        margin-top: .5rem;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
        animation: exp 3s ease;
        display: flex;
        align-items: center;
    }

    .card-subtitle{
        font-size: 1.3rem!important;
    }

    @keyframes exp {
        0% {
            transform: translateY(50%);
            opacity: 0;
        }
    }

    .card-title-ex {
        border: 1px solid aqua;
        width: 11rem;
        padding: .5rem;
        display: flex;
        justify-content: space-between;
    }

    .card-title-exp {
        font-size: 1rem;
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
        font-size: 1rem;
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
}</style>