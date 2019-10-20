// Zadanie 0
function distFromAverage(array) {
    const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    var arrayAverage = average(array);

    var resultArray = [];
    array.forEach((element, index) => {
        resultArray[index] = element - arrayAverage;
    });

    return resultArray;
}

// Zadanie 1
var fruits = ["apple", "orange", "banana", "blackberry"]
//1
console.log(fruits[0]);

//2
console.log(fruits[fruits.length - 1]);

//3
for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Zadanie 3

function printArray(array) {
    for(var i = 0; i < array.length; i++) {
        console.log(array[i]);
    } 
}

// Zadanie 4

function multiply(array) {
    return array.reduce((acc, num) => {
        return acc *= num;
    })
}

// Zadanie 5

function getEvenAvarage(array) {
    var filteredArray = array.filter(number => number % 2 == 0);

    if(filteredArray.length == 0) {
        return null;
    }
    
    var sum = filteredArray.reduce((acc, num) => {
        return acc += num;
    })

    return sum / filteredArray.length;
}

// Zadanie 6

function sortArray(array) {
    return array.sort((a, b) => { 
        return a - b
    });
}

// Zadanie 7

function addArrays(first, second) {
    var counter = first.length > second.length ? first.length : second.length;
    var result = [];

    for(var i = 0; i < counter; i++) {
        var firstNum = first[i] != null ? first[i] : 0;
        var secondNum = second[i] != null ? second[i] : 0;
        result[i] = firstNum + secondNum;
    }

    return result;
}