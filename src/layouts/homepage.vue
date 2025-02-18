<template>
  <div
    class="h-screen background bg-cover bg-center relative flex flex-col justify-center px-12 w-full"
  >
    <!-- Wrap -->
    <div class="bg-black/50 absolute inset-0 z-0" />

    <!-- Header -->
    <div class="absolute left-0 top-0 w-full">
      <NavBar></NavBar>
    </div>

    <!-- Body -->
    <div class="w-full">
      <router-view></router-view>
    </div>

    <!-- Footer -->
    <div>
      <Footer></Footer>
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
}
</style>
