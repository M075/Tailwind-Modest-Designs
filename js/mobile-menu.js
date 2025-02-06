document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('[role="dialog"]');
    const backdrop = mobileMenu.querySelector('.fixed.inset-0.z-50');
    const openButton = document.querySelector('button[aria-label="Open main menu"]');
    const closeButton = document.querySelector('button[aria-label="Close menu"]');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
    }

    function closeMenu() {
        mobileMenu.classList.add('hidden');
    }

    // Ensure the mobile menu is hidden by default
    mobileMenu.classList.add('hidden');

    // Event Listeners
    openButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });
});