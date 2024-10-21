const canvasHeight = 500;
const fps = 4;

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
    renderFrame();
    elements.forEach(element => {
        setTimeout(() => {
            sortNext();
            renderFrame();
        }, fps / 1000);
        
    });
}

function renderInstant() {
    sort();
    renderFrame();
}

renderMotion();
