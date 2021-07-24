<template>
    <div class="home">
        <div v-if="isLoading"><v-loader /></div>

        <h1 style="color: red" v-else-if="error">{{ error }}</h1>

        <v-card
            v-else
            class="home-cards"
            v-for="ticket in setupPagination(getSortedTicketsByMenu)"
            :key="ticket.price + Date.now()"
            :ticket="ticket"
        />

        <v-paginate
            v-if="!isLoading"
            v-model="page"
            :page-count="pageCount"
            :click-handler="changePage"
            :prev-text="'Назад'"
            :next-text="'Вперед'"
            :container-class="'pagination'"
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            :next-link-class="'page-link'"
            :prev-link-class="'page-link'"
        />
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";
import paginationMixin from "@/mixins/paginationMixin";
import VCard from "@/components/v-card/VCard";

export default {
    name: "Home",
    mixins: [paginationMixin],
    components: {VCard},
    methods: {
        ...mapActions({
            fetchTickets: "fetchTickets",
            fetchSearchId: "fetchSearchId",
        }),
        ...mapMutations({
            setLoading: "setLoading",
        }),
    },
    computed: {
        ...mapState({
            tickets: state => state.tickets,
            searchKey: state => state.searchKey,
            activeTabId: state => state.tab.activeTabId,
            checkedId: state => state.checkedId,
            isLoading: state => state.isLoading,
            error: state => state.error,
            totalPages: state => state.totalPages,
        }),
        ...mapGetters({
            getSortedTicketsByMenu: "getSortedTicketsByMenu",
        }),
    },

    mounted() {
        if (!this.searchKey) {
            this.fetchSearchId();
        }
        setTimeout(() => {
            this.fetchTickets();
        }, 1000);
        this.getSortedTicketsByMenu;
    },
    watch: {
        activeTabId() {
            this.setLoading(true);
            this.fetchTickets();
        },
        checkedId() {
            this.setLoading(true);
            this.fetchTickets();
        },
    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;

    &-cards {
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
}
</style>
