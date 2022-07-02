<template>
  <div class="flex bg-[#051367]">
    <sidebarUser />
    <div class="w-full h-screentext-white"></div>
  </div>
</template>
<script setup lang="ts">
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
