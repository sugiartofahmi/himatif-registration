<template>
  <div
    class="flex fixed flex-col text-white w-64 h-screen px-4 py-8 overflow-y-auto bg-[#2D31FA] rounded-r-3xl"
  >
    <div class="flex mr-8 gap-3 justify-center items-center">
      <img width="50" src="../../../assets/Logo-himatif.png" alt="logo" />
      <h2 class="pr-4 text-2xl font-freakeOne text-center">HIMATIF</h2>
    </div>
    <p class="pl-10 pt-5">Hai, Admin</p>
    <div class="flex flex-col justify-between mt-6">
      <aside>
        <ul>
          <li>
            <router-link :to="'/admin/user/'">
              <a class="flex items-center px-3 py-2" href="#">
                <img src="../../../assets/icon/user-icon.svg" alt="icon user" />

                <span class="ml-3 font-medium">User</span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="'/admin/pendaftar/'">
              <a class="flex items-center px-4 py-2" href="#">
                <img
                  src="../../../assets/icon/pendaftar-icon.svg"
                  alt="icon pendaftar"
                />

                <span class="mx-4 font-medium">Pendaftar</span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="'/admin/jadwal/'">
              <a class="flex items-center px-4 py-2" href="#">
                <img
                  src="../../../assets/icon/jadwal-icon.svg"
                  alt="icon jadwal"
                />

                <span class="ml-5 font-medium">Jadwal</span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="'/'">
              <a class="flex items-center px-3 py-2" href="#">
                <img
                  src="../../../assets/icon/logout-icon.svg"
                  alt="icon user"
                />

                <span class="ml-5 font-medium">Log Out</span>
              </a>
            </router-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>
