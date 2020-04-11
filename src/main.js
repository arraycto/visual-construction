import Vue from "vue";
import { Container, Aside, Main, Button } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import Title from "./components/Title";

Vue.config.productionTip = false;

Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Main.name, Main);
Vue.component(Button.name, Button);
Vue.component(Title.name, Title);

new Vue({ router, store, render: h => h(App) }).$mount("#app");
