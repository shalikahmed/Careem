document.addEventListener('DOMContentLoaded', () => {
    const payContainer = document.getElementById('pay-container');
    const closeButton = document.getElementById('close-button');

    // Trigger slide-in effect on page load
    setTimeout(() => {
        payContainer.classList.add('show');
    }, 100);

    // Close Pay page and navigate back to index.html
    closeButton.addEventListener('click', () => {
        payContainer.classList.remove('show');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500); // Match this duration with the CSS transition
    });
});
