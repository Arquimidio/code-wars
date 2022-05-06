/*
Description:
Remove all exclamation marks from sentence except at the end.

Examples
remove("Hi!") == "Hi!"
remove("Hi!!!") == "Hi!!!"
remove("!Hi") == "Hi"
remove("!Hi!") == "Hi!"
remove("Hi! Hi!") == "Hi Hi!"
remove("Hi") == "Hi"
*/

function remove (string) {
  const end = string.search(/!+$/);
  return string.slice(0, end).replace(/!/g, '') + string.slice(end);
}