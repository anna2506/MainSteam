export const isLoggedIn = (state) => state.user.loggedIn;

export const getUserInfo = (state) => ({
  name: state.user.name,
  email: state.user.email,
  country: state.user.country,
  experience: state.user.experience,
});
