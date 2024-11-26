<template>
	<header id="header" class="fixed top-0 left-0 w-full z-40 min-h-[88px] transition-all duration-300 ease-in-out" :class="{ '-translate-y-full': isScrolledDown, 'bg-white': !isOnTop, 'nav-visible': navVisible }">
        <div class="w-full py-6 border-b border-[#e9edf422] z-[3]">
            <div class="container flex justify-between items-center">
                <NuxtLink to="/" class="flex items-center gap-4">
                    <!-- <AppLogoColored :fill="isScrolledDown || isScrolledUp || $route.path === '/' ? '#000000' : 'auto'"/> -->
                    <AppLogo />
                    <!-- <Icon @click="locationVisible = !locationVisible" name="fa6-solid:angle-down" class="text-xl text-black" /> -->
                    <!-- <div v-if="locationVisible" class="absolute top-[calc(100%+1.5rem)] left-0 w-full h-full flex justify-center items-center py-6 rounded bg-white z-10">Europe</div> -->
                </NuxtLink>  
                <div class="flex items-center gap-4 lg:gap-7">
                    <nav class="hidden lg:block">
                        <ul class="flex items-center gap-10 text-white">
                            <li class="text-white font-medium" v-for="(link, index) in navLinks" :key="index">
                                <span :scrollTo="link.scrollTo" class="scrollTo transition-all duration-300 ease-in-out text-base text-black hover:text-[#585E8D] cursor-pointer">
                                    {{link.text}}
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <div class="block lg:hidden leading-[0] text-3xl cursor-pointer" @click="toggleNav">
                        <Icon v-if="!navVisible" name="fa6-solid:bars" class="text-2xl" />
                        <Icon v-if="navVisible" name="fa6-solid:x" class="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
        <nav class="block lg:hidden fixed top-0 left-0 h-screen w-full bg-white text-xl z-[2] transition-all duration-300 ease-in-out" :class="{ '-translate-x-full': !navVisible }">
            <div class="container">  
                <ul class="flex flex-col gap-6 mt-[135px]">
                    <li class="font-medium" v-for="(link, index) in navLinks" :key="index">
                        <NuxtLink :scrollTo="link.scrollTo" class="scrollTo item-link transition-all duration-300 ease-in-out">
                            {{link.text}}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
	
	<main class="mt-[88px]">
		<section class="container">
			<div class="flex flex-col justify-center items-center h-[calc(100vh-88px)] text-center">
				<img class="w-full md:w-1/2 mx-auto" :src="`/images/error-404.webp`" alt="Error 404" width="1100" height="676"/>
				<h1 class="text-6xl font-lora mt-6">So sorry!</h1>
				<p class="mt-6">The page you were looking for doesn't exist.<br />You may have mistyped the address or the page may have moved.</p>
				<NuxtLink href="/" class="inline-block mt-3 md:mt-6 py-2 px-8 text-sm font-medium text-white bg-[#585E8D] hover:bg-[#09052B] transition-[background] duration-300 ease-in-out">Go to Home page</NuxtLink>
			</div>
		</section>
	</main>
</template>

<script setup>
	useSeoMeta({
		title: 'Page Not Found',
		ogTitle: 'Page Not Found',
		twitterTitle: 'Page Not Found',
	})

	const navVisible = ref(false);
	const lastScrollPosition = ref(0);
	const isScrolledDown = ref(false);
	const isScrolledUp = ref(false);
	const isOnTop = ref(true);
	const scrollThreshold = 200;
	const locationVisible = ref(false)

	const toggleNav = () => {
		navVisible.value = !navVisible.value;
	};

	const closeNav = () => {
		navVisible.value = false
	};

	onMounted(() => {
		document.body.addEventListener("click", (e) => {
			if (e.target.classList.contains('item-link') || e.target.classList.contains('close-nav')) {
				closeNav()
			}
		});

		window.addEventListener('scroll', handleScroll);
		checkScrollPosition();
	});

	const handleScroll = () => {
		const currentScrollPosition = window.scrollY;

		// Determine the scroll direction
		const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

		// Set the value for isScrolledUp if the user is scrolling up
		isScrolledUp.value = scrollDirection === 'up';

		// Check if the user has scrolled down more than the threshold
		isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;

		// Check if the user is at the top of the page
		isOnTop.value = currentScrollPosition === 0;

		// Update the last scroll position
		lastScrollPosition.value = currentScrollPosition;
	};

	const checkScrollPosition = () => {
		// Check if the user is at the top of the page on mount
		isOnTop.value = window.scrollY === 0;
	};

	const navLinks = [
		{ text: "Services", route: "/services", scrollTo: "services" },
		{ text: "About us", route: "/about-us", scrollTo: "about-us" },
		{ text: "Board", route: "/board", scrollTo: "board" },
		{ text: "Offices", route: "/offices", scrollTo: "offices" },
		{ text: "Portfolio", route: "/portfolio", scrollTo: "portfolio" },
	];
</script>