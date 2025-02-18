<template>
  <div class="grid grid-cols-4 gap-4">
    <!-- <div v-for="(image, index) in imageList" :key="index">
      <img
        :src="image"
        alt="Gallery Image"
        class="rounded-lg shadow-md w-full h-auto"
      />
    </div> -->
    <div class="flex items-center justify-center">
      <img
        src="@/assets/nature/cau_cantho.jpg"
        alt="Gallery Image"
        class="rounded-lg shadow-md object-cover w-full h-full"
      />
    </div>
    <div class="flex items-center justify-center">
      <img
        src="@/assets/nature/cau_cantho.jpg"
        alt="Gallery Image"
        class="rounded-lg shadow-md object-cover w-full h-full"
      />
    </div>
    <div class="flex items-center justify-center">
      <img
        src="@/assets/nature/cau_cantho.jpg"
        alt="Gallery Image"
        class="rounded-lg shadow-md object-cover w-full h-full"
      />
    </div>
    <div class="flex items-center justify-center">
      <img
        src="@/assets/nature/cau_cantho.jpg"
        alt="Gallery Image"
        class="rounded-lg shadow-md object-cover w-full h-full"
      />
    </div>
    <div class="flex items-center justify-center">
      <img
        src="@/assets/nature/cau_cantho.jpg"
        alt="Gallery Image"
        class="rounded-lg shadow-md object-cover w-full h-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Import tất cả ảnh từ thư mục assets
const images = import.meta.glob("@/assets/nature/*.jpg", { eager: true });
const imageList = ref(Object.values(images).map((img) => img.default));
</script>
