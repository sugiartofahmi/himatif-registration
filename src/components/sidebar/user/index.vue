<template>
  <div
    class="flex fixed flex-col text-white w-64 h-screen px-4 py-8 overflow-y-auto bg-[#2D31FA] rounded-r-3xl"
  >
    <div class="flex gap-3 justify-center items-center">
      <img width="50" src="../../../assets/Logo-himatif.png" alt="logo" />
      <h2 class="pr-4 text-2xl font-freakeOne text-center">HIMATIF</h2>
    </div>
    <div v-for="(user, index) in users" :key="users.id">
      <p class="pl-10 pt-5 uppercase">Hai, {{ user.nama }}</p>
    </div>
    <div class="flex flex-col justify-between mt-6">
      <aside>
        <ul>
          <li>
            <router-link :to="'/user/dataDiri/' + id">
              <a class="flex items-center px-4 py-2" href="#">
                <img src="../../../assets/icon/user-icon.svg" alt="icon user" />

                <span class="mx-4 font-medium">Data Diri</span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="'/user/seleksi/' + id">
              <a class="flex items-center px-4 py-2" href="#">
                <img
                  src="../../../assets/icon/seleksi-icon.svg"
                  alt="icon pendaftar"
                />

                <span class="mx-4 font-medium">Seleksi</span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="'/'">
              <a class="flex items-center px-4 py-2" href="#">
                <img
                  src="../../../assets/icon/logout-icon.svg"
                  alt="icon user"
                />

                <span class="mx-4 font-medium">Log Out</span>
              </a>
            </router-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { supabase } from "../../../supabase";
import { ref, onMounted } from "vue";
const route = useRoute();
const id = route.params.id;
const users = ref([]);

const getUsers = async () => {
  const { data } = await supabase.from("user").select("*").eq("id", id);
  users.value = data;
  console.log(id);
  console.log(users.value);
};

onMounted(() => {
  getUsers();
});
</script>
