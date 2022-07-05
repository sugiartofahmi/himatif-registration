<template>
  <div class="flex h-full bg-[#051367]">
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
              NIM
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
              Jenis Kelamin
            </label>
            <input
              v-model="jenisKelamin"
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
              Kelas
            </label>
            <input
              v-model="kelas"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
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
              Divisi
            </label>
            <input
              v-model="divisi"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
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
              Alasan
            </label>
            <input
              v-model="alasan"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
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
              Status
            </label>
            <input
              v-model="status"
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
        <div class="relative ml-40 overflow-x-auto shadow-md sm:rounded-lg">
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
              v-for="(user, index) in users"
              :key="users.id"
              class="text-black bg-white"
            >
              <tr class="bg-white border-b dark:border-gray-700">
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4">{{ user.nim }}</td>
                <td class="px-6 py-4 uppercase">{{ user.nama }}</td>
                <td class="px-6 py-4 uppercase">{{ user.jenisKelamin }}</td>
                <td class="px-6 py-4 uppercase">{{ user.kelas }}</td>
                <td class="px-6 py-4 uppercase">{{ user.divisi }}</td>
                <td class="px-6 py-4 uppercase">{{ user.alasan }}</td>
                <td class="px-6 py-4 uppercase">{{ user.status }}</td>
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

//clear form
const clearForm = () => {
  idUser.value = "";
  nama.value = "";
  nim.value = "";
  jenisKelamin.value = "";
  kelas.value = "";
  divisi.value = "";
  alasan.value = "";
  status.value = "";
};

//get all user
const users = ref({});
const getUsers = async () => {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("role", "user");
  users.value = data;
};

//define
const idUser = ref("");
const nama = ref("");
const nim = ref("");
const jenisKelamin = ref("");
const kelas = ref("");
const divisi = ref("");
const alasan = ref("");
const status = ref("");

//update user
const updateData = async (id) => {
  try {
    const data = {
      nama: nama.value,
      nim: nim.value,
      jenisKelamin: jenisKelamin.value,
      kelas: kelas.value,
      divisi: divisi.value,
      alasan: alasan.value,
      status: status.value,
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

//edit user
const edit = async (id) => {
  const { data } = await supabase.from("user").select("*").eq("id", id);
  idUser.value = data[0].id;
  nama.value = data[0].nama;
  nim.value = data[0].nim;
  jenisKelamin.value = data[0].jenisKelamin;
  kelas.value = data[0].kelas;
  divisi.value = data[0].divisi;
  alasan.value = data[0].alasan;
  status.value = data[0].status;
  showModal();
};

onMounted(() => {
  getUsers();
});
</script>
