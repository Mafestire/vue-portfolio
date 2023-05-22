<template>
    <Nav />

    <div class="head">
        <h3>Lets Talk</h3>
    </div>

    <div class="cont">
        <div class="info">
            <h1>Contact me for more information:</h1>

            <div class="more">
                <ul class="list-group one list-group-vertical w-25">
                    <li class="list-group-item"><span>A</span>ddress</li>
                    <li class="list-group-item"><span>P</span>hone</li>
                    <li class="list-group-item"><span>L</span>inkedin</li>
                    <li class="list-group-item"><span>E</span>mail</li>
                    <li class="list-group-item"><span>G</span>itHub</li>
                </ul>
                <ul class="list-group two list-group-vertical-sm">
                    <li class="list-group-item m">Mfuleni, Cape Town</li>
                    <li class="list-group-item m">062 4244 310 | 065 9425 403</li>
                    <li class="list-group-item m">Sibabalwe Mafestire</li>
                    <li class="list-group-item m">seabaraven@gmail.com</li>
                    <li class="list-group-item m">Mafestire</li>
                </ul>
            </div>
        </div>
        <Contacts />
    </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue'
import Nav from '@/components/Nav.vue'
export default {
    components: { Contacts, Nav }
}
</script>

<style scoped>
.head {
    height: 20rem;
    background-image: url(https://i.postimg.cc/7LgghXBr/bb.jpg);
    font-family: 'Playfair Display', serif;
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

span {
    color: aqua;
    font-size: 2rem;
}

.m {
    margin-top: 1rem;
    height: 3rem;
}

.cont {
    display: flex;
    justify-content: space-between;
    padding: 5rem 11.1rem;
    font-family: 'Playfair Display', serif;
}

.more {
    display: flex;
    padding-top: 1rem;
}

.list-group li {
    background-color: #171717;
    border: none;
    color: white;
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
}

.info {
    width: 32rem;
    color: #fff;
}

.info h3 {
    font-size: 2rem;
}


@media (width < 500px) {

    .head{
        margin-top: 0rem;
        height: 15rem;
    }
    .cont {
        display: flex;
        flex-direction: column;
        padding: 1rem 0rem;
    }

    .more {
        padding: 0;
        margin: 0;
    }

    .one {
        padding: 0;
        margin-left: -4rem;
    }

    .two {
        margin-left: 4rem;
        width: 20rem;
    }

    .info {
        width: 15rem;
        font-size: 1rem;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    .social-links i {
        font-size: .7rem;
    }

    h1 {
        font-size: 1.3rem;
    }

    .two li, .one li{
        font-size: 1rem;
    }
    .two li{
        margin-left: -1rem;
    }
}
</style>