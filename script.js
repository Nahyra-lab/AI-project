document.addEventListener("DOMContentLoaded", function() {
    const curtain = document.getElementById('curtain-container');
    const openBtn = document.getElementById('open-btn');
    const mainContent = document.getElementById('main-content');
    const blockYearbook = document.getElementById('block-yearbook');
    const blockStory = document.getElementById('block-story');

    // 1. ANIMATION DU RIDEAU SUR INDEX.HTML
    if (openBtn && curtain && mainContent) {
        openBtn.addEventListener('click', () => {
            // Lance l'écartement des rideaux lavande
            curtain.classList.add('opened');

            // Fait apparaître en douceur les grands blocs blancs cachés derrière
            mainContent.classList.remove('hidden');

            // Fait disparaître complètement le rideau pour pouvoir cliquer sur l'écran
            setTimeout(() => {
                curtain.style.display = 'none';
            }, 1800);
        });
    }

    // 2. REDIRECTION SUR LES DEUX GRANDS BLOCS
    if (blockYearbook) {
        blockYearbook.addEventListener('click', function() {
            window.location.href = "yearbook.html"; // Ouvre ton grand fichier important
        });
    }

    if (blockStory) {
        blockStory.addEventListener('click', function() {
            window.location.href = "SUCCESS.html"; // Ouvre la page des profils
        });
    }
});
