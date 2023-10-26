export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated

  console.log('from :>> ', from.name);
  console.log('to :>> ', to.name);
  if (to.name === 'no-page') {
    return navigateTo('/');
  }
});
