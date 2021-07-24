<template>
    <div class="container">
        <div class="app">
            <v-header></v-header>
            <div class="content">
                <v-sitebar></v-sitebar>

                <div class="content-wrapper">
                    <v-button-group />
                    <div class="content-cards">
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VHeader from "@/components/v-header/VHeader";
import VSitebar from "@/components/v-sitebar/VSitebar";
import VButtonGroup from "@/components/UI/v-button-group/VButtonGroup";

export default {
    name: "App",
    components: {
        VHeader,
        VSitebar,
        VButtonGroup,
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #f3f7fa;
    color: #4a4a4a;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
}
.container {
    width: 900px;
    margin: 0 auto;
}
.app {
    height: 100%;
}
.content {
    display: flex;
    justify-content: space-between;

    &-wrapper {
        width: 100%;
    }

    &-cards {
        margin: 15px 0;
    }
}

.pagination {
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 1rem;
    justify-content: center;

    .page-item {
        display: block;
        background: #fff;
        border-radius: 7px;

        &:not(:last-child) {
            margin-right: 5px;
        }
        .page-link {
            display: inline-block;
            padding: 9px 14px;
            /* border: 1px solid #ccc; */
            border-radius: 7px;
            box-shadow: 0px 3px 4px rgba(#000, 0.1);

            &.active,
            &:hover {
                background: #2196f3;
                border-color: #2196f3;
                color: #fff;
            }
        }
    }
}
</style>
