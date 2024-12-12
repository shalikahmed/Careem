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
document.addEventListener('DOMContentLoaded', () => {
    const sliderHandle = document.getElementById('slider-handle');
    const sliderContainer = document.getElementById('slider-container');
    
    let isDragging = false;
    let startY;
    let startBottom;
    
    // Function to start dragging
    sliderHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY; // Get the current Y position of the mouse
        startBottom = parseInt(window.getComputedStyle(sliderContainer).bottom, 10); // Get current slider bottom position
        document.body.style.userSelect = 'none'; // Prevent text selection during dragging
    });

    // Function to handle dragging
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const distance = e.clientY - startY; // Calculate the distance the mouse has moved
            const newBottom = startBottom - distance; // Adjust the slider's position based on the distance moved

            // Limit the movement to within a range
            if (newBottom >= -100 && newBottom <= 300) {
                sliderContainer.style.bottom = newBottom + 'px'; // Set the new bottom value to move the slider
            }
        }
    });

    // Function to stop dragging
    document.addEventListener('mouseup', () => {
        isDragging = false; // Stop dragging when mouse is released
        document.body.style.userSelect = ''; // Restore text selection
    });

    // Touch support for mobile devices
    sliderHandle.addEventListener('touchstart', (e) => {
        isDragging = true;
        startY = e.touches[0].clientY;
        startBottom = parseInt(window.getComputedStyle(sliderContainer).bottom, 10);
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const distance = e.touches[0].clientY - startY;
            const newBottom = startBottom - distance;

            if (newBottom >= -100 && newBottom <= 300) {
                sliderContainer.style.bottom = newBottom + 'px';
            }
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        document.body.style.userSelect = '';
    });
});
