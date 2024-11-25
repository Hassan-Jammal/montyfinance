export function useHeader() {
    const route = useRoute();
    const currentRoute = computed(() => route.path);

    const navVisible = ref(false);
    const lastScrollPosition = ref(0);
    const isScrolledDown = ref(false);
    const isScrolledUp = ref(false);
    const isOnTop = ref(true);
    const locationVisible = ref(false);
    const scrollThreshold = 200;

    const toggleLocationDropdown = () => {
        locationVisible.value = !locationVisible.value;
    };

    const toggleNav = () => {
        navVisible.value = !navVisible.value;
    };

    const closeNav = () => {
        navVisible.value = false;
    };

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

        isScrolledUp.value = scrollDirection === 'up';
        isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;
        isOnTop.value = currentScrollPosition === 0;

        lastScrollPosition.value = currentScrollPosition;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);

        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('item-link') || e.target.classList.contains('close-nav')) {
                closeNav();
            }
        });
    });

    return {
        navVisible,
        lastScrollPosition,
        isScrolledDown,
        isScrolledUp,
        isOnTop,
        locationVisible,
        scrollThreshold,
        toggleLocationDropdown,
        toggleNav,
        closeNav,
        currentRoute,
    };
}
