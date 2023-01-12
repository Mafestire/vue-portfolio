<template>
    <div class="cont">
        <div class="info">
            <h3>For more information contact me on</h3>

            <div class="social-links">
              <i class="fa-brands fa-facebook-f">Seaba_ Raven</i>
              <i class="fa-brands fa-instagram">Seaba_ Raven</i>
              <i class="fa-brands fa-github">Mafestire</i>
              <i class="fa-solid fa-envelope">seabaraven@gmail.com</i> 
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
    padding: 55px 10px;
}

.info{
    width: 20rem;
    color: rgb(175, 175, 238);
    margin: 2rem 2rem;
    
}

.social-links i{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 2rem;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .info{
        width: 10rem;
        font-size: 16px;
    }
    .social-links i{
        font-size: .7rem;
    }
}
</style>