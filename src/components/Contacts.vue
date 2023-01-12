<template>
    <div class="f">
        <Form class="form" action="https://formspree.io/f/mjvdvzqd" method="post">
            <h2>Send me a Message</h2>
            <label for="Name">Name</label>
            <input type="text" name="Name" id="name" placeholder="Enter Name">
            <label for="Surname">Last Name</label>
            <input type="text" name="Surname" id="Lname" placeholder="Enter Last Name">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Enter Email Address">
            <label for="number">Contact Number</label>
            <input type="number" name="number" id="number" placeholder="Enter Contact Number">
            <label for="message">Message</label>
            <textarea type="text" name="message" id="message" placeholder="Type in message"></textarea>
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
    width: 20rem;
    height: 25rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    border: none;
    margin: 20px 10px;
    padding: 10px;
    color: palevioletred;
}

label {
    font-size: 1.5rem;
    color: palevioletred;
}

input,
textarea {
    font-size: 18px;
    background-color: rgb(175, 175, 238);
    color: #8a307f;
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
    color: #8a307f;
    background-color: rgb(175, 175, 238);
    transform: translateX(150%);
}

button:hover{
    background-color: #8a307f;
    color: rgb(175, 175, 238);
}
</style>