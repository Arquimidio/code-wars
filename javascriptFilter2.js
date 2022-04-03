/*
 A friend of yours is developing an application for a hotel. You should write a function that returns all names of the   people on a given floor. Every floor has 6 rooms, and all rooms are numbered in a consecutive way.

 The function has the following signature:

 function roomMates( rooms, floor ){}
 The argument rooms holds all clients in an array, where the index (starts at 0) corresponds to the room-number and holds   the name of the client.

 A room is empty if the name at the corresponding array index is the empty string.

 floor is an integer and denotes the floor whose names need to be returned. Floors are numbered starting at 1.

 Your task is to return the names of all occupants on a given floor.

 Example
 rooms = [ "Jill", "Jackson", "Jan", "Eve", "", "John", "Jimmy", "Tom", "", "Duke" ]
*/

function roomMates( rooms, floor ){
  return rooms.filter((room, i) => room && Math.ceil((i + 1) / 6) === floor)
}