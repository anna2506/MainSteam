export const isLoggedIn = (state) => state.player.loggedIn;

export const getPlayerInfo = (state) => ({
  login: state.player.login,
  email: state.player.email,
  country: state.player.country,
  experience: state.player.experience,
});

export const getRating = (state) => state.player.rating;

export const getCountries = (state) => state.player.countries;

export const getCountriesNames = (state) => {
  const countries = [...state.player.countries];
  return countries.map((x) => x.name);
};
