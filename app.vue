<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </template>
  
  <script setup>
  import { useCountry } from '~/composables/useCountry';

    const { detectCountry } = useCountry();

    onMounted(() => {
        detectCountry();  // Detect country on app load
    });
  </script>
  