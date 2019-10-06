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