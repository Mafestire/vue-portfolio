<template>
    <div class="all">
        <h1>Projects</h1>

        <div class="land">
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: 'Calculator',
                    brief: 'Standard to simplify your calculations',
                    image: 'https://i.postimg.cc/rshyZMxr/calculator.png',
                    git: 'https://github.com/Mafestire/Calculator.git',
                    netlify: 'https://sibabalwe-calculator.netlify.app'
                },
                {
                    name: 'BMI Calculator',
                    brief: 'Calculate your Body Mass Index',
                    image: 'https://i.postimg.cc/VvGWkP99/Screenshot-2023-01-10-110752.png',
                    git: 'https://github.com/Mafestire/BIM-Calculator.git',
                    netlify: 'https://sibabalwe-bmi-calculator.netlify.app'
                },
                {
                    name: 'Temperature Convertor',
                    brief: 'Be sure of your temperatures',
                    image: 'https://i.postimg.cc/8PrbS5Xw/Screenshot-20221205-100323.png',
                    git: 'https://github.com/Mafestire/Point-of-Sale-system.git',
                    netlify: 'https://seababags.netlify.app'
                },
                {
                    name: 'Point of Sale',
                    brief: 'Simplify your business sales',
                    image: 'https://i.postimg.cc/mgYs3PN8/logo3-removebg-preview.png',
                    git: 'https://github.com/Mafestire/Point-of-Sale-system.git',
                    netlify: 'https://seababags.netlify.app'
                },
                {
                    name: 'Repair store',
                    brief: 'Cellphone Repair store',
                    image: 'https://i.postimg.cc/zBPpHky6/project-1-cell.png',
                    git: 'https://github.com/Mafestire/cellphone-repair-store.git',
                    netlify: 'https://cell-repair.netlify.app'
                },
                {
                    name: 'Personal Portfolio',
                    brief: 'Online Portfolio',
                    image: 'https://i.postimg.cc/7YqMPcth/project-2-shop.png',
                    git: 'https://github.com/Mafestire/Portfolio-.git',
                    netlify: 'https://sibabalwe-portfolio.netlify.app'
                },
            ],

        }
    }
}
</script>

<style scoped>
.all {
    transform: translateY(10%);
    margin-bottom: 2rem;
    text-align: center;
    color: #3c2a21;
    height: 100%;
    margin-bottom: 5rem;
    font-family: 'Lobster Two', cursive;
    margin-left: auto;
    margin-right: auto;

}

.car {
    margin-top: 1rem;
}

.pros {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-left: 1rem;
    margin-right: 1rem;
}

.one {
    border: 2px solid #3c2a21;
    text-align: center;
    margin-bottom: 10px;
    padding: 5px 10px;
    height: 15rem;
    animation: in 1.5s ease-in;

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
    width: 6rem;
    height: 5rem;
}

.links {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}

.description h5 {
    font-size: 1.5rem;
    color: #3c2a21;
}

.description h6 {
    font-size: 1.2rem;
    color: #3c2a21;
}

button{
    border: 1px solid #3c2a21;
    background-color: #3c2a21; 
    width: 4rem;
}

 button a {
    color: #d5cea3;
    text-decoration: none;
}

@media (max-width: 768px) {
    .pros {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .description h5 {
        font-size: 18px;
    }

    .description h6 {
        font-size: 15px;
    }
}

@media (width < 576px) {
    .links {
        display: flex;
        /* flex-direction: column; */
      margin-left: auto;
      margin-right: auto;
    }

    img {
        width: 3rem;
        height: 3rem;
    }

    .all {
        height: 100%;
        margin-bottom: 5rem;
        margin-left: auto;
        margin-right: auto;
    }

    .pros{
        margin-left: auto;
        margin-right: auto;
    }

    button{
        width: 3rem;
    }
}</style>