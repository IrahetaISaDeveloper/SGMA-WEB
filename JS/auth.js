document.addEventListener('DOMContentLoaded', function() {
    const trackButton = document.getElementById('trackButton');
    const vehicleIdentifierInput = document.getElementById('vehicleIdentifierInput');

    trackButton.addEventListener('click', function() {
        const identifier = vehicleIdentifierInput.value.trim();

        if (identifier) {
            // Store the identifier in localStorage
            localStorage.setItem('vehicleIdentifier', identifier);
            // Redirect to the tracking page
            window.location.href = 'tracker.html';
        } else {
            alert('Por favor, ingresa tu número de placa, tarjeta de circulación o DUI.');
        }
    });
});