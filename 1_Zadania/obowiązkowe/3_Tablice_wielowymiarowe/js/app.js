var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

var arr2 = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];

// Zadanie 0

function checkArray(arr) {
   return arr.map(a => parseInt(a) % 2 === 0);
}

// Zadanie 1

function getElementOnPosition(array, x, y) {
    return arr[x][y];
}

function getLengthOfInnerArray(array, x) {
    return arr[x].length;
}

// Zadanie 2

getElementsInArray(task2Array);    
console.log(getLengthOfAllInnerArray(task2Array));


function getElementsInArray(array) {
    array.forEach(a => console.log(a));
}

getLengthOfAllInnerArray(task2Array)
function getLengthOfAllInnerArray(array) {
    array.forEach((inner) => inner.forEach((number) => console.log(number)));
}

// Zadanie 3

function print2DArray(array) {
    array.flat().forEach((number) => console.log(number));
}

// Zadanie 4 

var task3Array = [
    [1, 1, 1, 1],
    [0, 1, 2, 3],
    [9, 10, 11, 12]
];

print2DArray(task3Array);

// Zadanie 5 

function create2DArray(a, b) {
    var outerArray = [];
    var counter = 1;
    
    for(var x = 0; x < a; x++) {
        var innerArray = [];
        for(var y = 0; x < b; y++) {
            innerArray.push(counter);
            counter++;
        }
        outerArray.push(innerArray);
    }

    return outerArray;
}



