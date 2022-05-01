/*
Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
*/

function getFirstPython(list) {
  const pythonDev = list.find(dev => dev.language === 'Python');
  return pythonDev? `${pythonDev.firstName}, ${pythonDev.country}` : 'There will be no Python developers'
}