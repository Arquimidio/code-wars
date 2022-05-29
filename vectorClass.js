/*
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error
If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
*/

const Vector = function (components) {
  this.components = components;
  this.size = this.components.length;
};

Vector.prototype.checkSize = function(anotherVector){
  if(this.size === anotherVector.size) return true;
  throw new Error('Different vector sizes')
}

Vector.prototype.equals = function(anotherVector){
  return anotherVector.size === this.size && this.components.every(elt => anotherVector.components.includes(elt));
}

Vector.prototype.toString = function(){
  return `(${this.components.join()})`
}

Vector.prototype.add = function(anotherVector){
  this.checkSize(anotherVector)
  return new Vector(this.components.map((num, i) => num + anotherVector.components[i]));
}

Vector.prototype.subtract = function(anotherVector){
  this.checkSize(anotherVector);
  return new Vector(this.components.map((elt, i) => elt - anotherVector.components[i]));
}

Vector.prototype.dot = function(anotherVector){
  this.checkSize(anotherVector);
  return this.components.reduce((acc, cur, i) => acc + cur * anotherVector.components[i], 0);
}

Vector.prototype.norm = function(){
  return Math.sqrt(this.components.reduce((acc, cur) => acc + cur ** 2, 0));
}