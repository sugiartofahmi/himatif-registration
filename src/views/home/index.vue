<template>
  <Navbar />
  <section
    class="text-white overflow-hidden h-full md:h-screen w-full bg-home bg-cover bg-center bg-[#051367]"
  >
    <div
      class="container h-full mx-auto flex py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 md:px-0 px-10 font-freakeOne"
        >
          HIMATIF <br />HIMPUNAN MAHASISWA TEKNIK INFORMATIKA
        </h1>
        <p class="mb-8 md:px-0 px-10 text-xl leading-relaxed">
          memiliki tujuan selain sebagai wadah aspirasi dan partisipasi mahasiswa jurusan Teknik Informatika, juga sebagai sarana untuk pengembangan potensi dan pemberdayaan mahasiswa Teknik Informatika yang profesional menuju terbentuknya mahasiswa yang berwawasan luas, aktif, kreatif, komunikatif dan inovatif terhadap berbagai persoalan perkembangan pengetahuan secara global untuk mewujudkan sistem tatanan yang dinamis
        </p>
        <button
          type="button"
          class="px-8 py-2 bg-[#051367] border-2 border-white text-white font-medium text-xm leading-tight uppercase rounded-full"
        >
          <a href="#registration"> Info Registrasi </a>
        </button>
      </div>
      <div class="object-scale-down md:h-80 md:w-80 h-40 w-40">
        <img
          class="object-cover object-center rounded"
          alt="logo himatif"
          src="../../assets/Logo-himatif.png"
        />
      </div>
    </div>
  </section>

  <section
    class="text-white font-freakeOne flex items-center text-center content-center bg-[#051367]"
  >
    <div id="registration" class="container px-5 mx-auto">
      <div class="w-full mx-auto text-center pt-40 h-screen">
        <h1 class="md:text-5xl text-2xl mb-5">OPEN REGISTRATION</h1>
        <h1 class="md:text-5xl text-2xl mb-10">
          KEPENGURUSAN HIMATIF PERIODE 2022 - 2023
        </h1>

        <div
          class="text-center md:text-7xl text-3xl flex w-full items-center justify-center"
        >
          <div class="w-30 md:mx-4 mx-1 p-4 bg-[#2D31FA] text-white rounded-lg">
            <div class="leading-none">{{ hari }}</div>
            <div class="uppercase md:text-3xl text-lg leading-none">Hari</div>
          </div>
          <div class="w-30 md:mx-4 mx-1 p-4 bg-[#2D31FA] rounded-lg">
            <div class="leading-none">{{ jam }}</div>
            <div class="uppercase md:text-3xl text-lg leading-none">Jam</div>
          </div>
          <div class="w-30 md:mx-4 mx-1 p-4 bg-[#2D31FA] rounded-lg">
            <div class="leading-none">
              {{ menit }}
            </div>
            <div class="uppercase md:text-3xl text-lg leading-none">Menit</div>
          </div>
          <div class="w-30 md:mx-4 mx-1 p-4 bg-[#2D31FA] rounded-lg">
            <div class="leading-none">
              {{ detik }}
            </div>
            <div class="uppercase md:text-3xl text-lg leading-none">Detik</div>
          </div>
        </div>

        <router-link to="/signup">
          <button
            type="submit"
            class="md:text-2xl text-xl mt-10 px-10 py-2 border-2 border-white text-white font-medium leading-tight uppercase rounded-full"
          >
            REGISTER
          </button>
        </router-link>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from "vue";
const countDown = new Date("July 20, 2022 11:10:00").getTime();
const hari = ref();
const jam = ref();
const menit = ref();
const detik = ref();

const count = () => {
  const now = new Date().getTime();
  const distance = countDown - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  hari.value = days;
  jam.value = hours;
  menit.value = minutes;
  detik.value = seconds;
};
setInterval(count, 1000);
</script>
