const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // Add code to transition to a new page associated with the box's content
        console.log(`Box ${box.id} clicked!`);
    });
});