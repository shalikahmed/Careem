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

let currentImage = 1;

document.querySelector("#image-1").addEventListener("touchstart", startSwipe);
document.querySelector("#image-2").addEventListener("touchstart", startSwipe);

function startSwipe(event) {
    event.preventDefault();

    const image1 = document.querySelector("#image-1");
    const image2 = document.querySelector("#image-2");

    // Add swipe functionality
    const touchStart = event.touches[0].clientX;

    event.target.addEventListener("touchmove", moveSwipe);

    event.target.addEventListener("touchend", endSwipe);

    function moveSwipe(event) {
        const touchEnd = event.touches[0].clientX;
        const deltaX = touchStart - touchEnd;
    
        if (deltaX > 50) {  // If the swipe is significant (left swipe)
            if (event.target.id === "image-1") {
                // Slide Image 1 out to the left
                image1.classList.add("hide");
                image2.classList.remove("hide");
                image2.style.top = "0";  // Move Image 2 to the top
                image1.style.top = "100%"; // Move Image 1 to the bottom
            } else if (event.target.id === "image-2") {
                // Slide Image 2 out to the left
                image2.classList.add("hide");
                image1.classList.remove("hide");
                image1.style.top = "0";  // Move Image 1 back to the top
                image2.style.top = "100%";  // Move Image 2 back to the bottom
            }
            updateProgressBar(); // Call the function to update progress dots
        }
    }
    
    function endSwipe() {
        event.target.removeEventListener("touchmove", moveSwipe);
        event.target.removeEventListener("touchend", endSwipe);
    }
}
function updateProgressBar() {
    const image1 = document.querySelector("#image-1");
    const image2 = document.querySelector("#image-2");
    const dot1 = document.querySelector("#dot-1");
    const dot2 = document.querySelector("#dot-2");

    if (!image1.classList.contains("hide")) {
        // Image 1 is visible
        dot1.classList.add("active");
        dot2.classList.remove("active");
    } else if (!image2.classList.contains("hide")) {
        // Image 2 is visible
        dot1.classList.remove("active");
        dot2.classList.add("active");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.getElementById('close-menu');
    const navLinksContainer = document.getElementById('nav-links-container');

    // Open menu
    hamburgerMenu.addEventListener('click', () => {
        navLinksContainer.style.top = '0'; // Slide down
    });

    // Close menu
    closeMenu.addEventListener('click', () => {
        navLinksContainer.style.top = '-100%'; // Slide up
    });
});
// Get elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinksContainer = document.getElementById('nav-links-container');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-menu');

// Function to open the menu
function openMenu() {
    navLinksContainer.classList.add('open');
    overlay.classList.add('visible');
}

// Function to close the menu and overlay
function closeMenu() {
    navLinksContainer.classList.remove('open');
    overlay.classList.remove('visible');
}

// Open menu when hamburger icon is clicked
hamburgerMenu.addEventListener('click', openMenu);

// Close menu when close button is clicked
closeButton.addEventListener('click', closeMenu);

// Close menu when overlay (blurred screen) is clicked
overlay.addEventListener('click', closeMenu);

// Close menu when clicking anywhere outside the nav menu and hamburger button
document.addEventListener('click', function(event) {
    // Check if the click is outside the menu and hamburger button
    if (!navLinksContainer.contains(event.target) && !hamburgerMenu.contains(event.target) && !closeButton.contains(event.target)) {
        closeMenu();
    }
});
if (window.innerWidth <= 768) { // Check if the device is mobile
    navLinksContainer.style.top = "-100%"; // Hide the menu on load for mobile
}