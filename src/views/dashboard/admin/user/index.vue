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
                <th scope="col" class="px-6 py-3">nama</th>
                <th scope="col" class="px-6 py-3">username</th>
                <th scope="col" class="px-6 py-3">password</th>
                <th scope="col" class="px-6 py-3">role</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody
              class="text-black bg-white"
              v-for="(user, index) in users"
              :key="users.id"
            >
              <tr class="bg-white border-b dark:border-gray-700">
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4 uppercase">{{ user.nama }}</td>
                <td class="px-6 py-4">{{ user.nim }}</td>
                <td class="px-6 py-4">{{ user.password }}</td>
                <td class="px-6 py-4 uppercase">{{ user.role }}</td>
                <td class="px-6 py-4 mr-5">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Edit
                  </a>
                  <a
                    @click="deleteUsers(user.id)"
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
    <!--end Content -->
  </div>
</template>

<script setup lang="ts">
import { supabase } from "../../../../supabase";
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";

const users = ref({});

const getUsers = async () => {
  const { data, error } = await supabase.from("user").select("*");
  users.value = data;
};

onMounted(() => {
  getUsers();
});

const deleteUsers = async (id: number) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const { error } = await supabase.from("user").delete().eq("id", id);
        getUsers();
        if (error) throw error;
      }
    });
  } catch (error: any) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
</script>
