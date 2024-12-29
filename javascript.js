document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const target = link.getAttribute('href');
            if (target && !target.startsWith('#')) {
                window.location.href = target; // Open the link in the same tab
            }
        });
    });
});
