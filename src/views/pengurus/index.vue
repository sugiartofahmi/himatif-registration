<template>
  <Navbar />
  <section class="text-white h-full bg-[#051367]">
    <div class="container mx-auto flex pt-20">
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(data, index) in pengurus"
          :key="pengurus.id"
          class="max-w-sm rounded-lg border bg-gray-800 border-gray-700"
        >
          <div class="flex justify-center items-center">
            <img class="" src="/src/assets/avatar.png" alt="" />
          </div>
          <div class="p-5 text-center items-center">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ data.nama }}
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ data.jabatan }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../../supabase";
//get all data
const pengurus = ref({});
const getPengurus = async () => {
  const { data, error } = await supabase.from("pengurus").select("*");
  pengurus.value = data;
};

onMounted(() => {
  getPengurus();
});
</script>
