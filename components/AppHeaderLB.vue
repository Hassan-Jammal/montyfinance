<template lang="">
    <header id="header" class="fixed top-0 left-0 w-full z-40 min-h-[88px] transition-all duration-300 ease-in-out" :class="{ '-translate-y-full': isScrolledDown, 'background': !isOnTop, 'translate-y-0 nav-visible': navVisible }">
        <div class="w-full py-6 border-b border-[#e9edf422] z-[3]">
            <div class="container flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <NuxtLink :to="'/lb'">
                        <AppLogo :color="'#09052B'"/>
                    </NuxtLink>
                    <svg @click="toggleLocationDropdown" class="cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9.33154L12 15.3315L18 9.33154" stroke="#09052B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <img v-if="!navVisible" src="/images/burger.svg" alt="Bars" width="25" height="25" />
						<img v-if="navVisible" src="/images/close.svg" alt="Close" width="25" height="25" />
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
    
</style>