//your code here
// Drag and Drop functionality

const divs = document.querySelectorAll('.draggable');

divs.forEach(div => {
    div.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
    });

    div.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    div.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text');
        const draggedDiv = document.getElementById(draggedId);
        
        // Swap the background images
        const draggedImage = draggedDiv.style.backgroundImage;
        const targetImage = e.target.style.backgroundImage;

        draggedDiv.style.backgroundImage = targetImage;
        e.target.style.backgroundImage = draggedImage;
    });
});
