<template lang="">
    <!-- min-h-[105px] -->
    <AppHeaderEU v-if="currentRoute === '/eu'"/>
    <AppHeaderLB v-else/>
</template>

<script setup>
    const manualSelection = ref(false);
    const {  detectCountry } = useCountry(manualSelection);

    detectCountry();

    const { currentRoute } = useHeader(manualSelection);
</script>

<style lang="sass" scoped>

</style>