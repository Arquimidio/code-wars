/*
Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
*/

function isLanguageDiverse(list) {
  const languages = list.map(dev => dev.language);
  const languageCount = Object.values(languages.reduce((acc, cur) => (acc[cur]? acc[cur]++ : acc[cur] = 1, acc), {}));
  const isDiverse = Math.max(...languageCount) / Math.min(...languageCount) <= 2;
  return isDiverse;
}