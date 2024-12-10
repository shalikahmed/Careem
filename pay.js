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
const stackedImages = document.querySelectorAll('.stacked-img');
let currentImageIndex = 0;

function navigateStack(direction) {
    // Hide current image
    stackedImages[currentImageIndex].style.zIndex = 1;
    stackedImages[currentImageIndex].style.transform = 'translate(-30px, 30px) scale(0.9)';
    stackedImages[currentImageIndex].style.opacity = 0.7;

    // Update current image index
    currentImageIndex = (currentImageIndex + direction + stackedImages.length) % stackedImages.length;

    // Show the next image
    stackedImages[currentImageIndex].style.zIndex = 2;
    stackedImages[currentImageIndex].style.transform = 'translate(0, 0) scale(1)';
    stackedImages[currentImageIndex].style.opacity = 1;
}
