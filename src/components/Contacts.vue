<template>
    <div class="f">
        <Form class="form" action="https://formspree.io/f/mjvdvzqd" method="post">
            <div class="hd">
                <h2>Send me a Message</h2>
                <div class="p"></div>
            </div>

            <label for="Name">Full Name</label>
            <input type="text" name="Name" id="name" placeholder="Enter Name" required>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Email Address" required>
            <label for="number">Contact Number</label>
            <input type="number" name="number" id="number" placeholder="Enter Contact Number" required>
            <label for="message">Message</label>
            <textarea type="text" name="message" id="message" placeholder="Type in message" required></textarea>
            <button type="submit">Submit</button>
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
    width: 30rem;
    height: 35rem;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border: none;
    padding: 10px;
    color: #fff;
    margin-right: 5rem;
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

.hd{
    padding-bottom: 2rem;
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

@media (width < 768px) {

    .f,
    form {
        margin-left: auto;
        margin-right: auto;
        width: 15rem;
    }

    button {
        margin-left: -10px;
    }
}
</style>