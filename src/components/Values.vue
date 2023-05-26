<template>
    <div class="value">


        <div class="all">
            <div class="v">
                <div class="dot"></div>
                <h6>My Values</h6>
            </div>

            <h2>My Core Values</h2>

            <div class="more">
                <ul class="list-group one list-group-vertical">
                    <li class="list-group-item a" data="1">01</li>
                    <li class="list-group-item a" data="2">02</li>
                    <li class="list-group-item a" data="3">03</li>
                    <li class="list-group-item a" data="4">04</li>
                    <!-- <li class="list-group-item a" data="5">05</li> -->
                </ul>
                <ul class="list-group two list-group-vertical-sm w-50">
                    <ul class="i">
                        <li class="list-group-item b">Collaboration</li>
                        <li class="list-group-item c">It is key to achieve the best work relations.</li>
                    </ul>
                    <ul class="i">
                        <li class="list-group-item b">Integrity</li>
                        <li class="list-group-item c">I strive to do the right thing, even when no one is looking.</li>
                    </ul>
                    <ul class="i">
                        <li class="list-group-item b">Growth</li>
                        <li class="list-group-item c">I have the drive to continuously improve myself in my work . </li>
                    </ul>
                    <ul class="i">
                        <li class="list-group-item b">Accountability</li>
                        <li class="list-group-item c">taking responsibility for both my performance and outcomes.</li>
                    </ul>
                    <!-- <ul class="i" style="margin-top: 1.2rem;">
                <li class="list-group-item b">22</li>
                <li class="list-group-item ">22</li>
            </ul> -->
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.value {
    padding: 5rem 11.1rem;
}

.all {
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Nunito Sans', sans-serif;

}

h2 {
    color: #fff;
    font-size: 2.5rem;
}

.v {
    display: flex;
    justify-content: space-around;
    border: 2px solid aqua;
    width: 12rem;
    padding: .5rem .5rem;
    margin-left: -40rem;
}

.dot {
    margin: .5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: aqua;
    margin: .5rem;

}

.v h6 {
    color: #fff;
    font-size: 1.5rem;
    font-family: 'Nunito Sans', sans-serif;}



.more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

.list-group li {
    background-color: #171717;
    color: #fff;
    border: none;
}

.a {
    font-size: 4rem;
    color: aqua !important;
    font-weight: 700;
}

.b {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: -.5rem;
}

.one {
    width: 4rem;
}

.two {
    margin-top: 1rem;
}

.i {
    height: 7rem;
}

@media (width < 800px) {
    .all {
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 1rem;
        width: 39rem;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Nunito Sans', sans-serif;}
    

    .value {
        padding: 1rem 1rem;
    }

    .v {
        display: flex;
        justify-content: space-around;
        border: 2px solid aqua;
        width: 12rem;
        padding: .5rem .5rem;
        margin-bottom: 3rem;
        margin-left: auto;
        margin-right: auto;
    }
}

@media (width < 500px) {
    .all {
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 0rem;
        width: 21rem;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Nunito Sans', sans-serif;}
    

    .more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        width: 21rem;
    }

    .one {
        width: 3rem;
        margin-left: -6rem;
    }

    .a {
        font-size: 4rem;
        color: aqua !important;
        font-weight: 700;
    }

    .b {
        font-weight: 400;
        font-size: 1.5rem;
        margin-bottom: -.5rem;
    }

    .list-group .c {
        width: 15rem;
    }
}
</style>