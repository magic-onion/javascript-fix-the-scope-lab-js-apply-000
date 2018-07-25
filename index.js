var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = 'cat'
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return two + n
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()();
=======
var theFunk = funkyFunction
function theFunk() {}
>>>>>>> fd62d08c5ad22f1d91e23c6e67d9bd3eca12c2c3
