<template>
  <section
    class="pl-0 md:pl-20 font-freakeOne h-screen gradient-form bg-[#051367] md:h-screen"
  >
    <div class="container px-6 h-full">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="xl:w-10/12">
          <div class="block bg-[#2D31FA] shadow-lg rounded-xl">
            <div class="lg:flex lg:flex-wrap g-0">
              <div class="lg:w-6/12 px-4 md:px-0">
                <div class="md:p-12 md:mx-6">
                  <div
                    class="flex items-center gap-5 justify-center md:justify-start pt-10 md:pt-0"
                  >
                    <img
                      width="50"
                      src="../../assets/Logo-himatif.png"
                      alt="logo"
                    />
                    <h4 class="text-xl text-white">HIMATIF</h4>
                  </div>
                  <form>
                    <div class="mt-10 mb-4 px-10 md:px-0">
                      <label class="text-white" for="NIM">NIM</label>
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        v-model="login.nim"
                        placeholder="NIM"
                      />
                    </div>
                    <div class="mb-6 px-10 md:px-0">
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
                <div class="">
                  <img
                    class="object-contain h-30 w-96 md:h-full md:w-full"
                    src="../../assets/login-figure.svg"
                    alt="figure"
                  />
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
      .eq("nim", login.nim)
      .eq("password", login.password);
    users.value = data;
    if (users.value[0].role === "admin") {
      router.push("/admin/user");
    } else if (users.value[0].role === "user") {
      router.push("/user/dataDiri/" + users.value[0].id);
    }
    if (error) throw error;
  } catch (error) {
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
</script>
