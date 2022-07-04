<template>
  <div class="flex bg-[#051367]">
    <sidebarUser />
    <div class="w-full h-screen text-white">
      <section
        class="pl-20 h-full font-freakeOne gradient-form bg-[#051367] md:h-screen"
      >
        <div class="container pt-20">
          <div
            class="flex pt-10 justify-center items-center flex-wrap h-full g-6 text-gray-800"
          >
            <div class="w-200">
              <div class="block bg-[#2D31FA] shadow-lg rounded-xl">
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="w-50% px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div class="flex items-center gap-5">
                        <h4
                          class="text-xl w-1/2 text-white font-freakeOne mb-8"
                        >
                          INFORMASI DATA DIRI
                        </h4>
                      </div>
                      <form>
                        <div class="flex">
                          <div class="w-1/2 px-3 mb-6 md:mb-0">
                            <label class="text-white" for="fullName">
                              Nama
                            </label>
                            <input
                              class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                              id="fullName"
                              type="text"
                              placeholder="Masukkan Nama Anda"
                            />
                          </div>
                          <div class="w-1/2 px-3">
                            <label class="text-white" for="email">
                              Jenis Kelamin
                            </label>
                            <input
                              class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                              type="text"
                              placeholder="Masukan Jenis Kelamin"
                            />
                          </div>
                        </div>
                        <div class="flex">
                          <div class="w-1/2 px-3 mb-6 md:mb-0">
                            <label class="text-white" for="fullName">
                              Kelas
                            </label>
                            <input
                              class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                              type="text"
                              placeholder="Masukkan Kelas"
                            />
                          </div>
                          <div class="w-1/2 px-3">
                            <label class="text-white" for="email"> NIM </label>
                            <input
                              class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                              type="number"
                              placeholder="Masukkan NIM"
                            />
                          </div>
                        </div>

                        <div class="flex">
                          <div class="w-1/2 px-3 mb-6 md:mb-0">
                            <label class="text-white" for="fullName">
                              Divisi
                            </label>
                            <input
                              class="mt-1 focus:outline-none rounded-full border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                              type="text"
                              placeholder="Masukkan Nama Divisi"
                            />
                          </div>
                          <div class="w-1/2 px-3">
                            <label class="text-white" for="email">
                              Alasan Memilih Divisi
                            </label>
                            <textarea
                              class="mt-1 focus:outline-none rounded border border-white w-full bg-transparent text-white py-2 px-4 mb-3 focus:bg-white focus:text-[#2D31FA]"
                              rows="3"
                              placeholder="Masukan Alasan"
                            ></textarea>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { supabase } from "../../../../supabase";
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
