const canvasHeight = 500;
const fps = 30;
const elementsPerFrame = 8;

function getBar(element) {
    const height = element / maxIntSize * canvasHeight;
    const bar = document.createElement('div');
    bar.style.height = `${Math.floor(height)}px`;
    bar.style.width = '1px';
    bar.classList.add('bar');
    return bar;
}

function renderFrame() {
    const unsorted = document.getElementById('graph-unsorted');
    unsorted.innerHTML = '';
    const sorted = document.getElementById('graph-sorted');
    sorted.innerHTML = '';

    elements.forEach(element => {
        unsorted.appendChild(getBar(element));
    });

    sortedElements.flat(Infinity).forEach(element => {
        sorted.appendChild(getBar(element));
    });
}

function renderMotion() {
    init();
    renderFrame();

    setInterval(() => {
        if(elements.length > 0) {
            sortNext(elementsPerFrame);
            renderFrame();
        }
    }, 1000 / fps);
}

function renderInstant() {
    init();

    console.time('Sorting elements');
    sort();
    console.timeEnd('Sorting elements');12
    renderFrame();
    alert('See console for details')

    console.log('Sorted array with bucket structure');
    console.log(sortedElements);
    
    console.log('Sorted array flat');
    console.log(sortedElements.flat(Infinity));
}
