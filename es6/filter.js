// you need to write a function, which accepts infinite number parameters
// and returns an array, which has the same parameter only once
function filter() {
  let array = [...arguments];
  let returnArray = [];
  for (let value of array) {
    if (!returnArray.includes(value)) {
      returnArray.push(value);
    }
  }
  return returnArray;
}

module.exports = filter;
