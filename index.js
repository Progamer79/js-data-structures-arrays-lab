// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name) {
    return drivers.push(name);
}


function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}


function destructivelyRemoveLastDriver() {
    drivers.pop();
}


function destructivelyRemoveFirstDriver() {
    drivers.shift();
}


function appendDriver(name) {
    const newArray = [...drivers];
    newArray.push(name);
    return newArray;
}


function prependDriver(name) {
    const newArray = [name, ...drivers]
    return newArray;
}


function removeLastDriver() {
    const newArray = [...drivers];
    newArray.pop();
    return newArray;
}


function removeFirstDriver() {
    const newArray = [...drivers];
    newArray.shift();
    return newArray;
}