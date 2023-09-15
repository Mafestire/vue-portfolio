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
                    <li class="list-group-item  first a" data="1">01</li>
                    <li class="list-group-item second a" data="2">02</li>
                    <li class="list-group-item third a" data="3">03</li>
                    <li class="list-group-item forth a" data="4">04</li>
                    <!-- <li class="list-group-item a" data="5">05</li> -->
                </ul>
                <ul class="list-group two list-group-vertical-sm w-50">
                    <ul class="i">
                        <li class="list-group-item b s">Collaboration</li>
                        <li class="list-group-item c t">It is key to achieve the best work relations.</li>
                    </ul>
                    <ul class="i">
                        <li class="list-group-item b u">Integrity</li>
                        <li class="list-group-item c r">I strive to do the right thing, even when no one is looking.</li>
                    </ul>
                    <ul class="i">
                        <li class="list-group-item b w">Growth</li>
                        <li class="list-group-item c x">I have the drive to continuously improve myself in my work . </li>
                    </ul>
                    <ul class="i">
                        <li class="list-group-item b y">Accountability</li>
                        <li class="list-group-item c z">taking responsibility for both my performance and outcomes.</li>
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
    padding: 0rem 11.1rem;
}

.all {
    border: 4px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Nunito Sans', sans-serif;
    animation: all 1s ease-in;
}

h2 {
    color: #fff;
    font-size: 2.5rem;
    animation: head 5s ease-in;
}

.v {
    display: flex;
    justify-content: space-around;
    border: 4px solid aqua;
    width: 12rem;
    padding: .7rem .7rem;
    margin-left: -49rem;
    background-color: #171717;
    animation: value 2s ease-in;

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
    font-size: 1.7rem;
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
    text-decoration: none;

}

.a {
    font-size: 4rem;
    color: aqua !important;
    font-weight: 700;
    margin-left: -1rem;
}

.b {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: -.5rem;
}

.one {
    width: 5rem;
    overflow: hidden;
    /* background-color: white; */
}

.two {
    margin-top: 1rem;
    overflow: hidden;
}

.i {
    height: 7rem;
}

        /*--- animation ---*/ 

@keyframes value {
    0%{
        opacity: 0;
        transform: rotate(-45deg);
    }
}

@keyframes all {
    0%{
        opacity: 0;
    }
}

@keyframes head {
    0%{
        opacity: 0;
    }
}
.first{
    animation: one 2s ease-in;
}

@keyframes one {
    0%{
        transform: translateX(-100%);
    }
}

.second{
    animation: two 3s ease-in;
}
@keyframes two {
    0%{
        transform: translateX(-100%);
    }
}
.third{
    animation: three 4s ease-in;
}
@keyframes three {
    0%{
        transform: translateX(-100%);
    }
}
.forth{
    animation: four 5s ease-in;
}
@keyframes four {
    0%{
        transform: translateX(-100%);
    }
}
.s{
    animation: s 2s ease-in;
}
@keyframes s {
    0%{
        transform: translateX(100%);
    }
}
.t{
    animation: t 2.5s ease-in;
}
@keyframes t {
    0%{
        transform: translateX(100%);
    }
}
.u{
    animation: u 3s ease-in;
}
@keyframes u {
    0%{
        transform: translateX(100%);
    }
}
.r{
    animation: r 3.5s ease-in;
}
@keyframes r {
    0%{
        transform: translateX(100%);
    }
}
.w{
    animation: w 4s ease-in;
}
@keyframes w {
    0%{
        transform: translateX(100%);
    }
}
.x{
    animation: x 4.5s ease-in;
}
@keyframes x {
    0%{
        transform: translateX(100%);
    }
}
.y{
    animation: y 5s ease-in;
}
@keyframes y {
    0%{
        transform: translateX(100%);
    }
}
.z{
    animation: z 5.5s ease-in;
}
@keyframes z {
    0%{
        transform: translateX(100%);
    }
}

        /*--- Responsiveness ---*/
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
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
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

    .y{
        margin-top: 1rem;
    }

    .one {
        width: 18%;
        margin-left: -6rem;
    }

    .two{
        width: 100%;overflow: visible;
    }

    .a {
        font-size: 3rem;
        color: aqua !important;
        font-weight: 700;
    }

    .b {
        font-weight: 400;
        font-size: 1.2rem;
        margin-bottom: -.5rem;
    }


    .list-group .c {
        width: 15rem;
    }

    .first{
        margin-top: rem;
    }

    .second {
        margin-top: 1rem;
    }
    .third{
        margin-top: 2rem;
    }
    .forth{
        margin-top: 2rem;
    }
    .i{
        width: 5rem;
    }
}
</style>