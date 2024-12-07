let selectedRide = '';

function selectRide(rideType) {
    selectedRide = rideType;
    const rideText = document.getElementById('selected-ride');
    
    if (rideType === 'economy') {
        rideText.textContent = 'Economy - Affordable Rides';
    } else if (rideType === 'premium') {
        rideText.textContent = 'Premium - Luxury Rides';
    } else if (rideType === 'bikes') {
        rideText.textContent = 'Bikes - Fast and Easy';
    }
}

function bookRide() {
    if (selectedRide === '') {
        alert('Please select a ride!');
    } else {
        alert(`You have booked a ${selectedRide} ride!`);
    }
}
