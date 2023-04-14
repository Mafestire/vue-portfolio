<template>
    <div class="footer">
        <p>&copy;2023 Sibabalwe Mafestire</p>
        <ul class="foot">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/testimonials">Testimonials</router-link></li>
            <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    font-family: 'Lobster Two', cursive;

}

.footer p {
    font-size: 20px;
    color: brown;
    padding-left: 10px;
}

.foot {
    display: flex;
    justify-content: space-between;
    width: 35rem;
}

.foot li {
    list-style: none;
    margin-right: 15px;
    font-size: 20px;
}

li a {
    list-style: none;
    text-decoration: none;
    margin-right: 15px;
    font-size: 20px;
    color: brown;
}

li a:hover {
    font-size: 1.5rem;
}

@media (width < 400px) {
    .foot {
        display: none;
    }

    .footer p {
        font-size: 1.5rem;
    }

}

@media (width > 400px) {
    .foot {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .footer p {
        font-size: 1.5rem;
    }

}

@media (width > 600px) {
    .foot {
        display: flex;
        justify-content: space-between;
    }

    .footer p {
        font-size: 1.5rem;
    }

}
</style>