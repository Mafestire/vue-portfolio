<template>
    <div class="all">
        <h1>Projects</h1>
        <div class="detail"></div>
        <Projects />
    </div>
</template>

<script>
import Projects from "@/components/Projects.vue";
export default {
    components: { Projects }
}
</script>

<style scoped>
.all{
    padding: 35px 15px;
    transform: translateY(10%);
    margin-bottom: 2rem;
    text-align: center;
    color: rgb(175, 175, 238);
}
</style>