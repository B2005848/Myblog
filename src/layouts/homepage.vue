<template>
  <div
    class="h-screen bg-[url('background.jpg')] bg-cover bg-center relative flex flex-col justify-center px-12"
  >
    <!-- Wrap -->
    <div class="bg-black/50 absolute inset-0 z-0" />
    <!-- Header -->
    <div class="absolute left-0 top-0 w-full">
      <NavBar></NavBar>
    </div>

    <h4 class="text-white text-4xl xl:text-7xl z-10 w-5/6">
      "Unlock your true potential by embracing challenges and pushing beyond
      your limits."
    </h4>

    <!-- Source -->
    <div
      class="absolute bottom-0 left-0 w-full text-white xl:text-black px-5 text-sm font-sans opacity-70"
    >
      <p>Source background: Alexander Lunyov sunify on Unsplash</p>
      <p>
        Link background:
        <a
          class="text-blue-500 xl:text-blue-950"
          href="https://unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-beach-next-to-the-ocean-dXXbMEUOmQw"
          >Click here</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
