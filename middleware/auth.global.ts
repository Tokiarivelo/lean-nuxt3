export default defineNuxtRouteMiddleware((to, _) => {
  // isAuthenticated() is an example method verifying if a user is authenticated

  if (to.name === 'no-page') {
    return navigateTo('/');
  }
});
