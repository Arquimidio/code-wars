/*
On the contrary, the purpose of this kata is to create an OnceNamedOne object with immutable properties.

That means .firstName, .lastName and .fullName are defined into the Constructor and can't be no more changed.

The properties are still readable using the dot or bracket notation but there're not writable.
*/

function OnceNamedOne(first, last) {
    Object.defineProperties(this,{
      firstName: {value: first},
      lastName: {value: last},
      fullName: {value: `${first} ${last}`}
    })
}