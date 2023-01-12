<template>
    <div class="nav">
        <a href="/" style="text-decoration: none; font-size: 2rem;">
            <h2>S</h2>
        </a>
        <ul class="navbar" id="navbar">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/testimonials">Testimonials</router-link></li>
            <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
        <div class="mobile">
            <!-- <i class="fa-solid fa-bars"></i> -->
        </div>
    </div>
</template>

<script>
// $(document).ready(function () {
//     $('.mobile').click(funtion(){
//         ${'mobile'}.toggleClass('active')
//         $('.navbar').toggleClass('active') 
//     }
// )}
// )

export default {
            // data() {
            //     methods: {
            //         $(document).ready(function () {
            //             $('.mobile').click(funtion(), {
            //                 $(mobile){toggleClass('active')},
            //                 $(mobile){toggleClass('active')}
            //             })
            //         })
            //     }

            // }
            // return: {methods}
        }
</script>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 3rem;
    top: 0;
    z-index: 10;
    box-shadow: 0 5px 5px #8a307f;
}

.navbar {
    display: flex;
    justify-content: space-between;
    width: 50%;
    transform: translateX(35%);
    flex-wrap: wrap;
}

i {
    display: none;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    font-size: 60px;
}

.nav h2 {
    margin-left: 15px;
    color: #8a307f;
    text-decoration: none;
    margin-top: 0rem;
}

.nav h2 a {
    text-decoration: none;
}

.nav h2:hover {
    font-size: 45px;
}

.navbar li {
    list-style: none;
    text-decoration: none;

}

.navbar li a {
    list-style: none;
    text-decoration: none;
    margin-right: 15px;
    font-size: 24px;
    color: #8a307f;
}

.navbar li a:hover {
    background-color: #8a307f;
    color: rgb(175, 175, 238);
    padding: 5px;
}

@media (max-width: 768px) {

    .mobile {
        display: block;
        font-size: 1.5rem;
        margin: 1rem;
        float: right;
        cursor: pointer;
        text-align: center;
    }

    .mobile::before {
        content: '\f0c9';
        font-family: fontAwesome;

    }

    .mobile.active::before {
        content: '\f00d';
        font-family: fontAwesome;
    }

    .navbar {
        display: none;
    }

}
</style>