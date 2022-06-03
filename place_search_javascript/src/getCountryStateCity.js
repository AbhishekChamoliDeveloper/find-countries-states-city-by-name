import { Country, State, City } from "country-state-city";

const getCountryStateCity = () => {
  const data = [
    ...Country.getAllCountries(),
    ...State.getAllStates(),
    ...City.getAllCities(),
  ];

  return data;
};

export default getCountryStateCity;
