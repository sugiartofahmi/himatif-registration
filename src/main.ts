import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import "./index.css";
import Navbar from "../src/components/navbar/index.vue";
import SidebarAdmin from "./components/sidebar/admin/index.vue";
import SidebarUser from "./components/sidebar/user/index.vue";
import Footer from "../src/components/footer/index.vue";
import Modal from "./components/modal/index.vue";

createApp(App)
  .use(router)
  .component("Navbar", Navbar)
  .component("SidebarAdmin", SidebarAdmin)
  .component("SidebarUser", SidebarUser)
  .component("Footer", Footer)
  .component("Modal", Modal)
  .mount("#app");
