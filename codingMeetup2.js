/*
Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?
*/

function greetDevelopers(list) {
  return list.map(dev =>{
    dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`
    return dev
  })
}