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