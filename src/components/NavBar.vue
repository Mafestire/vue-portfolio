<template>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="text-decoration: none;"><router-link
                                to="/"><h2>S</h2></router-link></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="display: flex;
                justify-content: flex-end;">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><router-link
                                to="/">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> <router-link to="/resume">Resume</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link "> <router-link to="/projects">Projects</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link "> <router-link to="/testimonials">Testimonials</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link "> <router-link to="/contacts">Contacts</router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <!-- <div class="nav">
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
            <i class="fa-solid fa-bars"></i>
        </div>
    </div> -->
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
.navbar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 3rem;
    top: 0;
    z-index: 10;
    box-shadow: 0 5px 5px #8a307f;
}

/* .nav {
    display: flex;
    justify-content: space-between;
    width: 50%;
    transform: translateX(35%);
    flex-wrap: wrap;
} */

i {
    display: none;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    font-size: 60px;
}

.navbar h2 {
    margin-left: 15px;
    color: #8a307f;
    font-size: 2.5rem;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 0rem;
}

.navbar h2 a {
    text-decoration: none;
}

.navbar h2:hover {
    font-size: 45px;
}

.navbar ul{
    display: flex;
    justify-content: flex-end;
    margin-left: 28rem;
}

.navbar li {
    list-style: none;
    text-decoration: none;

}

.navbar a {
    list-style: none;
    text-decoration: none;
    margin-right: 15px;
    font-size: 24px;
    color: #8a307f;
}

.navbar a:hover {
    background-color: #8a307f;
    color: rgb(175, 175, 238);
    padding: 5px;
}

@media (max-width: 768px) {
    .navbar{
        height: 4rem;
    }
}
</style>