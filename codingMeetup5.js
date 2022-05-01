/*
Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.
*/

function countLanguages(list) {
  return list.reduce((acc, cur) => (acc[cur.language]? acc[cur.language]++ : acc[cur.language] = 1, acc), {})
}