<template>
  <Navbar />
  <section
    class="text-white h-full md:h-screen w-full bg-home bg-cover bg-center backdrop-blur-xl"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button
          type="button"
          class="px-8 py-2 bg-[#051367] border-2 border-white text-white font-medium text-xm leading-tight uppercase rounded-full"
        >
          <a href="#registration"> Info Registration </a>
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
      <div class="w-full mx-auto text-center pt-60 mb-10 h-screen">
        <h1 class="md:text-5xl text-2xl mb-5">OPEN REGISTRATION</h1>
        <h1 class="md:text-5xl text-2xl mb-10">
          KEPENGURUSAN HIMATIF PERIODE 2022 - 2023
        </h1>
        <h1 class="md:text-8xl text-5xl">23 : 59 : 59</h1>
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
