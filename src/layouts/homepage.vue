<template>
  <div class="h-screen background">
    <!-- Layout chính -->
    <div class="relative h-full flex flex-col">
      <!-- Header hoặc bất kỳ phần tử nào bạn cần -->
      <NavBar class="relative" />

      <!-- Main content (router-view) -->
      <div class="flex-1 overflow-auto">
        <router-view></router-view>
      </div>

      <!-- Footer -->
      <Footer class="relative" />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.background {
  background-image: url("@/assets/background.jpg");

  height: 100vh;
}
</style>
