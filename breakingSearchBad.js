/*
 The function must return the sequence of titles that match the string passed as an argument.

 TITLES is a preloaded sequence of strings.

 TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
 search('ock') --> ['Rocky 1', 'Rocky 2']
 But the function return some weird result and skip some of the matching results.

 Does the function have special movie taste?

 Let's figure out !
*/

// TITLES is a preloaded array of String to search throught
const TITLES = [ 'The Big Bang Theory',
'How I Met Your Mother',
'Dexter',
'Breaking Bad',
'Doctor Who',
'The Hobbit',
'Pacific Rim',
'Pulp Fiction',
'The Avengers',
'Shining' ]

/*
  I've removed the flag 'g' from the RegExp because
  it can lead to odd behaviours in the method test.
  It happens because the method IS NOT STATELESS! It
  stores the lastIndex of the test and starts the search
  from there, so it can cause bugs.
*/
function search(searchTerm) {
  var search = new RegExp(searchTerm, 'i');
  return TITLES.filter(function(title) {
    return search.test(title);
  });
}
