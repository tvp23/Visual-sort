const elementsCount = 1700;
const maxIntSize = 9999;
let elements = [];
let sortedElements = [];

init();

function init() {
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

    // insert
    if(array[currentIndex]){
        array[currentIndex] = insert(array[currentIndex], path.slice(1), num);
    } else { // build path
        array[currentIndex] = [];
        array[currentIndex] = insert(array[currentIndex], path.slice(1), num);
    }

    return array;
}

function sortNext() {
    const elementToSort = elements.pop();
    insert(sortedElements, getBuckets(elementToSort), elementToSort);
}

function sort() {
    console.time('Sorting elements')
    elements.forEach(element => {
        insert(sortedElements, getBuckets(element), element);
    });
    elements = [];
    console.timeEnd('Sorting elements')

    console.log('Sorted array with bucket structure:');
    console.log(sortedElements);
    console.log('Sorted array flat:');
    console.log(sortedElements.flat(Infinity));
}