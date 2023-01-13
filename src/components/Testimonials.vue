<template>
    <div class="crd">
        <div class="card-frame" v-for="item in testimonials" :key="items">
            <div class="car">
                <!-- <img :src="item.image"> -->
                <div class="info">
                    <img :src="item.image">
                    <div class="names">
                        <h2 class="name">{{ item.name }}</h2>
                        <h2 class="Lname">{{ item.Surname }}</h2>
                    </div>
                    <h5 class="relations">{{ item.relations }}</h5>
                    <h5 class="Quote">{{ item.Quote }}</h5>
                    <h5 class="contact"> <i class="fa-solid fa-envelope">{{ item.contact }}</i>
                        </h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                {
                    name: 'Ryan ',
                    Surname: 'Thomas',
                    relations: 'Lecture',
                    Quote: "Sibabalwe is an individual who rarely lets an issue stand in her way of getting the job done and getting it done correctly. She is one who strives for perfection in her work and is always willing and ready to assist her peers. She has a great sense of humor and a bubbly personality.",
                    contact: ' : ryant@lifechoices.co.za',
                    image: 'https://i.postimg.cc/CKTgkhVw/ryan.png'
                },
                {
                    name: 'Kauthar',
                    Surname: 'Brandt',
                    relations: 'Colleague',
                    Quote: "Sibabalwe is a very hard-working and determined individual when facing challenges. This attitude would prove beneficial in personal or group projects. She's caring and supportive, which would be helpful in a stressed environment.",
                    contact: ' : brandtkauthar@gmail.com',
                    image: 'https://i.postimg.cc/52jcZHf4/Whats-App-Image-2022-11-04-at-13-53-53.jpg'
                },
                {
                    name: 'Kelebogile',
                    Surname: 'Nobomvu',
                    relations: 'Colleague',
                    Quote: 'Sibabalwe is a humble and loving person who is always keen on helping others and she is a hard worker.',
                    contact: ' : nobomvukelebogile497@gmail.com',
                    image: 'https://i.postimg.cc/hv3sxt6s/Lebo.jpg'
                },
                {
                    name: 'Deno',
                    Surname: 'Rautenbach',
                    relations: 'Colleague',
                    Quote: "Sibabalwe always engulfs you in her rays of happiness. Not just a magnet of unparalleled jubilation thought, she's also a genius with a burning passion to learn. A light in the struggles of coding",
                    contact: ' : denorauten@gmail.com',
                    image: 'https://i.postimg.cc/0rR6Lgwx/deno.jpg'
                },
                {
                    name: 'Buhle',
                    Surname: 'Qampi',
                    relations: 'Colleague',
                    Quote: 'Sibabalwe is a great team player and always helps other colleagues. Her developer skills are exceptional and necessary for any workplace.',
                    contact: ' : buhle3857@gmail.com',
                    image: 'https://i.postimg.cc/44hQFsDD/Buhle.jpg'
                },
                {
                    name: 'Aliyah',
                    Surname: 'Du Toit',
                    relations: 'Colleague',
                    Quote: 'Sibabalwe is a wonderful, caring, compassionate person. She goes the extra mile for anyone and is committed to her goals.',
                    contact: ' : aliyah.dutoit@gmail.com',
                    image: 'https://i.postimg.cc/8khr6cQz/Aliyah.jpg'
                },

            ]
        }
    },
}
</script>

<style scoped>
.crd {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    margin-left: 7rem;

}

.car {
    border: 1px solid rgb(175, 175, 238);
    width: 20rem;
    height: 20rem;
    text-align: center;
    color: rgb(175, 175, 238);
    padding: 15px;
    margin-left: 80px;
}

.contact {
    font-size: .5rem;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
}

.names {
    display: flex;
    justify-content: center;
}

.name,
.Lname {
    margin-left: 15px;
}

h2 {
    font-size: 22px;
}

.relations {
    font-size: 18px;
}

.Quote {
    font-size: 16px;
}

img{
    width: 8rem;
}

@media (min-width: 300px) {
    .car {
        margin-left: 25px;
        width: 13rem;
        height: 22rem;
    }
}

@media (max-width: 768px) {
    .crd {
        display: flex;
        flex-direction: column;
    }

    .car {
        margin-left: 25px;
    }
}
</style>