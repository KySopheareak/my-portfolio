window.addEventListener('load', () => {
    loadDescription();
    loadPicture();
});

function loadDescription() {
    const items = document.querySelectorAll('.fade-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 500);
    });
}

function loadPicture() {
    const flipItems = document.querySelectorAll(".flip-animate");
    flipItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("visible");
        }, index * 800); // delay for staggered flip effect
    });
}