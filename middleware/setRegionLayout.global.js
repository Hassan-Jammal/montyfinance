
export default defineNuxtRouteMiddleware(async (to) => {
    if (to.path.startsWith('/eu')) {
        setPageLayout('eu');
    } else if (to.path.startsWith('/lb')) {
        setPageLayout('lb');
    } 
});
