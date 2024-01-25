<template>
    <!-- <Res /> -->


    <div class="do">
        <div class="top">
            <h1 class="sl" style="width: 13rem;">What do i do</h1>
        </div>

        <div class="cards">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><i class="fa-solid fa-window-restore"></i></h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Web Development</h6>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><i class="fa-solid fa-table-columns"></i></h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Web Design</h6>

                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><i class="fa-sharp fa-solid fa-mobile"></i></h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">UI/UX Design</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Res from '@/components/Res.vue'
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
    // components: { Res }
}
</script>

<style scoped>
/* What i DO */

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    font-family: 'Nunito Sans', sans-serif;
}

h1 {
    font-size: 2rem;
    font-weight: 100;
    color: #fff;
    border-bottom: 1px solid aqua;
    width: 7rem;
    text-align: center;
    padding: .5rem;
    font-family: 'Nunito Sans', sans-serif;
}


h2 {
    color: #fff;
}

.cards {
    display: flex;
    justify-content: space-between;
    padding: 0 11.1rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
}

.card {
    background-color: #171717;
    color: white;
    border: 1px solid black;
    padding: 2rem 1rem;
    width: 20rem;
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
    font-family: 'Nunito Sans', sans-serif;
}

@media (width < 766px) {
    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3rem;
        font-family: 'Nunito Sans', sans-serif;
    }

    h1{
        font-size: 1.7rem;
    }

    .cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
        margin-bottom: 0rem;
        padding-left: 0rem;
    padding-right: 0rem;
    width: 100%;
    }

    .card {
        background-color: #171717;
        color: white;
        border: 1px solid black;
        padding: 2rem 1rem;
        width: 16rem;
        margin-bottom: 1rem !important;
    }
}

@media (width < 1010px) {
    .cards {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3rem;
        margin-bottom: 2rem;
        padding: 0 3rem;
    }

    .card {
        background-color: #171717;
        color: white;
        border: 1px solid black;
        padding: 2rem 1rem;
        width: 12rem;
        height: 40vh;
        margin-left: 0rem;
        margin-bottom: 0rem;
    }
}
@media (width > 1010px) {
    .cards {
    display: flex;
    justify-content: space-around;
    padding-left: 11.1rem;
    padding-right: 11.1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
}

    .card {
    background-color: #171717;
    color: white;
    border: 1px solid black;
    padding: 2rem 1rem;
    width: 20rem;
}
}
</style>