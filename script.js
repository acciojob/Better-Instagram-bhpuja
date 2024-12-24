//your code here
// Drag and Drop functionality

const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
    // Handle drag start
    draggable.addEventListener('dragstart', (event) => {
        draggedElement = event.target;
        setTimeout(() => {
            draggedElement.style.visibility = 'hidden';
        }, 0);
    });

    // Handle drag end
    draggable.addEventListener('dragend', () => {
        draggedElement.style.visibility = 'visible';
        draggedElement = null;
    });

    // Handle drag over
    draggable.addEventListener('dragover', (event) => {
        event.preventDefault(); // Necessary to allow dropping
    });

    // Handle drop
    draggable.addEventListener('drop', (event) => {
        event.preventDefault();

        // Swap the background images of dragged and target elements
        const targetElement = event.target;
        const draggedImage = draggedElement.style.backgroundImage;
        const targetImage = targetElement.style.backgroundImage;

        draggedElement.style.backgroundImage = targetImage;
        targetElement.style.backgroundImage = draggedImage;
    });
});
