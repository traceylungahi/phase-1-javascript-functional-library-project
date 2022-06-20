function standardizeInput(collection) {
    return(collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach (collection, callback) {
    let newCollection = standardizeInput(collection);
    for(let a =0; a < newCollection.length; a++) {
        callback(newCollection[a]);
    }
    return collection;
}

function myMap(collection, callback) {
    let newCollection = standardizeInput(collection); 
    let newArray = [];
    for(let a =0; a < newCollection.length; a++) {
        newArray.push(callback(newCollection[a]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
    if(!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }
    let length = newCollection.length;
    for(let a = 0; a < length; a++) {
        acc = callback(acc, newCollection[a], newCollection);
    }
    return acc;
}

function myFind(collection, predicate) {
    let newCollection = standardizeInput(collection);
    for(let a =0; a < newCollection.length; a++) {
        if(predicate(newCollection[a])) return newCollection[a];
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let newCollection = standardizeInput(collection);
    let newArray = [];
    for(let a =0; a < newCollection.length; a++) {
        if(predicate(newCollection[a]))
        newArray.push(newCollection[a]);
    }
    return newArray;
}

function mySize(collection) {
    let newCollection = standardizeInput(collection);
    return newCollection.length;
}

function myFirst(array, stop=false) {
    return (stop)? array.slice(0, stop) : array[0];
}

function myLast(array, start=false) {
    return (start)? array.slice(array.length-start, array.length): array[array.length-1];
}

function mySortBy(array, callback) {
    let newArray = [...array];
    return newArray.sort(function(y, z){
        if (callback(y) > callback(z)) {
            return 1;
        } else if(callback(z) > callback(y)) {
            return 1;
        } else {
            return 0;
        }
    });
}

const myKeys = function(object) {
    let keys = [];
    for(let key in object) {
        keys.push(key);
    }
    return keys;
}

const myValues = function(object) {
    let values = [];
    for(let key in object) {
        values.push(object[key]);
    }
    return values;
}