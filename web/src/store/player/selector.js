export const isLoggedIn = (state) => state.player.loggedIn;

export const getPlayerInfo = (state) => ({
  login: state.player.login,
  email: state.player.email,
  country: state.player.country,
  experience: state.player.experience,
});

export const getRating = (state) => state.player.rating;
