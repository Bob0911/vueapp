import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Form } from "ant-design-vue";
createApp(App)
  .use(router)
  .use(Form)
  .mount("#app");
