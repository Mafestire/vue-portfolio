<template>
    <div class="pros">

        <div class="one" v-for="item in projects" :key="items">
            <div class="car">
                <img :src="item.image">
                <div class="description">
                    <h5 class="name">{{ item.name }}</h5>
                    <h6 class="brief">{{ item.brief }}</h6>
                </div>
                <button>View</button>
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
                    image: '',
                },
                {
                    name: 'BMI Calculator',
                    brief: 'Calculate your Body Mass Index',
                    image: '',
                },
                {
                    name: 'Temperature Convertor',
                    brief: 'Be sure of your temperatures',
                    image: '',
                },
                {
                    name: 'Point of Sale',
                    brief: 'Simplify your business sales',
                    image: '',
                },
                {
                    name: 'Calculator',
                    brief: 'Standard to simplify your calculations',
                    image: '',
                },
                {
                    name: 'Calculator',
                    brief: 'Standard to simplify your calculations',
                    image: '',
                },
            ]
        }
    }
}
</script>

<style scoped>
.pros {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.one {
    border: 2px solid #8a307f;
    text-align: center;
    margin-bottom: 10px;
    padding: 5px 10px;
    animation:in 1.5s ease-in;
}

@keyframes in{
    0%{
    transform: translateX(-20vh) scale(0);
  }
  100%{
    transform: translateX(-10vh) scale(1);
  }
}

.description h5 {
    font-size: 20px;
    color: rgb(175, 175, 238);
}

.description h6 {
    font-size: 16px;
    color: rgb(175, 175, 238);
}

button {
    font-size: 18px;
    padding: 5px 10px;
    background-color: rgb(175, 175, 238);
    border: none;
}

button:hover{
border: 2px solid rgb(175, 175, 238);
background-color: #8a307f;
color: rgb(175, 175, 238);
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
</style>