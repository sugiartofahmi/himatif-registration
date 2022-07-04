<template>
  <Navbar />
  <section class="text-white h-full md:h-screen bg-[#051367]">
    <div class="container h-full mx-auto flex md:flex-row flex-col pt-20">
      <div class="lg:flex-grow flex flex-col items-center text-center">
        <div class="w-full h-screen text-white">
          <div class="flex items-center justify-center">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-lg text-left">
                <thead class="uppercase bg-[#2D31FA]">
                  <tr>
                    <th scope="col" class="px-6 py-3">NO.</th>
                    <th scope="col" class="px-6 py-3">DIVISI</th>
                    <th scope="col" class="px-6 py-3">WAKTU DAN TANGGAL</th>
                    <th scope="col" class="px-6 py-3">AKSI</th>
                  </tr>
                </thead>
                <tbody class="text-black bg-white">
                  <tr class="bg-white border-b dark:border-gray-700">
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">gg</td>
                    <td class="px-6 py-4">hh</td>
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
      </div>
    </div>
  </section>
</template>
