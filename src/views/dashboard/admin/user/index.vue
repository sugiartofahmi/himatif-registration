<template>
  <div class="flex bg-[#051367]">
    <SidebarAdmin />
    <Modal
      v-if="isModalShow"
      @cancel="closeModal"
      @submit="updateData(idUser)"
      title="Updata Data"
      cancel-text="Batal"
      submit-text="Simpan"
    >
      <form @submit.prevent="updateData(idUser)" class="w-full mr-40">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="phoneNumber"
            >
              Nama
            </label>
            <input
              v-model="nama"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phoneNumber"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="phoneNumber"
            >
              Username
            </label>
            <input
              v-model="nim"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phoneNumber"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="phoneNumber"
            >
              Password
            </label>
            <input
              v-model="password"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phoneNumber"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="studentId"
            >
              Role
            </label>
            <input
              v-model="role"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
              type="text"
            />
          </div>
        </div>
      </form>
    </Modal>
    <!-- Content -->
    <div class="w-auto h-screen text-white">
      <div class="flex items-center justify-center p-40">
        <div
          class="relative ml-40 justify-center overflow-x-auto shadow-md sm:rounded-lg"
        >
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
                    @click="edit(user.id)"
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

<script setup>
import { supabase } from "../../../../supabase";
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";

//show modal
const isModalShow = ref(false);
const showModal = () => {
  isModalShow.value = true;
};
const closeModal = () => {
  clearForm();
  isModalShow.value = false;
};

//define
const idUser = ref("");
const nama = ref("");
const nim = ref("");
const password = ref("");
const role = ref("");

//clear form
const clearForm = () => {
  idUser.value = "";
  nama.value = "";
  nim.value = "";
  password.value = "";
  role.value = "";
};
//get all user
const users = ref({});
const getUsers = async () => {
  const { data, error } = await supabase.from("user").select("*");
  users.value = data;
};

// update user
const updateData = async (id) => {
  try {
    const data = {
      nama: nama.value,
      nim: nim.value,
      password: password.value,
      role: role.value,
    };
    const { error } = await supabase.from("user").update(data).eq("id", id);
    if (error) throw error;
    Swal.fire("Succes", "Data Berhasil Di Update", "success");
    clearForm();
    closeModal();
    getUsers();
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};

const edit = async (id) => {
  const { data } = await supabase.from("user").select("*").eq("id", id);
  idUser.value = data[0].id;
  nama.value = data[0].nama;
  nim.value = data[0].nim;
  password.value = data[0].password;
  role.value = data[0].role;
  showModal();
};

onMounted(() => {
  getUsers();
});

//delete user
const deleteUsers = async (id) => {
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
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
</script>
