<template>
  <div class="flex bg-[#051367]">
    <SidebarAdmin />
    <Modal
      v-if="isModalShow"
      @cancel="closeModal"
      @submit="addData()"
      title="Tambah Data"
      cancel-text="Batal"
      submit-text="Simpan"
    >
      <form @submit.prevent="addData()" class="w-full mr-40">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="phoneNumber"
            >
              Divisi
            </label>
            <input
              v-model="divisi"
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
              Tanggal Dan waktu
            </label>
            <input
              v-model="tanggalWaktu"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
              type="text"
            />
          </div>
        </div>
      </form>
    </Modal>
    <!-- Content -->
    <div class="w-full h-screen text-white">
      <div class="flex items-center justify-center p-40">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex justify-between mb-10">
            <h1 class="font-freakeOne text-2xl">Jadwal Wawancara</h1>
            <button
              @click="showModal()"
              type="button"
              class="px-4 py-1 border-2 border-white text-white text-xs leading-tight uppercase rounded-full"
            >
              Tambah Data
            </button>
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
            <tbody
              class="text-black bg-white"
              v-for="(data, index) in wawancara"
              :key="wawancara.id"
            >
              <tr class="bg-white border-b dark:border-gray-700">
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4">{{ data.divisi }}</td>
                <td class="px-6 py-4">{{ data.tanggalWaktu }}</td>
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
    <!--end Content -->
  </div>
</template>
<script setup lang="ts">
import { supabase } from "../../../../supabase";
import { ref, onMounted } from "vue";
import Modal from "../../../../components/Modal/index.vue";
import Swal from "sweetalert2";

const wawancara = ref({});
const divisi = ref("");
const tanggalWaktu = ref("");

//show modal
const isModalShow = ref(false);
const showModal = () => {
  isModalShow.value = true;
};
const closeModal = () => {
  clearForm();
  isModalShow.value = false;
};

const clearForm = () => {
  divisi.value = "";
  tanggalWaktu.value = "";
};

const getWawancara = async () => {
  const { data, error } = await supabase.from("wawancara").select("*");
  wawancara.value = data;
};

const addData = async () => {
  try {
    const { error } = await supabase.from("wawancara").insert([
      {
        divisi: divisi.value,
        tanggalWaktu: tanggalWaktu.value,
      },
    ]);
    clearForm();
    getWawancara();
    if (error) throw error;
    Swal.fire("Terimakasih", "Terimakasih atas Partisipasi nya", "success");
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};

onMounted(() => {
  getWawancara();
});
</script>
