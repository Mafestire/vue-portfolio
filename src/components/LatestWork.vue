<template>
    <Res />


    <div class="do">
        <div class="top">
            <h1 class="sl" style="width: 13rem;">What do i do</h1>
            <!-- <h2>Test</h2> -->
        </div>

        <div class="cards">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><i class="fa-solid fa-window-restore"></i></h5>
                    <!-- <p class="icon" style="color: white;"><i class="fa-solid fa-browser"></i></p> -->
                    <h6 class="card-subtitle mb-2 text-body-secondary">Web Development</h6>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><i class="fa-solid fa-table-columns"></i></h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Web Design</h6>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->

                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><i class="fa-sharp fa-solid fa-mobile"></i></h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">UI/UX Design</h6>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Res from '@/components/Res.vue'
export default {
    data() {
        return {
            education: [
                {
                    label: "Education",
                    year1: "2017",
                    year2: "2018",
                    year3: "2019",
                    year4: "2022",
                    time1: "Passed Matric",
                    time2: "Volunteerd 2018-2022",
                    time3: "Volunteerd 2019-2022",
                    time4: "Currently",
                    name1: "Mfuleni Secondary School",
                    name2: "Mange Day Care",
                    name3: "African Climate Alliance",
                    name4: "Life Choices Academy",
                    activity1: "Volleyball, Student Leadership",
                    activity2: "Helped at a Early Childhood Development focused of solft skills development and arts",
                    activity3: "Assisted to spread awearness of the need to look after the enviroment and part-taked in enviromental clean ups",
                    activity4: "Studying and practising coding",
                    image1: "",
                    image2: "",
                    image3: "",
                    image4: ""
                }
            ]
        };
    },
    components: { Res }
}
</script>

<style scoped>
/* What i DO */

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    font-family: 'Playfair Display', serif;
}


h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    border: 1px solid aqua;
    width: 10rem;
    text-align: center;
    background-color: aqua;
    padding: .5rem;
    font-family: 'Playfair Display', serif;
}

h2{
    color: #fff;
}

.cards {
    display: flex;
    justify-content: space-between;
    padding-left: 11.1rem;
    padding-right: 11.1rem;
    margin-top: 5rem;
    margin-bottom: 8rem;
}

.card {
    background-color: #171717;
    color: white;
    border: 1px solid black;
    padding: 2rem 1rem;
}

.card-title {
    align-items: center;
    text-align: center;
    color: aqua;
    font-size: 4rem;
}

.card-subtitle {
    text-align: center;
    margin-top: 1.5rem;
    font-family: 'Playfair Display', serif;
}
</style>