<template>
    <div class="footer">
        <p>&copy;2023 Sibabalwe Mafestire</p>

        <div class="foot">
            <div class="quick">
                <h5>Quick links</h5>
                <ul class="links">
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/#skills">Resume</router-link></li>
                    <li><router-link to="/projects#Projects">Projects</router-link></li>
                    <li><router-link to="/projects#Testimonials">Testimonials</router-link></li>
                </ul>
            </div>

            <div class="connect">
                <h5>Socials</h5>

                <ul class="socials">
                    <li>LinkedIn</li>
                    <li>Git</li>
                    <li>Trail Head</li>
                    <li>Email</li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
    padding-top: 1rem;
    margin-top: 4rem;
}

.footer p {
    font-size: 20px;
    color: aqua;
    width: 100%;
    text-align: center;
    padding-top: 1rem;
}

.foot {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1rem;
    padding: 0rem 30%;
    border-bottom: 1px solid black;
}

.links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.links li,
.socials li {
    list-style: none;
    margin-right: 15px;
    font-size: 20px;
}

li a {
    list-style: none;
    text-decoration: none;
    margin-right: 15px;
    font-size: 20px;
    color: #fff;
}

li a:hover {
    color: aqua;
}

.socials {
    color: #fff;
    font-size: 20px;
    display: flex;
    flex-direction: column;
}

h5{
    color: aqua;
    padding-left: 2rem;
    font-size: 1.5rem;
}

@media (width < 600px) {
    .links {
        display: none;
    }

    .footer p {
        font-size: 1rem;
    }

    .links li a,
    .links li {
        list-style: none;
        margin-right: 0px;
        font-size: .8rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .links {}

}
</style>