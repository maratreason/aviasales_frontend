import {createApp} from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import components from "@/components/UI";

const app = createApp(App);

/**
 * Автоматический импорт и регистрация UI-компонентов.
 */
components.forEach(component => {
    app.component(component.name, component);
});

app.use(store)
    .use(router)
    .mount("#app");
