// Get the necessary elements
const overlay = document.getElementById('overlay');
const selectCityContainer = document.getElementById('select-city-container');

// Function to open the city selection screen
function openSelectCityScreen() {
    overlay.style.display = 'block'; // Show the overlay
    setTimeout(() => {
        overlay.style.opacity = '1'; // Fade in the overlay
        selectCityContainer.style.bottom = '0'; // Slide the city selection screen up
    }, 10); // Delay to ensure transition works
}

// Function to close the city selection screen
function closeSelectCityScreen() {
    overlay.style.opacity = '0'; // Fade out the overlay
    selectCityContainer.style.bottom = '-100%'; // Slide the city selection screen down
    setTimeout(() => {
        overlay.style.display = 'none'; // Hide the overlay after transition
    }, 500); // Wait for transition to complete
}

// Trigger the open function manually for testing
openSelectCityScreen();

// Back Button Action
const backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click', () => {
    closeSelectCityScreen();
    setTimeout(() => {
        window.history.back(); // Navigate to the previous page
    }, 500); // Wait for the transition to finish
});
