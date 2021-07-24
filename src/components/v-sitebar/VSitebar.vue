<template>
    <div class="sitebar">
        <h3 class="sitebar-title">Количество пересадок</h3>
        <div class="sitebar-checkboxes">
            <v-checkbox
                v-for="menuItem in getCheckedMenu"
                :key="menuItem.id"
                :menuItem="menuItem"
                :setCheckedId="setCheckedId"
                @click="setCheckedId(menuItem.id)"
            />
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from "vuex";

export default {
    data: () => ({}),
    methods: {
        ...mapMutations({
            setCheckedId: "setCheckedId",
        }),
        ...mapActions({
            updateMenu: "updateMenu",
        }),
    },
    computed: {
        ...mapState({
            menu: "menu",
            checkedId: "checkedId",
        }),
        ...mapGetters({
            getCheckedMenu: "getCheckedMenu",
        }),
    },
    watch: {
        checkedId() {
            this.getCheckedMenu;
        }
    }
};
</script>

<style lang="scss" scoped>
.sitebar {
    width: 400px;
    height: 100%;
    background: #fff;
    margin-right: 15px;
    border-radius: 6px;
    padding: 1.5rem 0;
    box-shadow: 0px 5px 7px rgba(#000, 0.15);

    &-title {
        text-transform: uppercase;
        margin-bottom: 1rem;
        margin-left: 1.5rem;
    }
}
</style>
