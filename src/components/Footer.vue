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
}

.footer p {
    font-size: 20px;
    color: #8a307f;
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
    color: #8a307f;
}

li a:hover {
    background-color: #8a307f;
    color: rgb(175, 175, 238);
    padding: 5px ;
}

@media (max-width: 768px) {
    .foot {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        width: 450px;
        height: 3rem;
        padding-bottom: 5px;
    }

    .fool li {
        margin-right: 15px;
    }

    li a {
        font-size: 12px;
    }

    .footer p {
        font-size: 16px;
    }

}
</style>