/*
Your job is to create a class called Song.

A new Song will take two parameters, title and artist.

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.title => 'Mount Moose'
mountMoose.artist => 'The Snazzy Moose'
You will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".
*/

class Song{
  constructor(title, artist){
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }
  
  howMany(arr){
    let listenersCount = 0;
    arr.forEach(listener => {
      if(!this.listeners.includes(listener.toLowerCase())){
        this.listeners.push(listener.toLowerCase());
        listenersCount++;
      }
    })
    return listenersCount;
  }
}