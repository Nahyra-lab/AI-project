console.log("Le fichier JavaScript est bien chargé !");

document.addEventListener("DOMContentLoaded", function() {
    console.log("Le DOM est prêt.");
    
    const curtain = document.getElementById('curtain-container');
    const openBtn = document.getElementById('open-btn');
    const mainContent = document.getElementById('main-content');
    const blockYearbook = document.getElementById('block-yearbook');
    const blockStory = document.getElementById('block-story');

    // 1. ANIMATION DU RIDEAU
    if (openBtn && curtain && mainContent) {
        openBtn.addEventListener('click', () => {
            curtain.classList.add('opened');
            mainContent.classList.remove('hidden');
            setTimeout(() => { curtain.style.display = 'none'; }, 1800);
        });
    }

    // 2. REDIRECTIONS
    if (blockYearbook) {
        blockYearbook.addEventListener('click', function() { window.location.href = "yearbook.html"; });
    }
    if (blockStory) {
        blockStory.addEventListener('click', function() { window.location.href = "SUCCESS.html"; });
    }
});

// --- SYSTÈME D'OPPORTUNITÉS CORRIGÉ ---
const opportunitiesData = {
    robotique: {
        icon: "🤖", title: "Concours de Robotique", intro: "Le carrefour des futures ingénieures.",
        description: "Les concours de robotique permettent de concevoir...", requirements: "Logique...", benefits: "STEM..."
    },
    ecriture: {
        icon: "✍️", title: "Concours d'Écriture", intro: "Libérez votre imaginaire.",
        description: "Qu'il s'agisse de nouvelles...", requirements: "Passion...", benefits: "CV..."
    },
    plaidoirie: {
        icon: "⚖️", title: "Concours de Plaidoirie", intro: "Prenez la parole.",
        description: "Une arène où vous apprenez...", requirements: "Débat...", benefits: "Oral..."
    },
    'programme-ete': {
        icon: "☀️", title: "Programmes d'Été", intro: "Immersion universitaire.",
        description: "Organisés par de grandes universités...", requirements: "Dossier...", benefits: "Réseau..."
    },
    benevolat: {
        icon: "🤝", title: "Bénévolat", intro: "Forger son leadership.",
        description: "Aider au sein d'ONG...", requirements: "Empathie...", benefits: "Altruisme..."
    },
    bourse: {
        icon: "🎓", title: "Bourses d'Étude", intro: "Financer vos rêves.",
        description: "Il existe de multiples dispositifs...", requirements: "Excellence...", benefits: "Financement..."
    },
    mun: {
        icon: "🇺🇳", title: "Model United Nations", intro: "Coulisses de la diplomatie.",
        description: "Les simulations de l'ONU...", requirements: "Géopolitique...", benefits: "Bilinguisme..."
    },
    uwc: {
        icon: "🌍", title: "United World College", intro: "Éducation globale.",
        description: "UWC est un réseau mondial...", requirements: "15-18 ans...", benefits: "International..."
    },
    international: {
        icon: "🏆", title: "Concours Internationaux", intro: "Brillez sur la scène mondiale.",
        description: "Olympiades de Mathématiques...", requirements: "Niveau avancé...", benefits: "Reconnaissance..."
    }
};

window.openOpportunity = function(key) {
    console.log("Clic détecté sur l'opportunité :", key);
    
    const data = opportunitiesData[key];
    if (!data) {
        alert("Erreur : Impossible de trouver les données pour la clé '" + key + "'");
        return;
    }

    const detailContent = document.getElementById('detail-content');
    const listView = document.getElementById('opps-list-view');
    const detailView = document.getElementById('opps-detail-view');
    
    // Vérification de sécurité pour voir si les éléments existent dans le HTML
    if (!detailContent || !listView || !detailView) {
        alert("Erreur HTML : L'un des conteneurs ('detail-content', 'opps-list-view' ou 'opps-detail-view') est introuvable sur cette page !");
        return;
    }

    detailContent.innerHTML = `
        <div class="flex items-center gap-4 mb-6">
            <span class="text-5xl">${data.icon}</span>
            <div>
                <h3 class="text-3xl font-bold text-blue-900">${data.title}</h3>
                <p class="text-yellow-600 italic text-lg mt-1">${data.intro}</p>
            </div>
        </div>
        <hr class="my-6">
        <div class="space-y-6">
            <p class="bg-slate-50 p-4 rounded-xl border-l-4 border-blue-900">${data.description}</p>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-amber-50 p-5 rounded-2xl border">
                    <h4 class="font-bold text-amber-800 mb-2">⚡ Critères</h4>
                    <p class="text-sm">${data.requirements}</p>
                </div>
                <div class="bg-emerald-50 p-5 rounded-2xl border">
                    <h4 class="font-bold text-emerald-800 mb-2">🚀 Apports</h4>
                    <p class="text-sm">${data.benefits}</p>
                </div>
            </div>
        </div>
    `;

    listView.classList.add('hidden');
    detailView.classList.remove('hidden');
    // Forçage natif si Tailwind refuse de s'exécuter
    listView.style.display = 'none';
    detailView.style.display = 'block';
    
    window.scrollTo(0, 0);
};

window.closeOpportunity = function() {
    const listView = document.getElementById('opps-list-view');
    const detailView = document.getElementById('opps-detail-view');
    
    if (listView && detailView) {
        detailView.classList.add('hidden');
        listView.classList.remove('hidden');
        detailView.style.display = 'none';
        listView.style.display = 'block';
    }
};
