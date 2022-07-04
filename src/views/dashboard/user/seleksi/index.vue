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
                <th scope="col" class="px-6 py-3">WAKTU DAN TANGGAL</th>
                <th scope="col" class="px-6 py-3">AKSI</th>
              </tr>
            </thead>
            <tbody class="text-black bg-white">
              <tr class="bg-white border-b dark:border-gray-700">
                <td class="px-6 py-4">1</td>
                <td class="px-6 py-4">gg</td>
                <td class="px-6 py-4">hh</td>
                <td class="px-6 py-4 mr-5">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit
                  </a>
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Delete</a
                  >
                </td>
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

const getUsers = async () => {
  const { data, error } = await supabase.from("user").select("id", id);
  users.value = data;
};

onMounted(() => {
  getUsers();
});
</script>
