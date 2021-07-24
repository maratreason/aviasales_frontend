export const tabModule = {
    state: () => ({
        activeTabId: 1,
        tabs: [
            {id: 1, title: "Самый дешевый", active: true},
            {id: 2, title: "Самый быстрый", active: false},
            {id: 3, title: "Оптимальный", active: false},
        ],
    }),
    getters: {
        setActiveButton(state) {
            state.tabs.map(tab =>
                +tab.id === state.activeTabId
                    ? (tab.active = true)
                    : (tab.active = false),
            );
        },
    },
    mutations: {
        setActiveTab(state, id) {
            state.activeTabId = id;
        },
    },
    actions: {},
    namespaced: true,
};
