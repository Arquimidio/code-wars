/*
Here are some classic Christmas cracker jokes.

There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.

Your challenge
Write an async function which takes an apiUrl and jokeId which returns a promise.
The data will need to be filtered to get the specified joke by id.
When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.
Handle error cases

If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.
*/

async function sayJoke(apiUrl, jokeId){
  const response = await fetch(apiUrl);
  const { jokes } = await response.json();
  if(!jokes) throw new Error(`No jokes at url: ${apiUrl}`)
  
  const joke = jokes.find(joke => joke.id === jokeId);
  if(joke){
     joke.saySetup = function(){return this.setup}
     joke.sayPunchLine = function(){return this.punchLine}
     return joke;
  }
  else throw new Error(`No jokes found id: ${jokeId}`)
}