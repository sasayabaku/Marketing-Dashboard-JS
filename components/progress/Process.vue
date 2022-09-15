<template>
    <div class="whole">
        <div class="radial-progress text-primary bg-gray-200" style="--value:70;">View<br />70%</div>
        <div class="connect_line"></div>
        <div class="radial-progress text-primary bg-gray-200" style="--value:30;">Buy<br />30%</div>
        <div class="connect_line"></div>
        <div class="radial-progress text-primary bg-gray-200" style="--value:95;">95%</div>
        <div class="connect_line"></div>
        <div class="radial-progress text-primary bg-gray-200" style="--value:46;">46%</div>
    </div>
</template>
<script setup>
const Process = resolveComponent('Process');
</script>

<style lang="scss" scoped>
    .whole {
        position: relative;
        display: flex;
        padding: 2rem;

        width: 80%;

        background-color: white;
        border-radius: 1rem;
    }
    .connect_line {
        position: relative;
        width: 6rem;
    }
    .connect_line::after {
        content: "";
        display: inline-block;
        margin: 0 2rem;
        width: 80%;
        height: 3px;
        background-color: #37536d;
        position: absolute;
        top: 50%;
        /* left: -1rem; */
        transform: translateY(-50%) translateX(-1.5rem);
    }
</style>