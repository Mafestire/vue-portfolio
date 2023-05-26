<template>
    <!-- navbar -->
    <div class="all">
    
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid" style="color: #fff;">
            <!-- <a class="navbar-brand" href="#" style="text-decoration: none;"><router-link to="/">
                    <h2>S</h2>
                </router-link>
            </a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="color: #fff !important;">
                <span class="navbar-toggler-icon" style="color: #fff !important;"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="color: #fff;">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="display: flex;
                                justify-content: flex-end; z-index: 1;">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
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
        
</div>
</template>

<script>


</script>

<style scoped>
/* .all{
    overflow: hidden;
} */
.navbar {
    display: flex;
    /* overflow-y: hidden; */
    z-index: 1;
    justify-content: space-between;
    width: 100%;
    height: 1rem;
    top: 1rem;
    z-index: 10;
    padding: 5rem 10rem;
    font-family: 'Nunito Sans', sans-serif;
    animation: in 2s ease-in;
}

@keyframes in {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }
}

i {
    display: none;
    align-items: center;
    cursor: pointer;
}

.navbar h2 a {
    text-decoration: none;
}

.navbar h2:hover {
    font-size: 4rem;
}

.navbar ul {
    display: flex;
}

.navbar li {
    list-style: none;
    text-decoration: none;
}

.navbar a {
    list-style: none;
    text-decoration: none;
    margin-right: 15px;
    font-size: 1.3rem;
    color: #ffff;
}

@media (width < 800px) {
    .navbar {
    display: flex;
    /* overflow: hidden; */
    z-index: 1;
    justify-content: space-between;
    width: 100%;
    height: 1rem;
    top: 1rem;
    z-index: 10;
    padding: 5rem 10rem;
    font-family: 'Nunito Sans', sans-serif;
    animation: in 1s ease-in;
}
.collapse{
    background-color: #171717;
    padding: 1rem 4rem;
}
}
</style>