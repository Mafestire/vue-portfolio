<template>
    <Nav />

    <!-- <div class="head">
            <h3>Lets Talk</h3>
    </div> -->

    <div class="cont">
        <div class="info">
            <h1>Contact me for more information:</h1>

            <div class="more">
                <ul class="list-group one list-group-vertical w-25">
                    <li class="list-group-item first"><span>A</span>ddress</li>
                    <li class="list-group-item second"><span>P</span>hone</li>
                    <li class="list-group-item third"><span>L</span>inkedin</li>
                    <li class="list-group-item forth"><span>E</span>mail</li>
                    <li class="list-group-item fifth"><span>G</span>itHub</li>
                </ul>
                <ul class="list-group two list-group-vertical-sm">
                    <li class="list-group-item m sixth">Cape Town</li>
                    <li class="list-group-item m seventh"><a class="L" href="tel:+27 62 4244 310">062 4244 310</a></li>
                    <li class="list-group-item m eighth "><a class="L" href="https://www.linkedin.com/in/sibabalwe-mafestire-804364147" style="color: #fff; text-decoration: none;"> Sibabalwe Mafestire</a></li>
                    <li class="list-group-item m nineth"><a class="L" href="mailto: seabaraven@gmail.com">seabaraven@gmail.com</a></li>
                    <li class="list-group-item m tenth"><a class="L" href="https://github.com/Mafestire">Mafestire</a></li>
                </ul>
            </div>
        </div>
        <div class="contact-form">
            <Contacts />
        </div>
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
    /* height: 20rem; */
    /* background-image: url(https://i.postimg.cc/7LgghXBr/bb.jpg); */
    font-family: 'Nunito Sans', sans-serif;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2rem;
}

.L{
    color: #fff;
    text-decoration: none;
}
.L:hover{
    color: aqua !important;
}

.head h3 {
    font-size: 3.5rem;
    font-weight: 300;
    animation: cont 2s ease-in;
}
@keyframes cont {
    0%{
        opacity: 0;
    }
}

span {
    color: aqua;
    font-size: 2rem;
}

.info h1{
    animation: come 2s ease;
}

@keyframes come {
    0%{
       transform: translateY(-130%); 
    }
    100%{
        transform: translateY(0);
    }
}
.m {
    margin-top: 1rem;
    height: 3rem;
}

.cont {
    display: flex;
    justify-content: space-around;
    padding: 5rem 11.1rem;
    font-family: 'Nunito Sans', sans-serif;
}


.more {
    display: flex;
    padding-top: 1rem;
    overflow: hidden;
}

.list-group li {
    background-color: #171717;
    border: none;
    color: white;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.2rem;
}

.info, .contact-form {
    width: 100%;
    color: #fff;
    overflow: hidden;
}

.info h3 {
    font-size: 2rem;
}

        /*
        Animation
        */
    .first{
        animation: first 1.9s ease-in;
    }
    @keyframes first {
      0%{
        transform: translateX(-230%);
      }  
      100%{
        transform: translateX(0);
      }
    }
    .second{
        animation: second 2.3s ease-in;
    }
    @keyframes second {
        0%{
            transform: translateX(-260%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .third{
        animation: third 2.7s ease-in;
    }
    @keyframes third {
        0%{
            transform: translateX(-260%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .forth{
        animation: forth 3.2s ease-in;
    }
    @keyframes forth {
        0%{
            transform: translateX(-260%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .fifth{
        animation: fifth 3.6s ease-in;
    }
    @keyframes fifth {
        0%{
            transform: translateX(-260%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .sixth{
        animation: sixth 1.9s ease-in;
    }
    @keyframes sixth {
        0%{
            transform: translateX(260%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .seventh{
        animation: seventh 2.3s ease-in;
    }
    @keyframes seventh {
        0%{
            transform: translateX(260%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .eighth{
        animation: eighth 2.7s ease-in;
    }
    @keyframes eighth {
        0%{
            transform: translateX(260%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .nineth{
        animation: nineth 3.2s ease-in;
    }
    @keyframes nineth {
        0%{
            transform: translateX(260%);
        }
        100%{
            transform: translateX(0);
        }
    }
    .tenth{
        animation: tenth 3.6s ease-in;
    }
    @keyframes tenth {
        0%{
            transform: translateX(260%);
        }
        100%{
            transform: translateX(0);
        }
    }


/* @media (width < 800px) {

    .head {
        margin-top: 2.5rem;
        height: 15rem;
    }

    .cont {
        display: flex;
        padding: 1rem 0rem;
    }

    .more {
        padding: 0;
        margin: 0;
        width: 18rem;
    }

    .one {
        padding: 0;
        margin-left: rem;
    }

    .two {
        margin-left: 1.8rem;
        width: 20rem;
    }

    .info {
        width: 20rem;
        font-size: 1rem;
        padding-top: 1rem;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        font-size: 1.3rem;
    }

    .two li,
    .one li {
        font-size: 1rem;
    }

    .two li {
        margin-left: -1rem;
    }
} */

@media (width < 800px) {
    .cont {
        display: flex;
        flex-direction: column;
        padding: 1rem 10%;
        /* text-align: center; */
        justify-content: center !important;
    }
} 

@media (width < 1203px) {
    .cont{
        padding: 1rem 10%;
    }
}

</style>