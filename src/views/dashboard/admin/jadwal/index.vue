<template>
  <div class="flex bg-[#051367]">
    <SidebarAdmin />
    <!-- Content -->
    <div class="w-full h-screen text-white">
      <div class="flex items-center justify-center p-40">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-lg text-left">
            <thead class="uppercase bg-[#2D31FA]">
              <tr>
                <th scope="col" class="px-6 py-3">NO.</th>
                <th scope="col" class="px-6 py-3">nim</th>
                <th scope="col" class="px-6 py-3">nama</th>
                <th scope="col" class="px-6 py-3">jenis kelamin</th>
                <th scope="col" class="px-6 py-3">kelas</th>
                <th scope="col" class="px-6 py-3">divisi</th>
                <th scope="col" class="px-6 py-3">alasan</th>
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3">aksi</th>
              </tr>
            </thead>
            <tbody
              class="text-black bg-white"
              v-for="(user, index) in users"
              :key="users.id"
            >
              <tr class="bg-white border-b dark:border-gray-700">
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4">{{ user.nim }}</td>
                <td class="px-6 py-4">{{ user.nama }}</td>
                <td class="px-6 py-4">{{ user.jenisKelamin }}</td>
                <td class="px-6 py-4">{{ user.kelas }}</td>
                <td class="px-6 py-4">{{ user.divisi }}</td>
                <td class="px-6 py-4">{{ user.alasan }}</td>
                <td class="px-6 py-4">{{ user.status }}</td>
                <td class="px-6 py-4 mr-5">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!--end Content -->
  </div>
</template>
<script setup lang="ts">
import { supabase } from "../../../../supabase";
import { ref, onMounted } from "vue";

const users = ref({});

const getUsers = async () => {
  const { data, error } = await supabase.from("user").select("*");
  users.value = data;
};

onMounted(() => {
  getUsers();
});
</script>
