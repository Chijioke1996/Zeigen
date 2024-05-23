document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownMenus = document.querySelectorAll('.dropdown-content');
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            dropdownMenus[index].style.display = dropdownMenus[index].style.display === 'block' ? 'none' : 'block';
        });
    });

    const menuLink = document.getElementById('menu-link');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    menuToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        navLinks.forEach((link, index) => {
            if (!link.contains(event.target) && !dropdownMenus[index].contains(event.target)) {
                dropdownMenus[index].style.display = 'none';
            }
        });

        if (!menuLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }

        if (!menuToggle.contains(event.target) && !navbarLinks.contains(event.target)) {
            navbarLinks.classList.remove('active');
        }
    });
});
