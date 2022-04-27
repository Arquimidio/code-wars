/*
Create 2 functions, areEqual and notEqual, getting 2 sets as arguments and returning a true or false depending if these 2 sets are "equal" (respectively not equal) ie : if all elements of 1st set are elements of 2d and all elements of 2d set are elements of 1st.
*/

function areEqual(s1, s2){
  return [...s1].every(elt => s2.has(elt)) && s1.size === s2.size;
}

function notEqual(s1, s2){
  return !areEqual(s1, s2);
}