<template>
  <div class="flex bg-[#051367]">
    <sidebarUser />
  </div>
</template>

<script setup lang="ts">
import { supabase } from "../../../../supabase";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const users = ref({});

const getUsers = async () => {
  const { data, error } = await supabase.from("user").select("id", id);
  users.value = data;
};

onMounted(() => {
  getUsers();
});
</script>
