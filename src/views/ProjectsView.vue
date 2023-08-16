<template>
    <Nav />

    <div class="head">
        <h3>Projects</h3>
    </div>

    <div class="all">
        <div class="top">
            <h1>Projects</h1>
            <h2>My most recent work</h2>
        </div>

        <div class="cardz">

            <div class="cards" v-for="item in projects" :key="items">
                <div class="card" >
                    <div class="card-body">
                        <img :src="item.image">

                        <h5 class="card-title">{{ item.name }}</h5>
                        <h6 class="card-subtitle">{{ item.brief }}</h6>

                        <div class="links">
                            <a :href="item.git">Git</a>
                            <a :href="item.netlify">Netlify</a>
                        </div>
                    </div>
                </div>
            </div>




            <!-- <div class="land">
            <div class="pros">

                <div class="one" v-for="item in projects" :key="items">
                    <div class="car">
                        <img :src="item.image">
                        <div class="description">
                            <h5 class="name">{{ item.name }}</h5>
                            <h6 class="brief">{{ item.brief }}</h6>
                        </div>
                        <div class="links">
                            <button> <a :href="item.git">Git</a></button>
                            <button> <a :href="item.netlify">Netlify</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
    components: { Nav },
    data() {
        return {
            projects: [
                {
                    name: 'Calculator',
                    brief: 'Standard to simplify your calculations',
                    image: 'https://i.postimg.cc/BnNM0GKR/Screenshot-2023-07-17-085609.png',
                    git: 'https://github.com/Mafestire/Calculator.git',
                    netlify: 'https://sibabalwe-calculator.netlify.app'
                },
                {
                    name: 'BMI Calculator',
                    brief: 'Calculate your Body Mass Index',
                    image: 'https://i.postimg.cc/LsFZZ1Sf/Screenshot-2023-07-31-110504.png',
                    git: 'https://github.com/Mafestire/BIM-Calculator.git',
                    netlify: 'https://sibabalwe-bmi-calculator.netlify.app'
                },
                {
                    name: 'Temperature Convertor',
                    brief: 'Be sure of your temperatures',
                    image: 'https://i.postimg.cc/QMMmy8hY/Screenshot-2023-07-31-122337.png',
                    git: 'https://github.com/Mafestire/Point-of-Sale-system.git',
                    netlify: 'https://sibabalwe-temperiture-converter.netlify.app'
                },
                {
                    name: 'Point of Sale',
                    brief: 'Simplify your business sales',
                    image: 'https://i.postimg.cc/mgYs3PN8/logo3-removebg-preview.png',
                    git: 'https://github.com/Mafestire/Point-of-Sale-system.git',
                    netlify: 'https://seababags.netlify.app'
                },
                {
                    name: 'Online Portfolio',
                    brief: 'Personalized Portfolio',
                    image: 'https://i.postimg.cc/sgDYh8zK/Screenshot-2023-08-16-123137.png',
                    git: 'https://github.com/Mafestire/vue-portfolio.git',
                    netlify: 'https://portfolio-d4110.web.app/#/'
                },
                {
                    name: 'Tech News',
                    brief: 'Get your latest Tech News',
                    image: 'https://i.postimg.cc/bYSD5N3s/Screenshot-2023-07-31-140740.png',
                    git: 'https://github.com/Mafestire/Tech-News.git',
                    netlify: 'https://technews-d5a7b.web.app/#/'
                },
            ],

        }
    }
}
</script>

<style scoped>
.head {
    height: 20rem;
    background-image: url(https://i.postimg.cc/Z5WsZZHQ/1000-F-422687964-0-W77-Tl-Y5us-MM3g-SOkg-BDf-TIr-Pev-TQZb-H.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Nunito Sans', sans-serif;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2rem;
}

.head h3 {
    font-size: 3.5rem;
    font-weight: 600;
}

.top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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

h2 {
    color: #fff;
    margin-top: 1rem;
}

.cardz {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.card {
    background-color: #171717;
    color: white;
    border: 1px solid black;
    padding: 2rem 1rem;
    height: 25rem;
    width: 22rem;
    animation: in 1.5s ease-in;
    box-shadow: 0 8px 32px 0 black;
}

.card-body{
    margin-top: -.5rem;
}

.card-title {
    align-items: center;
    text-align: center;
    color: aqua;
    font-size: 1.5rem;
    height: 2rem;
}

.card-subtitle {
    text-align: center;
    margin-top: 1.5rem;
    font-family: 'Playfair Display', serif;
}

.all {
    padding: 5rem 11.1rem;
    text-align: center;
    height: 100%;
    margin-bottom: 5rem;
    font-family: 'Nunito Sans', sans-serif;
}

@keyframes in {
    0% {
        transform: translateX(-20vh) scale(0);
    }

    100% {
        transform: translateX(0vh) scale(1);
    }
}

img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 1rem;
}

.links {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}

.links a {
    color: aqua;
    width: 6rem;
    padding: .3rem;
    font-size: 1.3rem;
    text-decoration: none;
    border: 1px solid aqua;
    background-color: #171717;
}

a:hover {
    border: 2px solid black;
    background-color: aqua;
    color: #171717;
}


@media (max-width: 800px) {
    .cardz {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        width: 18rem;
        margin-left: auto;
        margin-right: auto;
    }

    .all {
        padding: 3rem 2rem;
        text-align: center;
        height: 100%;
        margin-bottom: 5rem;
        font-family: 'Nunito Sans', sans-serif;
    }

    .card {
        background-color: #171717;
        color: white;
        border: 1px solid black;
        padding: 2rem 1rem;
        margin: 0;
        height: 20rem;
        width: 18rem;
        animation: in 1.5s ease-in;
        box-shadow: 0 8px 32px 0 black;
    }
}

/*@media (width < 576px) {
    .links {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 3rem;
        height: 3rem;
    }

    .all {
        height: 100%;
        margin-bottom: 5rem;
    }
} */
</style>