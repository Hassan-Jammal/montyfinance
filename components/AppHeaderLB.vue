<template lang="">
    <header id="header" class="fixed top-0 left-0 w-full z-40 min-h-[88px] transition-all duration-300 ease-in-out" :class="{ '-translate-y-full': isScrolledDown, 'background': !isOnTop, 'translate-y-0 nav-visible': navVisible }">
        <div class="w-full py-6 z-[3]">
            <div class="container flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <NuxtLink :to="'/lb'">
                        <AppLogo class="logo" />
                    </NuxtLink>
                    <svg @click="toggleLocationDropdown" class="arrow-down cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9.33154L12 15.3315L18 9.33154" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div v-if="locationVisible" :class="{ '-translate-y-full': isScrolledDown && !navVisible}" class="absolute top-[calc(100%+1.5rem)] left-0 w-full flex justify-center items-center rounded-b bg-white z-10 transition-all duration-300 ease-in-out">
                        <!-- <div @click="manualRoute('eu')" class="flex flex-col justify-center items-center w-full py-3 text-[#09052B] cursor-pointer">Europe</div> -->
                        <NuxtLink :to="'/eu'" class="flex flex-col justify-center items-center w-full py-3 cursor-pointer">Europe</NuxtLink>
                    </div>    
                </div>    
                <div class="flex items-center gap-4 lg:gap-7">
                    <nav class="hidden lg:block">
                        <ul class="flex items-center gap-20 text-[#09052B]">
                            <li class="text-[#09052B] font-medium" v-for="(link, index) in navLinks" :key="index">
                                <ScrollButton :target="link.target" class="transition-all duration-300 ease-in-out text-base text-[#09052B] hover:text-[#585E8D] cursor-pointer">
                                    {{link.text}}
                                </ScrollButton>
                            </li>
                        </ul>
                    </nav>
                    <div class="block lg:hidden leading-[0] text-[#09052B] text-3xl cursor-pointer" @click="toggleNav">
                        <svg class="nav-icon" v-if="!navVisible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25">
                            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/>
                        </svg>
                        <svg class="nav-icon" v-if="navVisible" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                            <path d="M 4.2382812 2.9882812 A 1.250125 1.250125 0 0 0 3.3671875 5.1347656 L 10.232422 12 L 3.3613281 18.869141 A 1.2512475 1.2512475 0 1 0 5.1308594 20.638672 L 12 13.767578 L 18.865234 20.632812 A 1.250125 1.250125 0 1 0 20.632812 18.865234 L 13.767578 12 L 20.625 5.1425781 A 1.250125 1.250125 0 1 0 18.857422 3.375 L 12 10.232422 L 5.1347656 3.3671875 A 1.250125 1.250125 0 0 0 4.2382812 2.9882812 z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <nav class="block lg:hidden fixed top-0 left-0 h-screen w-full bg-white text-xl z-[2] transition-all duration-300 ease-in-out" :class="{ '-translate-x-full': !navVisible }">
            <div class="container">  
                <ul class="flex flex-col gap-6 mt-[135px]">
                    <li class="text-[#09052B] font-medium" v-for="(link, index) in navLinks" :key="index">
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
    const { navVisible, isScrolledDown, isOnTop, toggleLocationDropdown, toggleNav, locationVisible } = useHeader();

    const navLinks = [
        { text: 'About us', route: '/about-us', target: 'about-us' },
        { text: 'Our App', route: '/our-app', target: 'our-app' },
        { text: 'Board members', route: '/board-members', target: 'board' },
        { text: 'Contact us', route: '/contact-us', target: 'contact-us' },
    ];
</script>

<style lang="sass" scoped>
    header.background
        -webkit-backdrop-filter: blur(10px)
        backdrop-filter: blur(10px)
        background-color: hsla(0, 0%, 100%, .8)

    header.background .logo, header .logo, header.background .nav-icon, header .nav-icon
        fill: #09052B

    .homepage header.background .logo, .homepage header.background .nav-icon
        fill: #09052B

    .homepage header .logo, .homepage header .nav-icon
        fill: #FFFFFF

    header.background .arrow-down path, header .arrow-down path
        stroke: #09052B

    .homepage header.background .arrow-down path
        stroke: #09052B

    .homepage header .arrow-down path
        stroke: #FFFFFF
</style>