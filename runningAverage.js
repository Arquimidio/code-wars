/*
Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

rAvg = runningAverage();
rAvg(10) = 10.0;
rAvg(11) = 10.5;
rAvg(12) = 11;
*/

function runningAverage() {
  let count = 0;
  let sum = 0;
  
  return num => {
    count++;
    sum += num;
    const average = sum / count;
    const roundedAverage =  Math.round(average * 100) / 100;
    return  roundedAverage;
  }
}