<!-- <template>
    <div class="page">
    <div class="box">
        <div>
            <span style="--i:0;"></span>
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
        </div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.page{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.box {
    position: relative;
    width: 200px;
    height: 200px;
    top: 10%;
    transform-style: preserve-3d;
    transform: rotateX(-30deg'deg');
    animation: anim 4s linear infinite;
}

/* @keyframes anim {
    0%{
        transform: rotateX(10deg'angle') rotateY(0deg'angle');

    }
    100%{
transform: rotateX(10deg'angle') rotateY(360deg'angle');
    }
} */

.box div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
  
}

.box div span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(#65150F, #481F01);
    transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
}
</style> -->

<template>
    <div>
<div class="arrow">
    <span></span>
    <span></span>
    <span></span>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.arrow{
    position: absolute;
    top: 90%;
    left: 50%;
    width: 2rem;
    transform: translate(-50%, -50%);
}

.arrow span{
    display: block;
    width: 2rem;
    height: 2rem;
    border-bottom: 5px solid brown;
    border-right: 5px solid brown;
    transform: rotate(45deg);
    margin: -.2rem;
    animation:  swipe 2s infinite;
}
.arrow span:nth-child(2){
    animation-delay: -.4s;
}

@keyframes swipe {
    0%{
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}

@media (width < 768px) {
    .arrow{
        display: none;
    }
}
</style>