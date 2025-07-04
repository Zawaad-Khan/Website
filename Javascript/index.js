    document.addEventListener('DOMContentLoaded', function() {
        const menuToggleButton = document.getElementById('menuToggle');
        const sideMenu = document.getElementById('sideMenu');
        const closeMenuButton = document.getElementById('closeMenu');

        function toggleMenu() {
            sideMenu.classList.toggle('show');
            document.body.classList.toggle('no-scroll', sideMenu.classList.contains('show'));
        }

        if (menuToggleButton) {
            menuToggleButton.addEventListener('click', toggleMenu);
        }

        if (closeMenuButton) {
            closeMenuButton.addEventListener('click', toggleMenu);
        }

        sideMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (sideMenu.classList.contains('show')) {
                    sideMenu.classList.remove('show');
                    document.body.classList.remove('no-scroll');
                }
            });
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && sideMenu.classList.contains('show')) {
                sideMenu.classList.remove('show');
                document.body.classList.remove('no-scroll');
            }
        });
    });