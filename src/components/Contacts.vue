<template>
    <div class="f">
        <Form class="form" action="https://formspree.io/f/mjvdvzqd" method="post">
            <h2>Send me a Message</h2>
            <label for="Name">Name</label>
            <input type="text" name="Name" id="name" placeholder="Enter Name" required>
            <label for="Surname">Last Name</label>
            <input type="text" name="Surname" id="Lname" placeholder="Enter Last Name" required>
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
    margin-left: -10rem;
}

form {
    width: 20rem;
    height: 30rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border: none;
    margin: 20px 10px;
    padding: 10px;
    color: #3c2a21;
    margin-right: 5rem;
}

label {
    font-size: 1.5rem;
    color: #3c2a21;
}

input,
textarea {
    font-size: 18px;
    background-color: #d5cea3;
    color: #3c2a21;
    border: none;
    border-bottom: 2px solid #3c2a21;
    text-align: center;
}

textarea {
    height: 5rem;
}

button {
    width: 5rem;
    font-size: 18px;
    padding: 5px 3px;
    margin-top: 5px;
    border: none;
    color: #3c2a21;
    background-color: #d5cea3;
    transform: translateX(150%);
}

button:hover {
    background-color: #3c2a21;
    color: #d5cea3;
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

@media (width < 900px) {
    .f{
        margin-left: auto;
        margin-right: auto;
    }
}
</style>