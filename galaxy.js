document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.product-card');
        card.classList.add('show-back');
    });
});

document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.product-card');
        card.classList.remove('show-back');
    });
});
