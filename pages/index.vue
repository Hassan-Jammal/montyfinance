<template>
    <HomepageEU v-if="currentRoute === '/eu'"/>
    <HomepageLB v-else/>
</template>

<script setup>
    const { currentRoute } = useHeader();
</script>