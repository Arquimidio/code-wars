/*
Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
*/

function allContinents(list) {
  return new Set(list.map(dev => dev.continent)).size === 5
}