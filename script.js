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
// script.js
