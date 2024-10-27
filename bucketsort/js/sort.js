let maxOccurance = 0;
let minOccurance = Infinity;

function getRandomElements(amount = elementsCount) {
  // reseting arrays from previous runs
  elements = [];
  sortedElements = [];

  for (let index = 0; index < amount; ++index) {
    const random = Math.random() * maxIntSize + 1;
    elements.push(Math.floor(random));
  }
}

function getNumberLength(num) {
  return Math.ceil(Math.log10(num + 1));
}

function getBuckets(num) {
  const padCount = getNumberLength(maxIntSize);
  const numString = String(num).padStart(padCount, "0");

  return Array.from(numString);
}

function setOccurance() {
  maxOccurance = 0;
  minOccurance = Infinity;
  sortedElements.flat(Infinity).forEach((element) => {
    if (minOccurance > element.amount) {
      minOccurance = element.amount;
    }
    if (maxOccurance < element.amount) {
      maxOccurance = element.amount;
    }
  });
}

function insert(object, path, num) {
  // return once depth is reached
  if (path.length === 0) {
    let currentAmount = 1;

    if (object.key) {
      currentAmount += object.amount;
    }
    return { key: num, amount: currentAmount };
  }

  const currentIndex = path[0];

  if (object[currentIndex] === undefined) {
    object[currentIndex] = []; // create bucket
  }
  //insert
  object[currentIndex] = insert(object[currentIndex], path.slice(1), num);

  return object;
}

function sortNext(n = 1) {
  for (let index = 0; index < n; ++index) {
    const elementToSort = elements.pop();
    insert(sortedElements, getBuckets(elementToSort), elementToSort);
  }

  setOccurance();
}

function sort() {
  elements.forEach((element) => {
    insert(sortedElements, getBuckets(element), element);
  });

  setOccurance();
  elements = [];
}
