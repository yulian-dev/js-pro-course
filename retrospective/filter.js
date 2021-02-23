// you need to write a function, which accepts infinite number parameters
// and returns an array, which has the same parameter only once
function filter() {
    let numbers = {};

    for(let value in arguments){
        numbers[arguments[value]] = arguments[value]
    }
    return Object.values(numbers);
}