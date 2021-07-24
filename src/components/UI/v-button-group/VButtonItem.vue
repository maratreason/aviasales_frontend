<template>
    <button class="button-item">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "v-button-item",
};
</script>

<style lang="scss" scoped>
.button-item {
    padding: 15px 0;
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    border: 1px solid #DFE5EC;
    cursor: pointer;

    &:hover,
    &.active {
        background: #2196f3;
        border-color: #2196f3;
        color: #fff;
    }
}
</style>
