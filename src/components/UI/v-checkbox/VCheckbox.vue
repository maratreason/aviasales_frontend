<template>
    <div class="checkbox">
        <input
            type="checkbox"
            class="custom-checkbox"
            :class="menuItem.checked ? 'checked' : ''"
            :id="menuItem.id"
            :name="menuItem.alias"
            :value="menuItem.alias"
            :checked="menuItem.checked"
        />
        <label :for="menuItem.id">{{menuItem.title}}</label>
    </div>
</template>

<script>
export default {
    name: "v-checkbox",
    props: {
        menuItem: {
            type: Object,
            required: true
        }
    },
};
</script>

<style lang="scss">
.checkbox {
    padding: 10px 0;
    padding-left: 1.5rem;
    &:hover {
        background: #F1FCFF;
    }
}

.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        font-size: 0.8rem;
        cursor: pointer;

        &::before {
            content: "";
            display: inline-block;
            width: 1.2rem;
            height: 1.2rem;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #adb5bd;
            border-radius: 1px;
            margin-right: 0.5rem;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }
    }

    &.checked {
        & + label::before {
            border-color: #0b76ef;
            background-color: #0b76ef;
            background-image: url(
                "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
        }
    }

    &:not(:disabled):not(:checked) + label:hover::before {
        border-color: #b3d7ff;
    }
    &:not(:disabled):active + label::before {
        background-color: #b3d7ff;
        border-color: #b3d7ff;
    }
    &:focus + label::before {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    &:focus:not(:checked) + label::before {
        border-color: #80bdff;
    }
    &:disabled + label::before {
        background-color: #e9ecef;
    }
}
</style>
