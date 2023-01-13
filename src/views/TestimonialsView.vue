<template>
    <div class="testimonials">
        <h1>Testimonials</h1>
        <Testimonials />
    </div>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue'
    export default {
        components: {Testimonials}
    }
</script>

<style scoped>
.testimonials{
    padding-top: 90px;
    color: rgb(175, 175, 238);
    text-align: center;
    padding-bottom: 40px;
}

h1{
    font-size: 34px;
}
</style>