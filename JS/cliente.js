document.addEventListener('DOMContentLoaded', function() {
    const trackingForm = document.getElementById('trackingForm');
    const vehicleInfoSection = document.getElementById('vehicleInfo');
    const infoPlaca = document.getElementById('infoPlaca');
    const infoModelo = document.getElementById('infoModelo');
    const infoEstado = document.getElementById('infoEstado');
    const progressBar = document.getElementById('progressBar');
    const progressPercentage = document.getElementById('progressPercentage');
    const updatesList = document.getElementById('updatesList');
    const placaInput = document.getElementById('placa'); // Get the input field on the tracking page

    // Retrieve the identifier from localStorage
    const storedIdentifier = localStorage.getItem('vehicleIdentifier');

    if (storedIdentifier) {
        placaInput.value = storedIdentifier; // Pre-fill the input
        // Optionally, you can automatically trigger the search here
        // trackingForm.dispatchEvent(new Event('submit')); // Uncomment to auto-submit
        localStorage.removeItem('vehicleIdentifier'); // Clean up localStorage after use
    }

    trackingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const placa = placaInput.value.trim().toUpperCase(); // Use placaInput here

        // Simulación de datos (en una aplicación real, esto vendría del servidor)
        let vehicleData = null;
        let updatesData = [];

        if (placa === 'ABC-123') {
            vehicleData = { placa: 'ABC-123', modelo: 'Sedán', estado: 'En reparación - Motor' };
            updatesData = [
                '2023-10-26: Recepción del vehículo para diagnóstico.',
                '2023-10-27: Diagnóstico completado. Problema en el motor detectado.',
                '2023-10-28: Inicio de la reparación del motor.',
                '2023-10-30: 50% de la reparación del motor completada.',
            ];
            progressBar.style.width = '50%';
            progressPercentage.textContent = '50%';
        } else if (placa === 'XYZ-789') {
            vehicleData = { placa: 'XYZ-789', modelo: 'SUV Genérica', estado: 'Reparación de frenos completada' };
            updatesData = [
                '2023-10-25: Ingreso del vehículo por problemas en los frenos.',
                '2023-10-26: Reemplazo de pastillas y discos de freno.',
                '2023-10-27: Prueba de frenado exitosa. Reparación completada.',
            ];
            progressBar.style.width = '100%';
            progressPercentage.textContent = '100%';
        } else {
            vehicleData = null;
            updatesData = ['No se encontraron resultados para la placa ingresada.'];
            progressBar.style.width = '0%';
            progressPercentage.textContent = '0%';
        }

        if (vehicleData) {
            infoPlaca.textContent = vehicleData.placa;
            infoModelo.textContent = vehicleData.modelo;
            infoEstado.textContent = vehicleData.estado;
            vehicleInfoSection.classList.remove('hidden');
            updatesList.innerHTML = '';
            updatesData.forEach(update => {
                const li = document.createElement('li');
                li.textContent = update;
                updatesList.appendChild(li);
            });
        } else {
            vehicleInfoSection.classList.add('hidden');
            updatesList.innerHTML = `<li class="no-results">${updatesData.join('')}</li>`;
        }
    });
});