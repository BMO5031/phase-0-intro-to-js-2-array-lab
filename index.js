let cats = ["Milo", "Otis", "Garfield"];

module.exports = cats;


// destructivelyPrependCat(name)
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  // destructivelyRemoveLastCat()
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  // destructivelyRemoveFirstCat()
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  // appendCat(name)
  function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  
  // prependCat(name)
  function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
  }
  
  // removeLastCat()
  function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  
  // removeFirstCat()
  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }


function destructivelyAppendCat(name) {
    cats.push(name);
  }

  function appendCat(name) {
    return [...cats, name];
  }
  