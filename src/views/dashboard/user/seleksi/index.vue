<template>
  <div class="flex bg-[#051367]">
    <sidebarUser />
    <div class="w-full h-screen text-white">
      <div class="flex items-center justify-center p-40">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex justify-between mb-10">
            <h1 class="font-freakeOne text-2xl">Riwayat Seleksi</h1>
          </div>
          <table class="w-full text-lg text-left">
            <thead class="uppercase bg-[#2D31FA]">
              <tr>
                <th scope="col" class="px-6 py-3">NO.</th>
                <th scope="col" class="px-6 py-3">DIVISI</th>
                <th scope="col" class="px-6 py-3">Tanggal Daftar</th>
                <th scope="col" class="px-6 py-3">Tanggal Wawancara</th>
                <th scope="col" class="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody
              v-for="(user, index) in users"
              :key="users.id"
              class="text-black bg-white"
            >
              <tr class="bg-white border-b dark:border-gray-700">
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4">{{ user.divisi }}</td>
                <td class="px-6 py-4">{{ user.tanggalDaftar }}</td>
                <td class="px-6 py-4">{{ user.wawancara.tanggalWawancara }}</td>
                <td class="px-6 py-4">{{ user.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from "../../../../supabase";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const users = ref({});
const wawancara = ref({});

const getUsers = async () => {
  const { data } = await supabase
    .from("user")
    .select("*, wawancara:divisi(*)")
    .eq("id", id);
  users.value = data;
};

onMounted(() => {
  getUsers();
});
</script>
