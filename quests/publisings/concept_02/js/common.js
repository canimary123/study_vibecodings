document.addEventListener('DOMContentLoaded', function() {

    // --- Dropdown Menu Logic ---
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        const dropdownMenu = dropdownToggle.nextElementSibling;

        dropdownToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
    }
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const openDropdown = document.querySelector('.dropdown-menu.show');
        if (openDropdown && !e.target.closest('.dropdown')) {
            openDropdown.classList.remove('show');
        }
    });

    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
            mobileMenu.style.display = isHidden ? 'block' : 'none';
        });
    }

    // --- Active Navigation Link Highlighting ---
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') {
        // No highlight for home in the main nav, or handle as needed
    } else {
        const navLinks = document.querySelectorAll('.main-nav a, .dropdown-menu a');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
                
                // If the active link is inside the dropdown, also highlight the 'More' button
                const dropdown = link.closest('.dropdown');
                if (dropdown) {
                    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                    if(dropdownToggle) {
                        dropdownToggle.classList.add('active');
                    }
                }
            }
        });
    }
});
