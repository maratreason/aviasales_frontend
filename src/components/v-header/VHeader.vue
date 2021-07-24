<template>
    <div class="header">
        <img class="logo" :src="Logo" alt="">
    </div>
</template>

<script>
import Logo from "@/assets/logo.png";

export default {
    data: () => ({
        Logo
    }),
};
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        .logo {
            margin: 50px auto;
            max-width: 100%;
        }
    }
</style>
