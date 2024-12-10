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
const slider = document.getElementById('slider');
const handle = document.querySelector('.slider-handle');
const content = document.querySelector('.slider-content');
const button = document.querySelector('.add-card-btn');

let startY = 0; // Track the initial touch position
let currentY = 0; // Track the current touch position
let isDragging = false; // Flag to indicate if the user is dragging

// Touch start event
slider.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isDragging = true;
});

// Touch move event
slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    currentY = e.touches[0].clientY;
    const distance = startY - currentY;

    if (distance > 0) {
        // Swiping u
        const newHeight = Math.min(50, 15 + (distance / window.innerHeight) * 100);
        slider.style.height = `${newHeight}%`;
        slider.style.bottom = '0%';
    } else {
        // Swiping down
        const newHeight = Math.max(15, 50 + (distance / window.innerHeight) * 100);
        slider.style.height = `${newHeight}%`;
    }
});
// Touch end event
slider.addEventListener('touchend', () => {
    isDragging = false;

    const currentHeight = parseFloat(slider.style.height);

    // Set height based on current height
    if (currentHeight > 30) {
        slider.style.height = '40%';
        slider.style.bottom = '0%';
    } else {
        slider.style.height = '15%';
    }

    // After the height is updated, check the slider position
    setTimeout(() => {
        checkSliderPosition();
    }, 100); // Wait a little to make sure height is applied
});

// Function to check slider position
function checkSliderPosition() {
    const computedStyle = getComputedStyle(slider);
    const currentHeight = parseFloat(computedStyle.height); // Get the computed height in px

    // Convert px height to a percentage of window height
    const heightInPercent = (currentHeight / window.innerHeight) * 100;

    console.log('Height in percentage:', heightInPercent);

    // Now, check if the height exceeds 30% (this threshold can be adjusted)
    if (heightInPercent > 30) {
        slider.classList.add('open');
        slider.classList.remove('closed');
        console.log("Slider is open");

        // You can add other styles dynamically if needed
        // slider.style.backgroundColor = 'green'; // Example: change background color
    } else {
        slider.classList.remove('open');
        slider.classList.add('closed');
        console.log("Slider is closed");

        // Example: change background color when slider is closed
        // slider.style.backgroundColor = 'red';
    }
}
