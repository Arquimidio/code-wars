/*
Deferring a function execution can sometimes save a lot of execution time in our programs by postponing the execution to the latest possible instant of time, when we're sure that the time spent while executing it is worth it.

Write a method make_lazy that takes in a function (symbol for Ruby) and the arguments to the function and returns another function (lambda for Ruby) which when invoked, returns the result of the original function invoked with the supplied arguments.
*/

const make_lazy = function (fn, ...args) {
  return () => {
    return fn(...args);
  }
};