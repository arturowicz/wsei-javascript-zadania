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

