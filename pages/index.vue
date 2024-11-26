<template>
    <HomepageEU v-if="currentRoute === '/eu'"/>
    <HomepageLB v-else/>
</template>

<script setup>
    const route = useRoute();
    const currentRoute = computed(() => route.path);
</script>
