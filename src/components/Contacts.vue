<template>
    <div class="f">
        <Form class="form" action="https://formspree.io/f/mjvdvzqd" method="post">
            <div class="hd">
                <h2>Send me a Message</h2>
                <div class="p"></div>
            </div>

            <label for="Name " class="one">Full Name</label>
            <input type="text " class="one-o" name="Name" id="name" placeholder="Enter Name" required>
            <label for="email " class="two">Email</label>
            <input type="email " class="two-o" name="email" id="email" placeholder="Enter Email Address" required>
            <label for="number" class="three">Contact Number</label>
            <input type="number" class="three-o" name="number" id="number" placeholder="Enter Contact Number" required>
            <label for="message" class="four">Message</label>
            <textarea type="text" class="four-o" name="message" id="message" placeholder="Type in message" required></textarea>
            <button type="submit" class="five">Submit</button>
        </Form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.f {
    display: flex;
    justify-content: center;
}

form {
    width: 25rem;
    height: 35rem;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border: none;
    padding: 10px;
    color: #fff;
    margin-right: 5rem;
    overflow: hidden;
}

label {
    font-size: 1.5rem;
    color: #fff;
    padding-top: .5rem;
}

.p {
    height: .5rem;
    width: 3rem;
    background-color: aqua;
    align-items: start;
    display: flex;
    /* margin-left: -14rem; */
}

.hd {
    padding-bottom: 2rem;
    height: 3rem;
    overflow: hidden;

}

input,
textarea {
    font-size: 18px;
    padding-top: .5rem;
    width: 30rem;
    background-color: #171717;
    color: #fff;
    border: none;
    border-bottom: 2px solid #000;
    text-align: center;
}

textarea {
    height: 5rem;
}

button {
    width: 5rem;
    font-size: 18px;
    padding: 5px 3px;
    margin-top: 1rem;
    border: none;
    color: aqua;
    font-weight: 600;
    border: 2px solid aqua;
    background-color: #171717;
}

button:hover {
    background-color: aqua;
    color: #171717;
}


    /**
    animation
    */

h2 {
    animation: come 2s ease;
}
@keyframes come {
    0% {
        transform: translateY(-450%);
    }

    100% {
        transform: translateY(0);
    }
}

.one{
    animation: one 1.5s ease-in;
}
@keyframes one {
    0%{
        transform: translateX(300%);
    }
}

.two{
    animation: two 1.9s ease-in;
}
@keyframes two {
    0%{
        transform: translateX(500%);
    }
}

.three{
    animation: three 2.2s ease-in;
}
@keyframes three {
    0%{
        transform: translateX(300%);
    }
}

.four{
    animation: four 2.5s ease-in;
}
@keyframes four {
    0%{
        transform: translateX(500%);
    }
}

input, textarea{
    animation: input 3s ease-in;
}
@keyframes input {
    0%{
        transform: translateX(-200%);
    }
}

button{
    animation: but 2s ease-in;
}
@keyframes but {
    0%{
        transform: translateY(350%);
    }
}



    /**
    media query
    */
@media (width < 800px) {

    form {
        margin-left: auto;
        margin-right: auto;
        width: 20rem;
    }

    input,
    textarea {
        font-size: 18px;
        padding-top: .5rem;
        width: 15rem;
        background-color: #171717;
        color: #fff;
        border: none;
        border-bottom: 2px solid #000;
        text-align: center;
    }

    button {
        margin-left: 0px;
    }

    .p{
        height: 1px;
    }
}
</style>