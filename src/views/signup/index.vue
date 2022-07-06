<template>
  <section class="pl-0 md:pl-20 h-full md:h-screen font-freakeOne bg-[#051367]">
    <div class="container py-12 px-6 h-full">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="xl:w-10/12">
          <div class="block bg-[#2D31FA] shadow-lg rounded-xl">
            <div class="lg:flex lg:flex-wrap g-0">
              <div class="lg:w-2/3 px-4 md:px-0">
                <div class="md:p-12 md:mx-6">
                  <div class="flex items-center gap-5">
                    <h4
                      class="text-xl md:w-1/2 w-full md:px-0 px-10 md:pt-0 pt-8 text-center md:text-left text-white font-freakeOne mb-8"
                    >
                      Registrasi Calon Pengurus HIMATIF Periode 20xx - 20xx
                    </h4>
                  </div>
                  <form>
                    <div class="flex md:flex-row flex-col">
                      <div class="md:w-1/2 w-full px-3 mb-6 md:mb-0">
                        <label class="text-white" for="fullName"> Nama </label>
                        <input
                          v-model="signUp.nama"
                          class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                          id="fullName"
                          type="text"
                          placeholder="Masukkan Nama Anda"
                        />
                      </div>
                      <div class="md:w-1/2 w-full px-3">
                        <label class="text-white" for="email">
                          Jenis Kelamin
                        </label>
                        <input
                          v-model="signUp.jenisKelamin"
                          class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                          type="text"
                          placeholder="Masukan Jenis Kelamin"
                        />
                      </div>
                    </div>
                    <div class="flex md:flex-row flex-col">
                      <div class="md:w-1/2 w-full px-3 mb-6 md:mb-0">
                        <label class="text-white" for="fullName"> Kelas </label>
                        <input
                          v-model="signUp.kelas"
                          class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                          type="text"
                          placeholder="Masukkan Kelas"
                        />
                      </div>
                      <div class="md:w-1/2 w-full px-3">
                        <label class="text-white" for="email"> NIM </label>
                        <input
                          v-model="signUp.nim"
                          class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                          type="number"
                          placeholder="Masukkan NIM"
                        />
                      </div>
                    </div>
                    <div class="flex md:flex-row flex-col">
                      <div class="md:w-1/2 w-full px-3 mb-6 md:mb-0">
                        <label class="text-white" for="fullName">
                          Password
                        </label>
                        <input
                          v-model="signUp.password"
                          class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                          type="password"
                          placeholder="Masukkan Password"
                        />
                      </div>
                      <div class="md:w-1/2 w-full px-3">
                        <label class="text-white" for="email"> Password </label>
                        <input
                          v-model="signUp.validPassword"
                          class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                          type="password"
                          placeholder="Masukkan Password"
                        />
                      </div>
                    </div>
                    <div class="flex md:flex-row flex-col">
                      <div class="md:w-1/2 w-full px-3 mb-6 md:mb-0">
                        <label class="text-white" for="fullName">
                          Divisi
                        </label>
                        <input
                          v-model="signUp.divisi"
                          class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                          type="text"
                          placeholder="Masukkan Nama Divisi"
                        />
                      </div>
                      <div class="md:w-1/2 w-full px-3">
                        <label class="text-white" for="email">
                          Alasan Memilih Divisi
                        </label>
                        <textarea
                          v-model="signUp.alasan"
                          class="mt-1 focus:outline-none rounded border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                          rows="3"
                          placeholder="Masukan Alasan"
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="lg:w-1/3 flex items-center md:justify-start justify-center"
              >
                <div class="flex justify-center items-center">
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      @click="submitData()"
                      type="submit"
                      class="md:text-2xl text-xl mt-10 px-10 py-2 border-2 border-white text-white font-medium leading-tight uppercase rounded-full"
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { supabase } from "../../supabase";
import Swal from "sweetalert2";
import { reactive } from "vue";
import { router } from "../../router";

const signUp = reactive({
  nama: "",
  jenisKelamin: "",
  kelas: "",
  nim: "",
  password: "",
  validPassword: "",
  divisi: "",
  alasan: "",
});
const clearForm = () => {
  signUp.nama = "";
  signUp.jenisKelamin = "";
  signUp.kelas = "";
  signUp.nim = "";
  signUp.password = "";
  signUp.validPassword = "";
  signUp.divisi = "";
  signUp.alasan = "";
};

const submitData = async () => {
  try {
    const { error } = await supabase.from("user").insert([
      {
        nama: signUp.nama,
        jenisKelamin: signUp.jenisKelamin,
        kelas: signUp.kelas,
        nim: signUp.nim,
        password: signUp.password,
        divisi: signUp.divisi,
        alasan: signUp.alasan,
      },
    ]);
    clearForm();
    router.push("/login");
    if (error) throw error;
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
</script>
