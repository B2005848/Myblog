<template>
  <div
    class="h-16 flex justify-between items-center px-4 md:px-8 xl:px-12 text-white"
  >
    <h2 class="text-xl font-bold">Nightmare dev</h2>
    <nav class="font-semibold space-x-6">
      <router-link :to="{ name: 'intro' }">Home</router-link>
      <router-link to="">About me</router-link>
      <router-link to="">Arcticle</router-link>
    </nav>
  </div>
</template>
