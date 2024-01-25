<template>
    <div class="all">
        <div class="proj">
            <div class="image">
                <img src="https://i.postimg.cc/4xgLG7J7/C11-Sibabalwe-Mafestire-1-removebg-preview.png
" alt="" srcset="">
            </div>
            <div class="form">

                <div class="detail">
                    <h2>Let's Project</h2>
                    <h4>Got a Project Lets do it!</h4>
                </div>

                <form action="https://formspree.io/f/mjvdvzqd" method="post">
                    <input type="text " class="one-o" name="Name" id="name" placeholder="Enter Name" required>
                    <br />
                    <input type="email " class="two-o" name="email" id="email" placeholder="Enter Email Address" required>
                    <br />
                    <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.all {
    margin-left: auto;
    margin-right: auto;
}

.proj {
    border: 2px solid black;
    box-shadow: 0 2px 7px 0 black;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5rem;
    height: 50vh;
    width: 70%;
    align-items: center;
}

.image img {
    width: 80%;
    margin-top: -7rem;
}

.form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.detail {
    color: white;
    font-family: 'Nunito Sans', sans-serif;
}

form,
.detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 25%;
}

input {
    margin-top: 1rem;
    font-size: 1.2rem;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;    
    width: 100%;
    border: none !important;
    border-bottom: 1px solid black !important;
    background-color: #171717;
}

button {
    margin-top: 2rem;
    color: aqua;
    background-color: #171717;
    border: none;
    /* padding: .5rem 1.5rem; */
    font-size: 1.5rem;
    font-family: 'Nunito Sans', sans-serif;
}

/**
    media query
    */

@media (width < 700px) {
    .proj {
        margin-left: auto;
        margin-right: auto;
        padding: 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 5rem;
        height: 100%;
        width: 85%;
    }

    .image img {
        width: 60%;
        margin-top: 0rem;
    }

    .image{
        display: flex;
        justify-content: center;
    }

    form,
    .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 !important;
        /* width: 15rem; */
    }

    /* .detail h1{
    font-size: 2rem;
} */

    .form{
        width: 15rem;
        margin: 0 !important;
    }

    input {
        width: 15rem;
        margin-bottom: -2rem;
    }
}
@media (width > 702px) {
    .proj {
        margin-left: auto;
        margin-right: auto;
        padding: 0 2rem;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 5rem;
        height: 50%;
        width: 75%;
    }

    .image img {
        /* width: 70%; */
        margin-top: 0rem;
    }

    .image{
        display: flex;
        /* justify-content: center; */
    }

    form,
    .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 !important;
        /* width: 15rem; */
    }

    /* .detail h1{
    font-size: 2rem;
} */

    .form{
        width: 100%;
        margin: 0 !important;
    }

    input {
        /* width: 15rem; */
        margin-bottom: -2rem;
    }
}
@media (width > 1020px) {
    .proj {
        margin-left: auto;
        margin-right: auto;
        padding: 0 2rem;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 5rem;
        height: 100%;
        width: 45%;
    }

    .image img {
        width: 100%;
        margin-top: 0rem;
    }

    .image{
        display: flex;
        /* justify-content: center; */
    }

    form,
    .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 !important;
        /* width: 15rem; */
    }

    /* .detail h1{
    font-size: 2rem;
} */

    .form{
        width: 100%;
        margin: 0 !important;
    }

    input {
        /* width: 15rem; */
        margin-bottom: -2rem;
    }
}

/* @media (with > 705px) {
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80% !important;
    }

    input {
        width: 70%;
    }
    .proj {
        margin-left: auto;
        margin-right: auto;
        padding: 0rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 5rem;
        height: 50vh;
        width: 50%;
    }
} */
/* 
@media (width > 710px) {
    form,
    .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    input {
        width: 100%;
    }
    .proj {
        margin-left: auto;
        margin-right: auto;
        padding: 0rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        align-items: center;
        margin-bottom: 5rem;
        height: 50vh;
        width: 45%;
    }
} */

</style>