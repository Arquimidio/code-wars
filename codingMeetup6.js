/*
Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
*/

function isSameLanguage(list) {
  return list.every(dev => dev.language === list[0].language);
}