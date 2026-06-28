document.addEventListener("DOMContentLoaded", function() {
    const curtain = document.getElementById('curtain-container');
    const openBtn = document.getElementById('open-btn');
    const mainContent = document.getElementById('main-content');
    const blockYearbook = document.getElementById('block-yearbook');
    const blockStory = document.getElementById('block-story');

    // 1. ANIMATION DU RIDEAU SUR INDEX.HTML
    if (openBtn && curtain && mainContent) {
        openBtn.addEventListener('click', () => {
            curtain.classList.add('opened');
            mainContent.classList.remove('hidden');

            setTimeout(() => {
                curtain.style.display = 'none';
            }, 1800);
        });
    }

    // 2. REDIRECTION SUR LES DEUX GRANDS BLOCS
    if (blockYearbook) {
        blockYearbook.addEventListener('click', function() {
            window.location.href = "yearbook.html";
        });
    }

    if (blockStory) {
        blockStory.addEventListener('click', function() {
            window.location.href = "SUCCESS.html";
        });
    } // <-- L'accolade manquante qui cassait tout était ici !
});

// --- SYSTÈME D'OPPORTUNITÉS DYNAMIQUES (Sorti et globalisé) ---
const opportunitiesData = {
    robotique: {
        icon: "🤖",
        title: "Concours de Robotique",
        intro: "Le carrefour des futures ingénieures et des passionnées de tech.",
        description: "Les concours de robotique permettent de concevoir, assembler et programmer des robots capables de remplir des missions précises. C'est une porte d'entrée royale pour les domaines des STEM (Sciences, Tech, Ingénierie, Maths).",
        requirements: "Esprit d'équipe, logique, curiosité pour le code ou la mécanique.",
        benefits: "Apprentissage accéléré de Python/C++, maîtrise de cartes Arduino/LEGO Mindstorms, et développement de soft skills très recherchés par les recruteurs."
    },
    ecriture: {
        icon: "✍️",
        title: "Concours d'Écriture",
        intro: "Faites résonner vos récits et libérez votre imaginaire.",
        description: "Qu'il s'agisse de nouvelles, d'essais engagés ou de poésie, ces concours offrent un tremplin pour soumettre vos écrits à des comités de lecture, être publiée ou gagner des bourses financières.",
        requirements: "Passion pour les mots, créativité, respect des thèmes imposés.",
        benefits: "Amélioration notable des capacités de rédaction, confiance en sa propre voix, visibilité publique et enrichissement majeur de votre CV académique."
    },
    plaidoirie: {
        icon: "⚖️",
        title: "Concours de Plaidoirie & Éloquence",
        intro: "Prenez la parole, défendez vos convictions avec panache.",
        description: "Une arène où vous apprenez l'art oratoire juridique ou rhétorique. Vous devrez construire des argumentations rigoureuses sur des sujets complexes et les restituer avec charisme face à un public.",
        requirements: "Aimer le débat, être prête à surmonter le trac, rigueur intellectuelle.",
        benefits: "Aisance totale à l'oral (grand oral, entretiens), développement de l'esprit critique et structuration avancée de la pensée logique."
    },
    'programme-ete': {
        icon: "☀️",
        title: "Programmes d'Été (Summer Camps)",
        intro: "Une immersion en avance dans le monde universitaire et professionnel.",
        description: "Organisés par de grandes universités ou institutions, ces programmes de 1 à 4 semaines vous permettent de suivre des cours intensifs, de vivre sur un campus et d'explorer un futur domaine d'étude.",
        requirements: "Dossier scolaire solide, lettre de motivation, parfois un niveau d'anglais intermédiaire.",
        benefits: "Découverte concrète d'une filière, création d'un réseau international d'amis inspirés et accoutumance précoce à l'autonomie universitaire."
    },
    benevolat: {
        icon: "🤝",
        title: "Bénévolat & Engagement Communautaire",
        intro: "Se rendre utile tout en forgeant son leadership humain.",
        description: "Aider au sein d'ONG, d'associations locales, d'actions écologiques ou de tutorats scolaires. C'est l'opportunité de l'action directe sur le terrain.",
        requirements: "Générosité, ponctualité, empathie et temps libre.",
        benefits: "Preuve concrète de votre altruisme (très valorisé pour les demandes de bourses à l'étranger), développement du leadership de projet et sens profond des réalités sociales."
    },
    bourse: {
        icon: "🎓",
        title: "Bourses d'Étude",
        intro: "Financer vos rêves académiques sans barrières financières.",
        description: "Il existe de multiples dispositifs d'aide financière octroyés par des fondations privées, des gouvernements ou des écoles pour soutenir les élèves d'excellence ou issus de milieux modestes.",
        requirements: "Excellence académique, projet d'études limpide, rigueur administrative.",
        benefits: "Prise en charge partielle ou totale des frais de scolarité, accès à des parrains/marraines mentors dans le milieu professionnel."
    },
    mun: {
        icon: "🇺🇳",
        title: "Model United Nations (MUN)",
        intro: "Entrez dans les coulisses de la diplomatie mondiale.",
        description: "Les simulations de l'ONU invitent les jeunes à représenter un pays attribué. Vous devez négocier, rédiger des résolutions internationales et débattre de crises mondiales réelles en suivant le protocole des Nations Unies.",
        requirements: "Culture générale, intérêt pour l'histoire/géopolitique, compétences de négociation.",
        benefits: "Bilinguisme appliqué (les grands MUN se font en anglais), négociation stratégique, compréhension aiguë des grands enjeux planétaires."
    },
    uwc: {
        icon: "🌍",
        title: "United World College (UWC)",
        intro: "Une éducation globale pour faire de l'éducation une force d'union.",
        description: "UWC est un réseau mondial de 18 lycées d'élite qui rassemble des jeunes de plus de 150 pays. Les élèves y préparent le prestigieux diplôme du Baccalauréat International (IB) grâce à des bourses complètes.",
        requirements: "Avoir entre 15 et 18 ans, d'excellents résultats, un grand esprit d'ouverture et d'engagement citoyen.",
        benefits: "Une éducation internationale d'excellence, ouverture totale sur le monde et un pass direct pour intégrer les meilleures universités de la planète."
    },
    international: { // Attention : renommé 'international' pour correspondre au onclick("openOpportunity('international')") du HTML
        icon: "🏆",
        title: "Concours Internationaux",
        intro: "Représentez votre country et brillez sur la scène mondiale.",
        description: "Qu'il s'agisse des Olympiades de Mathématiques, de concours de code comme le Google Code-in, ou de challenges d'innovation environnementaux mondiaux, ces compétitions vous opposent aux meilleurs esprits de votre génération.",
        requirements: "Niveau très avancé dans la discipline choisie, persévérance.",
        benefits: "Reconnaissance internationale ultime, ligne d'or absolue sur un dossier, rencontres marquantes avec des experts mondiaux du secteur."
    }
};

