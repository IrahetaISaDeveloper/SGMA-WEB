/*Carousel*/
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselIndicators = document.querySelector('.carousel-indicators');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const slideCount = carouselSlides.length;
const intervalTime = 3000; // Intervalo de tiempo en milisegundos (3 segundos)
let interval;

function goToSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.style.left = `${(i - index) * 100}%`;
        slide.style.opacity = (i === index) ? 1 : 0;
    });

    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
}

function goToIndicator(event) {
    const index = parseInt(event.target.dataset.index);
    goToSlide(index);
    resetInterval(); // Reiniciar el intervalo al hacer clic en un indicador
}

function startInterval() {
    interval = setInterval(nextSlide, intervalTime);
}

function resetInterval() {
    clearInterval(interval);
    startInterval();
}

// Inicializar el carrusel
goToSlide(0);
startInterval();

// Event listeners para los indicadores
carouselIndicators.addEventListener('click', goToIndicator);

/*Filtros en los registros pendientes */
document.addEventListener('DOMContentLoaded', function() {
    const botonesFiltro = document.querySelectorAll('.filtro-año');
    const tarjetasRegistro = document.querySelectorAll('.registro-tarjeta');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function() {
            const añoSeleccionado = this.getAttribute('data-año');

            // Desactivar el botón activo previamente
            botonesFiltro.forEach(btn => btn.classList.remove('activo'));

            // Activar el botón actual
            this.classList.add('activo');

            // Ocultar todas las tarjetas
            tarjetasRegistro.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });

            // Mostrar las tarjetas del año seleccionado
            tarjetasRegistro.forEach(tarjeta => {
                if (tarjeta.getAttribute('data-año') === añoSeleccionado) {
                    tarjeta.style.display = 'grid'; // O 'flex' si estás usando flex para las tarjetas
                }
            });
        });
    });

    // Opcional: Asegurarse de que el primer botón esté activo y las tarjetas del primer año se muestren inicialmente
    const primerBoton = document.querySelector('.filtro-año[data-año="1"]');
    if (primerBoton) {
        primerBoton.classList.add('activo');
    }

    tarjetasRegistro.forEach(tarjeta => {
        if (tarjeta.getAttribute('data-año') !== '1') {
            tarjeta.style.display = 'none';
        } else {
            tarjeta.style.display = 'grid'; // O 'flex'
        }
    });
});

/* Animacion clic nav */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento de salto predeterminado

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Hace que el desplazamiento sea suave
        });
    });
});

/*
// --- NUEVO CÓDIGO PARA MOSTRAR EL NOMBRE DE USUARIO EN EL NAVBAR ---
document.addEventListener('DOMContentLoaded', function() {
    // 1. Intentar obtener el nombre de usuario guardado en localStorage.
    const savedUserName = localStorage.getItem('userNameToDisplay');

    // 2. Encontrar el elemento del navbar donde queremos mostrar el nombre.
    const userNameNavElement = document.getElementById('nombre-usuario-nav');

    // 3. Si encontramos el nombre de usuario guardado y el elemento en el navbar...
    if (savedUserName && userNameNavElement) {
        // ...entonces mostramos el nombre.
        userNameNavElement.textContent = `Ing. ${savedUserName}`; // Añadimos "Ing." como en tu imagen
    }
    // Si no se encuentra el nombre, el espacio quedará vacío.
    // Opcionalmente, podrías agregar un 'else' para redirigir al login si no hay sesión.
});
*/
