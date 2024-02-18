
const gridContainer = document.querySelector('.container');

const sizeInput = document.querySelector('#side');
const button = document.querySelector('#btn');


function handleButtonClick() {
    const size = sizeInput.value;
    createGrid(size);
}

function createGrid(size) {
    // Clear existing grid items
    gridContainer.innerHTML = '';

    // Calculate size of each grid item
    const itemSize = 100 / size;

    // Create grid
    for (let i = 0; i < size * size; i++) {
        // Create a grid item
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}%`;
        gridItem.style.height = `${itemSize}%`;

        // Append the grid item to the grid container
        gridContainer.appendChild(gridItem);
    }
}

button.addEventListener('click', handleButtonClick)




