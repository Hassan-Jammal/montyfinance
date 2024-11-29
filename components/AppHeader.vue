<template lang="">
    <!-- min-h-[105px] -->
    <AppHeaderEU v-if="currentRoute === '/eu'"/>
    <AppHeaderLB v-else/>
</template>

<script setup>
    const manualSelection = ref(false);
    const {  detectCountry } = useCountry();

    detectCountry();

    const { currentRoute } = useHeader();
</script>

<style lang="sass" scoped>

</style>