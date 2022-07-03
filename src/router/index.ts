import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/index.vue";
import Pengurus from "../views/pengurus/index.vue";
import Dokumentasi from "../views/dokumentasi/index.vue";
import Signup from "../views/signup/index.vue";
import Login from "../views/login/index.vue";
import User from "../views/dashboard/admin/user/index.vue";
import Pendaftar from "../views/dashboard/admin/pendaftar/index.vue";
import Jadwal from "../views/dashboard/admin/jadwal/index.vue";
import DataDiri from "../views/dashboard/user/dataDiri/index.vue";
import Seleksi from "../views/dashboard/user/seleksi/index.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/pengurus",
    component: Pengurus,
  },
  {
    path: "/dokumentasi",
    component: Dokumentasi,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin/pendaftar",
    component: Pendaftar,
  },
  {
    path: "/admin/user",
    component: User,
  },
  {
    path: "/admin/jadwal",
    component: Jadwal,
  },
  {
    path: "/user/dataDiri/:id?",
    component: DataDiri,
  },
  {
    path: "/user/seleksi/:id?",
    component: Seleksi,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
