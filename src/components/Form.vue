<template>
    <div class="all">
        <div class="proj">
            <div class="image">
                <img src="https://i.postimg.cc/7ZW6dJLY/C11-Sibabalwe-Mafestire-2-1-removebg-preview.png" alt="" srcset="">
            </div>
            <div class="form">

                <div class="detail">
                    <h1>Let's Project</h1>
                    <h6>Got a Project Lets do it!</h6>
                </div>

                <form action="">
                    <input type="text" placeholder="your full name">
                    <br />
                    <input type="text" placeholder="your email">
                    <br />
                    <button>Submit</button>
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
    /* padding: 0 10rem; */
}

.proj {
    border: 2px solid black;
    box-shadow: 0 8px 32px 0 black;
    /* margin: 0rem 11.1rem; */
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5rem;
    height: 50vh;
    width: 60%;
}

.image img {
    width: 15rem;
    height: 23rem;
    margin-top: -3rem;
}

.form {
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}

form {
    width: 35rem;
}

.detail {
    color: white;
    font-family: 'Playfair Display', serif;
}

form,
.detail {
    display: flex;
    flex-direction: column;
    align-items: center;

}

input {
    margin-top: 1rem;
    font-family: 'Playfair Display', serif;
    width: 30rem;
}

button {
    margin-top: 1rem;
    background-color: aqua;
    padding: .5rem 1.5rem;
    font-family: 'Playfair Display', serif;
}
</style>