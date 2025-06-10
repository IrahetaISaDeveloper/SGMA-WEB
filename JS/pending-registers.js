document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeMenu = document.getElementById('closeMenu');

    // Function to open the menu
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.add('open');
    });

    // Function to close the menu
    closeMenu.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });

    // Optional: Close menu when clicking outside it (on the main content)
    // This is a more advanced behavior, I'll add a simple version.
    // If you want to close it by clicking anywhere outside, you might need a
    // more sophisticated approach or an overlay div.
    // For now, clicking the close icon or re-clicking the menu toggle will close it.

    // Handle clicks on menu items (e.g., to load different content or just log)
    const menuLinks = sideMenu.querySelectorAll('ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (e.g., page reload)
            const level = event.target.dataset.level;
            console.log(`Seleccionaste: ${level} Año`);
            // In a real system, you would load content based on 'level' here.
            // For example:
            // loadContentForLevel(level);
            sideMenu.classList.remove('open'); // Close menu after selection
        });
    });
});