// Attacher les fonctions à l'objet window pour que le HTML ("onclick") y ait accès
window.openOpportunity = function(key) {
    const data = opportunitiesData[key];
    if (!data) return;

    const detailContent = document.getElementById('detail-content');
    const listView = document.getElementById('opps-list-view');
    const detailView = document.getElementById('opps-detail-view');
    
    if (!detailContent || !listView || !detailView) return;

    detailContent.innerHTML = `
        <div class="flex items-center gap-4 mb-6">
            <span class="text-5xl">${data.icon}</span>
            <div>
                <h3 class="text-3xl md:text-4xl font-bold text-blue-900 font-serif">${data.title}</h3>
                <p class="text-yellow-600 font-medium italic text-lg mt-1">${data.intro}</p>
            </div>
        </div>
        
        <hr class="my-6 border-slate-100">
        
        <div class="space-y-6 text-slate-700">
            <div>
                <h4 class="text-sm font-semibold uppercase tracking-wider text-blue-900 mb-2">Qu'est-ce que c'est ?</h4>
                <p class="leading-relaxed bg-slate-50 p-4 rounded-xl border-l-4 border-blue-900 text-base">${data.description}</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 pt-4">
                <div class="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60">
                    <h4 class="font-bold text-amber-800 flex items-center gap-2 mb-2">⚡ Critères & Prérequis</h4>
                    <p class="text-sm leading-relaxed">${data.requirements}</p>
                </div>
                <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200/60">
                    <h4 class="font-bold text-emerald-800 flex items-center gap-2 mb-2">🚀 Ce que cela vous apporte</h4>
                    <p class="text-sm leading-relaxed">${data.benefits}</p>
                </div>
            </div>
        </div>
        
        <div class="mt-10 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
            <a href="#improving" class="bg-blue-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition text-sm text-center">
                Besoin de conseils pour postuler ?
            </a>
        </div>
    `;

    // Gestion de l'affichage avec classes Tailwind
    listView.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    // Petite animation CSS d'opacité en option si vos classes le supportent
    detailView.style.opacity = "1";
    detailView.style.transform = "scale(1)";
    
    window.scrollTo(0, 0);
};

window.closeOpportunity = function() {
    const listView = document.getElementById('opps-list-view');
    const detailView = document.getElementById('opps-detail-view');
    
    if (listView && detailView) {
        detailView.classList.add('hidden');
        listView.classList.remove('hidden');
    }
};
