import getCountryStateCity from "./getCountryStateCity.js";

const findPlaces = (placeName) => {
  const data = getCountryStateCity();

  const filteredData = data.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .startsWith(placeName.toLocaleLowerCase());
  });

  return filteredData;
};

export default findPlaces;
