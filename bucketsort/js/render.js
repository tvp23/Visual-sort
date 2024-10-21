const canvasHeight = 500;
const fps = 30;

function renderFrame() {
    const unsorted = document.getElementById('graph-unsorted');
    unsorted.innerHTML = '';
    const sorted = document.getElementById('graph-sorted');
    sorted.innerHTML = '';

    elements.forEach(element => {
        const height = element / maxIntSize * canvasHeight;
        const div = document.createElement('div');
        div.style.height = `${Math.floor(height)}px`;
        div.style.width = '1px';
        div.classList.add('bar');

        unsorted.appendChild(div);
    });

    sortedElements.flat(Infinity).forEach(element => {
        const height = element / maxIntSize * canvasHeight;
        const div = document.createElement('div');
        div.style.height = `${Math.floor(height)}px`;
        div.style.width = '1px';
        div.classList.add('bar');

        sorted.appendChild(div);
    });
}

function renderMotion() {
    init();
    renderFrame();

    setInterval(() => {
        if(elements.length > 0) {
            sortNext(8);
            renderFrame();
        }
    }, 1000 / fps);
}

function renderInstant() {
    init();

    sort();
    renderFrame();
    alert('See console for details')
}
