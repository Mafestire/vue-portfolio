<template>
    <div class="cont">
        <div class="info">
            <h3>For more information contact me on:  or just leave me a message on the form</h3>

            <div class="social-links">
              <a href="https://www.instagram.com/seaba_raven/?hl=en"><i class="fa-brands fa-instagram"> </i></a>
              <a href="https://github.com/Mafestire"><i class="fa-brands fa-github"></i></a>
              <a href=""></a><i class="fa-solid fa-envelope"><h6> seabaraven@gmail.com</h6></i> 
            </div>
            
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
.cont{
    display: flex;
    padding: 55px 10px;
}

.info{
    width: 20rem;
    color: rgb(175, 175, 238);
    margin: 2rem 2rem;
    
}

.social-links i{
    display: flex;
    color: rgb(175, 175, 238);
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 2rem;
    text-decoration: none;
    font-size: 2rem;
}

a{
    text-decoration: none;
}

@media (max-width: 768px) {
    .cont{
        display: flex;
        flex-direction: column;
    }
    .info{
        width: 10rem;
        font-size: 16px;
    }
    .social-links i{
        font-size: .7rem;
    }
}
</style>