export default defineNuxtRouteMiddleware((to, _) => {
  // isAuthenticated() is an example method verifying if a user is authenticated

  if (to.params.id === '1') {
    // return abortNavigation()
    console.log('post 1 inside midleware:>> ');
  }
});
