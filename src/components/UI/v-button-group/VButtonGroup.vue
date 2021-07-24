<template>
    <div class="button-group">
        <v-button-item
            v-for="tab in tabs"
            :key="tab.id"
            :class="tab.active ? 'active' : ''"
            @click="setButton(tab.id)"
        >
            {{ tab.title }}
        </v-button-item>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from "vuex";

export default {
    name: "v-button-group",
    methods: {
        ...mapMutations({
            setActiveTab: "tab/setActiveTab",
        }),
        setButton(id) {
            this.setActiveTab(id);
            this.setActiveButton;
        }
    },
    computed: {
        ...mapState({
            activeTabId: state => state.tab.activeTabId,
            tabs: state => state.tab.tabs,
        }),
        ...mapGetters({
            setActiveButton: "tab/setActiveButton",
        }),
    },
};
</script>

<style lang="scss" scoped>
.button-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
    text-transform: uppercase;
    overflow: hidden;
}
</style>
