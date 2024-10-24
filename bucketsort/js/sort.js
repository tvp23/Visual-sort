const elementsCount = 1700;
const maxIntSize = 9999;
let elements = [];
let sortedElements = [];

function init() {
    // reseting arrays from previous runs
    elements = [];
    sortedElements = [];

    for (let index = 0; index < elementsCount; ++index) {
        const random = Math.random()*maxIntSize+1;
        elements.push(Math.floor(random));
    }
}

function getNumberLength(num) {
    return Math.ceil(Math.log10(num + 1));
}

function getBuckets(num) {
    const padCount = getNumberLength(maxIntSize);
    const numString = String(num).padStart(padCount, '0');

    return Array.from(numString);
}

function insert(array, path, num) {
    // return once depth is reached
    if (path.length === 0) {
        return [...array, num];
    }

    const currentIndex = path[0];

    if(array[currentIndex] === undefined){
        array[currentIndex] = []; // create bucket
    }
    //insert
    array[currentIndex] = insert(array[currentIndex], path.slice(1), num);

    return array;
}

function sortNext(n = 1) {
    for (let index = 0; index < n; ++index) {
        const elementToSort = elements.pop();
        insert(sortedElements, getBuckets(elementToSort), elementToSort);
    }
}

function sort() {
    elements.forEach(element => {
        insert(sortedElements, getBuckets(element), element);
    });
    elements = [];
}