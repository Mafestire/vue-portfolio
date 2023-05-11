<template>
    <div class="cont">
        <div class="info">
            <h3>For more information contact me on: </h3>

            <div class="social-links">
                <div class="socials">
                    <a href="https://www.instagram.com/seaba_raven/?hl=en"><i class="fa-brands fa-instagram"> </i></a>
                    <a href="https://github.com/Mafestire"><i class="fa-brands fa-github"></i></a>
                </div>
                <div class="mail">
                    <div class="items">
                        <a href=""><i class="fa-solid fa-envelope"></i></a>
                        
                    </div>
                    <h6 style="font-size: 1.5rem; margin-top: 2.3rem;"> seabaraven@gmail.com
                    </h6>
                </div>
            </div>
            <h3> or just leave me a message on the form</h3>
        </div>
        <Contacts />
    </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue'
export default {
    components: { Contacts }
}
</script>

<style scoped>
.cont {
    display: flex;
    justify-content: space-around;
    padding: 55px 10px;
    font-family: 'Lobster Two', cursive;

}

.socials {
    display: flex;
}

.mail {
    display: flex;
    margin-bottom: 1rem;
}

.info {
    width: 20rem;
    color: #3c2a21;
    margin-left: 5rem;
    margin-top: 5rem;
}

.info h3 {
    font-size: 2rem;
}

.social-links i {
    display: flex;
    width: 5rem;
    color: #3c2a21;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 2rem;
    text-decoration: none;
    font-size: 2rem;
}

a {
    text-decoration: none;
}

@media (width < 500px) {
    .social-links, .mail, .socials{
        display: flex;
        flex-direction: column;
    }


}

@media (width < 768px) {
    .cont {
        display: flex;
        flex-direction: column;
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
        font-size: .5rem;
    }
    .social-links, .mail, .socials{
        display: flex;
        flex-direction: column;
    }
}

@media (width < 900px) {
    .cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
     
    }

    .info{
        margin-left: auto;
        margin-right: auto;
    }
}
</style>