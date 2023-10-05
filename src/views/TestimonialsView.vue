<template>
    <Nav />

    <div class="head">
        <h3>Testimonials</h3>
    </div>

    <div class="testimonials">
        <div class="top">
            <h1>Testimonials</h1>
            <h2 class="ref">References and testimonials from people i have worked with</h2>
        </div>
        <div class="on">
            <div class="topz">
                <div class="cards" v-for="item in testimonials" :key="items">

                    <div class="card mb-3" style="max-width: 42rem; ">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img :src="item.image">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ item.name }} {{ item.Surname }}</h5>
                                    <p class="card-re" style="color: aqua;"><small class="text-body-secondary">{{
                                        item.relations }} | {{ item.contact }}</small></p>
                                    <p class="card-text">{{ item.Quote }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
    components: { Nav },

    data() {
        return {
            testimonials: [
                {
                    name: 'Ryan ',
                    Surname: 'Thomas',
                    relations: 'Lecture',
                    Quote: '"Sibabalwe is an individual who strives to get the job done and getting it done correctly and is always willing to assist her colleagues. She has a great sense of humor and a bubbly personality.""',
                    contact: ' : ryant@lifechoices.co.za',
                    image: 'https://i.postimg.cc/CKTgkhVw/ryan.png'
                },
                {
                    name: 'Kelebogile',
                    Surname: 'Nobomvu',
                    relations: 'Colleague',
                    Quote: '"Sibabalwe is a humble and loving person who is always keen on helping others and she is a hard worker."',
                    contact: ' : nobomvukelebogile497@gmail.com',
                    image: 'https://i.postimg.cc/hv3sxt6s/Lebo.jpg'
                },
                {
                    name: 'Deno',
                    Surname: 'Rautenbach',
                    relations: 'Colleague',
                    Quote: '"Sibabalwe always engulfs you in her rays of happiness. Not just a magnet of unparalleled jubilation thought, she is also a genius with a burning passion to learn. A light in the struggles of coding"',
                    contact: ' : denorauten@gmail.com',
                    image: 'https://i.postimg.cc/0rR6Lgwx/deno.jpg'
                },
                {
                    name: 'Buhle',
                    Surname: 'Qampi',
                    relations: 'Colleague',
                    Quote: '"Sibabalwe is a great team player and always helps other colleagues. Her developer skills are exceptional and necessary for any workplace."',
                    contact: ' : buhle3857@gmail.com',
                    image: 'https://i.postimg.cc/44hQFsDD/Buhle.jpg'
                }

            ]
        }
    },
}
</script>

<style scoped>
.head {
    height: 20rem;
    background-image: url(https://i.postimg.cc/7LgghXBr/bb.jpg);
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
    animation: cont 2s ease-in;
}

@keyframes cont {
    0% {
        opacity: 0;
    }
}

.testimonials {
    padding: 5rem 3rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
}

.top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
    font-family: 'Nunito Sans', sans-serif;
    animation: conts 3s ease-in;
}

@keyframes conts {
    0% {
        opacity: 0;
    }
}

h1 {
    font-size: 2rem;
    font-weight: 300;
    color: black;
    border: 1px solid aqua;
    width: 14rem;
    text-align: center;
    background-color: aqua;
    padding: .5rem;
}

.ref {
    color: #fff;
    padding-top: 1rem;
}

.on {
    padding: .2rem .2rem;
}

.topz {

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-left: auto;
    margin-right: auto;
}

img {
    width: 20rem;
    height: 18.5rem;
    border-radius: 1%;
}

.cards {
    margin-left: auto;
    margin-right: auto;
}

.card {
    background-color: #171717;
    /* border: 2px solid black; */
    color: #fff;
    border: none;
    font-family: 'Nunito Sans', sans-serif;
    width: 45rem;
    animation: cards .5s ease-in;
}

@keyframes cards {
    0% {
        transform: rotateX(180%'angle');
    }
}

.card-body {
    width: 28rem;
    padding-left: 7rem;
}

.card-title {
    font-size: 1.8rem;
}

.card-text {
    font-size: 1.2rem;
}

/*
        media query
    */

@media (width < 800px) {
    .topz {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
    }

    .card {
        width: 18rem;
        border: none;
    }

    img {
        width: 17.5rem;
        height: 18.5rem;
        border-radius: 1%;
    }

    .card-body {
        width: 17.5rem;
        padding: 0rem;
    }

    .testimonials {
        padding: 3rem 3rem;
        margin-left: auto;
        margin-right: auto;
    }

    .ref {
        color: #fff;
        padding: 0rem 2rem;
    }

    .top {
        margin-bottom: 0rem;
        padding: 1rem 0rem;
    }

}</style> 