<template lang="">
    <header id="header" class="fixed top-0 left-0 w-full z-40 min-h-[88px] transition-all duration-300 ease-in-out" :class="{ '-translate-y-full': isScrolledDown, 'bg-[#15192D]': !isOnTop, 'translate-y-0 nav-visible': navVisible }">
        <div class="w-full py-6 border-b border-[#e9edf422] z-[3]">
            <div class="container flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <AppLogo :color="'#FFFFFF'"/>
                    <Icon @click="toggleLocationDropdown" name="fa6-solid:angle-down" class="text-xl text-white cursor-pointer" />
                    <div v-if="locationVisible" :class="{ '-translate-y-full': isScrolledDown && !navVisible}" class="absolute top-[calc(100%+1.5rem)] left-0 w-full flex justify-center items-center rounded-b bg-[#15192D] z-10 transition-all duration-300 ease-in-out">
                        <NuxtLink :to="'/lb'" class="flex flex-col justify-center items-center w-full py-3 text-white cursor-pointer">Lebanon</NuxtLink>
                    </div>    
                </div>    
                <div class="flex items-center gap-4 lg:gap-7">
                    <nav class="hidden lg:block">
                        <ul class="flex items-center gap-20 text-white">
                            <li class="text-white font-medium" v-for="(link, index) in navLinks" :key="index">
                                <ScrollButton :target="link.target" class="transition-all duration-300 ease-in-out text-base text-white hover:text-[#585E8D] cursor-pointer">
                                    {{link.text}}
                                </ScrollButton>
                            </li>
                        </ul>
                    </nav>
                    <div class="block lg:hidden leading-[0] text-white text-3xl cursor-pointer" @click="toggleNav">
                        <Icon v-if="!navVisible" name="fa6-solid:bars" class="text-2xl" />
                        <Icon v-if="navVisible" name="fa6-solid:x" class="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
        <nav class="block lg:hidden fixed top-0 left-0 h-screen w-full bg-[#15192D] text-xl z-[2] transition-all duration-300 ease-in-out" :class="{ '-translate-x-full': !navVisible }">
            <div class="container">  
                <ul class="flex flex-col gap-6 mt-[135px]">
                    <li class="text-white font-medium" v-for="(link, index) in navLinks" :key="index">
                        <ScrollButton :target="link.target" class="item-link transition-all duration-300 ease-in-out">
                            {{link.text}}
                        </ScrollButton>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
    const manualSelection = ref(false);
    const { detectCountry } = useCountry();
    const {navVisible, isScrolledDown, isOnTop, toggleLocationDropdown, toggleNav, locationVisible} = useHeader();
    
    const navLinks = [
        { text: 'Services', route: '/services', target: 'services' },
        { text: 'About us', route: '/about-us', target: 'about-us' },
        { text: 'Board Members', route: '/board-members', target: 'board' },
        { text: 'Offices', route: '/offices', target: 'offices' },
        { text: 'Portfolio', route: '/portfolio', target: 'portfolio' },
    ];
</script>

<style lang="sass" scoped>
   
</style>