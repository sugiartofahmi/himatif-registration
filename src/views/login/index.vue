<template>
  <section class="pl-20 h-full gradient-form bg-[#051367] md:h-screen">
    <div class="container py-12 px-6 h-full">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="xl:w-10/12">
          <div class="block bg-[#2D31FA] shadow-lg rounded-xl">
            <div class="lg:flex lg:flex-wrap g-0">
              <div class="lg:w-6/12 px-4 md:px-0">
                <div class="md:p-12 md:mx-6">
                  <div class="flex items-center gap-5">
                    <img
                      width="50"
                      src="../../assets/Logo-himatif.png"
                      alt="logo"
                    />
                    <h4 class="text-xl font-semibold">HIMATIF</h4>
                  </div>
                  <form>
                    <div class="mt-10 mb-4">
                      <label class="text-white" for="NIM">NIM</label>
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        v-model="login.nim"
                        placeholder="NIM"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="text-white" for="password">Password</label>
                      <input
                        type="password"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        v-model="login.password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="text-center pt-1 mb-12 pb-1">
                      <button
                        @click="submit()"
                        type="button"
                        class="px-8 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full"
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="lg:w-6/12 flex items-center">
                <div class="px-4 md:p-12 md:mx-6">
                  <img src="../../assets/login-figure.svg" alt="figure" />
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
import { router } from "../../router";
import Swal from "sweetalert2";
import { ref, reactive } from "vue";

const users = ref([]);

const login = reactive({
  nim: "",
  password: "",
});

const submit = async () => {
  try {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("nim", login.nim);
    users.value = data;
    console.log(users.value[0].role);
    if (users.value[0].role !== "user") {
      router.push("/admin/user");
    } else if (users.value[0]?.role === "user") {
      router.push("/user/dataDiri/" + users.value[0].id);
    } else {
      Swal.fire("Pemberitahuan", "Data Tidak Ditemukan", "warning");
    }
    if (error) throw error;
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
</script>
