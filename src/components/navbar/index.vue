<template>
  <nav class="text-white py-6 font-freakeOne bg-[#051367]">
    <div
      class="container flex flex-wrap justify-between items-center mx-auto md:px-0 px-5"
    >
      <a class="flex items-center">
        <span class="self-center text-xl whitespace-nowrap">HIMATIF</span>
      </a>
      <div class="flex items-center md:order-2">
        <router-link to="/login">
          <button
            type="button"
            class="hidden md:flex px-8 py-2 border-2 border-white font-medium text-base leading-tight uppercase rounded-full"
          >
            LOGIN
          </button>
        </router-link>

        <ul
          v-if="isDropdown"
          class="flex transition-all ease-linear bg-[#051367] px-4 py-2 rounded-lg flex-col justify-start fixed right-3 md:hidden space-y-4 cursor-pointer top-16"
        >
          <router-link to="/">
            <li class="text-white text-[16px]">BERANDA</li>
          </router-link>
          <router-link to="/pengurus">
            <li class="text-white text-[16px]">PENGURUS</li>
          </router-link>
          <router-link to="/dokumentasi">
            <li class="text-white text-[16px]">DOKUMENTASI</li>
          </router-link>
          <router-link to="/login">
            <button
              type="button"
              class="px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full"
            >
              LOGIN
            </button>
          </router-link>
        </ul>
        <span
          @click="isDropdown = !isDropdown"
          class="border-2 flex items-center justify-center md:hidden px-5 py-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full"
        >
          Menu
        </span>
      </div>

      <div
        class="hidden text-white file:placeholder:justify-between items-center w-full md:flex md:w-auto md:order-1"
      >
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
          <li>
            <router-link to="/">
              <a href=" #" class="text-base">BERANDA</a>
            </router-link>
          </li>
          <li>
            <router-link to="/pengurus">
              <a href="#" class="text-base">PENGURUS</a>
            </router-link>
          </li>
          <li>
            <router-link to="/dokumentasi">
              <a href="#" class="text-base">DOKUMENTASI</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isDropdown = ref(false);
</script>
