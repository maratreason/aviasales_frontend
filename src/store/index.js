import {createStore} from "vuex";
import axios from "axios";

import {tabModule} from "@/store/tabModule";

export default createStore({
    state: {
        searchKey: null,
        isLoading: true,
        checkedId: 1,
        tickets: [],
        error: "",
        stop: false,
        menu: [
            {id: 1, title: "Все", alias: "all", checked: true},
            {id: 2, title: "Без пересадок", alias: "no_transfer", checked: false},
            {id: 3, title: "1 пересадка", alias: "1_transfer", checked: false},
            {id: 4, title: "2 пересадки", alias: "2_transfer", checked: false},
            {id: 5, title: "3 пересадки", alias: "3_transfer", checked: false},
        ],

        page: 1,
        limit: 10,
        totalPages: 0,
    },
    mutations: {
        setCheckedId(state, id) {
            state.checkedId = id;
        },
        setMenu(state, updatedmenu) {
            state.menu = updatedmenu;
        },
        setLoading(state, bool) {
            state.isLoading = bool;
        },
        setSearchKey(state, key) {
            state.searchKey = key;
        },
        setTickets(state, updatedTickets) {
            state.tickets = updatedTickets;
        },
        setError(state, error) {
            state.error = error;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
    },
    getters: {
        getCheckedMenu(state) {
            return [...state.menu].map(item => {
                if (item.id === state.checkedId) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
                return item;
            });
        },
        getSortedTickets(state) {
            return [...state.tickets].sort((ticket1, ticket2) => {
                if (state.tab.activeTabId == 1) {
                    return ticket1.price - ticket2.price;
                } else if (state.tab.activeTabId == 2) {
                    return (
                        (ticket1.segments[0].duration + ticket1.segments[1].duration) -
                        (ticket2.segments[0].duration + ticket2.segments[1].duration)
                    );
                }
                return ticket1;
            });
        },
        getSortedTicketsByMenu(state, getters) {
            return [...getters.getSortedTickets].filter(ticket => {
                if (state.checkedId == 1) {
                    return ticket;
                } else if (state.checkedId == 2) {
                    return ticket.segments[0].stops.length == 0 && ticket.segments[1].stops.length == 0;
                } else if (state.checkedId == 3) {
                    return (
                        (ticket.segments[0].stops.length <= 1 && ticket.segments[1].stops.length == 0) ||
                        (ticket.segments[0].stops.length == 0 && ticket.segments[1].stops.length <= 1)
                    );
                } else if (state.checkedId == 4) {
                    return (
                        (ticket.segments[0].stops.length == 2 && ticket.segments[1].stops.length == 0) ||
                        (ticket.segments[0].stops.length == 0 && ticket.segments[1].stops.length == 2) ||
                        (ticket.segments[0].stops.length == 1 && ticket.segments[1].stops.length == 1)
                    );
                } else if (state.checkedId == 5) {
                    return (
                        (ticket.segments[0].stops.length == 3 && ticket.segments[1].stops.length == 0) ||
                        (ticket.segments[0].stops.length == 0 && ticket.segments[1].stops.length == 3) ||
                        (ticket.segments[0].stops.length == 2 && ticket.segments[1].stops.length == 1) ||
                        (ticket.segments[0].stops.length == 1 && ticket.segments[1].stops.length == 2)
                    );
                }
                return ticket;
            });
        },

        getTicketsLength(state) {
            state.totalPages = Math.ceil(state.tickets.length / state.limit);
        },
    },
    actions: {
        async fetchSearchId({commit}) {
            try {
                const {data} = await axios.get("https://front-test.beta.aviasales.ru/search");
                commit("setSearchKey", data.searchId);
            } catch (e) {
                commit("setError", `Произошла ошибка при получении ключа запроса.`);
                console.log(e);
            } finally {
                commit("setLoading", false);
            }
        },

        async fetchTickets({state, commit}) {
            commit("setLoading", true);
            if (state.searchKey) {
                try {
                    const {data} = await axios.get("https://front-test.beta.aviasales.ru/tickets", {
                        params: {
                            searchId: state.searchKey,
                        },
                    });
                    commit("setTickets", data.tickets);
                } catch (e) {
                    commit("setError", `Произошла ошибка при загрузке данных. Перезагрузите страницу.`);
                    console.log(e);
                } finally {
                    commit("setLoading", false);
                }
            }
        },
    },
    modules: {
        tab: tabModule,
    },
});
