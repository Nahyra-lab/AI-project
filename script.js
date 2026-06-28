// ==========================================
//  SUCCESS STORY - JavaScript principal
// ==========================================

console.log("Script.js chargé avec succès !");

// ==========================================
//  1. DONNÉES DES OPPORTUNITÉS
// ==========================================
const opportunitiesData = {
    robotique: {
        icon: "🤖",
        title: "Concours de Robotique (DRILL)",
        intro: "Le carrefour des futures ingénieures.",
        description: "Le programme s'appelle <strong>DRILL</strong> (Dynamic Robotics and Independent Learning Lab). Il s'agit d'une formation gratuite de 20 heures, répartie sur deux week-ends, qui permet aux élèves de découvrir la robotique et l'ingénierie de manière très pratique. Aucune expérience préalable n'est nécessaire ! Après avoir obtenu le certificat DRILL, les étudiants peuvent postuler au GEAR Lab, un programme plus avancé.",
        target: "Élèves motivés (Aucun prérequis requis)",
        timeline: "Réparti sur 2 week-ends",
        detailsTitle: "Objectifs & Avantages :",
        details: [
            "Développer la pensée d'ingénieur, la créativité et le travail d'équipe.",
            "Résolution de problèmes complexes.",
            "Déjeuner fourni gratuitement aux participants.",
            "Accès ultérieur potentiel au GEAR Lab (programmation, électronique, fabrication numérique)."
        ]
    },
    ecriture: {
        icon: "✍️",
        title: "Concours d'Écriture",
        intro: "Libérez votre imaginaire.",
        description: "Il existe de nombreux concours d'écriture en Haïti permettant aux élèves de s'exprimer librement et d'être reconnus pour leurs efforts.",
        target: "Jeunes et élèves du secondaire selon les concours",
        timeline: "Variable selon l'agenda des structures",
        detailsTitle: "Concours notables en Haïti :",
        details: [
            "<strong>Médcriture</strong> : Un carrefour d'expression clé.",
            "<strong>Salon du livre de P-au-P</strong> : Concours « Lettre à mon auteur.e préféré.e » destiné aux jeunes.",
            "<strong>Concours National des Jeunes Écrivains Émergents</strong> : Lancé par Minouche Sénéphard.",
            "<strong>Centre Muse Haïti</strong> : Organise un concours national de dissertation scolaire.",
            "<strong>ACTIF</strong> : Lance parfois des concours de poésie et d'écriture autour de thèmes sociaux.",
            "<strong>MOLICAJ</strong> : Organise des concours littéraires et des événements comme Étoile des Lettres."
        ]
    },
    plaidoirie: {
        icon: "⚖️",
        title: "Grand Concours de Plaidoirie de l'OPC",
        intro: "Prenez la parole.",
        description: "Une arène prestigieuse organisée par l'Office de la Protection du Citoyen (OPC) où vous apprenez à défendre vos idées avec conviction et élégance sur des sujets cruciaux.",
        target: "Élèves du Secondaire 1 au Secondaire 4",
        timeline: "Date limite d'inscription : 31 juillet",
        extraBadge: "Thème : Droit des femmes et des élections",
        detailsTitle: "Compétences clés évaluées :",
        details: [
            "Maîtrise parfaite du sujet imposé.",
            "Qualité, rigueur et structure de l'argumentation.",
            "Éloquence, posture et expression orale face au jury.",
            "Originalité et profondeur de l'analyse critique."
        ]
    },
    'programme-ete': {
        icon: "☀️",
        title: "Programmes d'Été & Formations",
        intro: "Immersion académique et leadership.",
        description: "Découvrez deux programmes d'excellence qui se déroulent principalement <strong>en ligne</strong> : <br><br><strong>1. Programme PAYS (Fondation Hector) :</strong> Lancé en 2019, c'est un programme intensif de deux semaines pour développer vos compétences académiques, votre leadership et vous préparer aux études supérieures.<br><br><strong>2. ESLP (Edlight) :</strong> Programme entièrement financé de deux semaines axé sur le leadership, l'entrepreneuriat, les finances personnelles et les rencontres avec des intervenants d'institutions comme Harvard, MIT, Microsoft et Cornell.",
        target: "Élèves du Secondaire 1, 2 et 3 (PAYS) / Jeunes de 15 à 18 ans (ESLP)",
        timeline: "Sessions durant l'été (Généralement en ligne)",
        detailsTitle: "Ce que vous allez y faire :",
        details: [
            "Séminaires interactifs avec des professionnels de divers domaines.",
            "Initiation rigoureuse à la rédaction d'essais.",
            "Conseils stratégiques pour les candidatures universitaires en Haïti et à l'étranger.",
            "Développement de projets d'impact communautaire (ESLP).",
            "Mentorat d'élite et opportunités de réseautage."
        ]
    },
    benevolat: {
        icon: "🤝",
        title: "Bénévolat & Engagement Citoyen",
        intro: "Forger son leadership par l'action.",
        description: "Le bénévolat permet d’aider les autres et de faire une différence dans sa communauté. Il aide à développer des qualités comme le sens des responsabilités, le travail en équipe et l'empathie, tout en construisant un CV solide.",
        target: "Tous les jeunes engagés et disponibles",
        timeline: "Tout au long de l'année",
        detailsTitle: "Organisations qui recrutent en Haïti :",
        details: [
            "<strong>IDEJEN</strong> : Œuvre depuis plus de 20 ans pour la formation, l'entrepreneuriat et l'insertion professionnelle des jeunes.",
            "<strong>EVEIL_Haïti</strong> : Organise des ateliers de leadership, d'éducation financière, de citoyenneté et des actions éco-citoyennes.",
            "<strong>Connect Jeune</strong> : Rassemble les jeunes autour du développement durable et de l'engagement citoyen.",
            "<strong>Youth Foundation Haiti</strong> : Intervient auprès des enfants vulnérables (éducation, alimentation, soutien psychosocial).",
            "<strong>OVDDHMO</strong> : Projets humanitaires, santé et éducation (Possibilité d'obtenir un certificat et une lettre de recommandation)."
        ]
    },
    bourse: {
        icon: "🎓",
        title: "Bourses d'Étude (Licence / Undergraduate)",
        intro: "Financer vos rêves académiques.",
        description: "Il existe de multiples dispositifs internationaux pour financer vos études supérieures après le secondaire. Voici les opportunités majeures par destination :",
        target: "Élèves en fin d'études secondaires avec un excellent dossier",
        timeline: "Variable (Généralement entre septembre et janvier)",
        detailsTitle: "Options de bourses par pays :",
        details: [
            "<strong>🇨🇦 Canada :</strong> Bourse <i>Lester B. Pearson</i> (U de Toronto - couverture complète), <i>UBC International Scholars Program</i>, et bourses d'entrée standards.",
            "<strong>🇬🇧 Royaume-Uni :</strong> Bourses d'excellence partielles ou réductions sur les frais selon les universités.",
            "<strong>🇫🇷 France :</strong> Bourses d'excellence des établissements et aides via les programmes Campus France.",
            "<strong>🇰🇷 Corée du Sud :</strong> <i>Global Korea Scholarship (GKS)</i> - Couvre frais, avion, allocation et cours de langue.",
            "<strong>🇯🇵 Japon :</strong> Bourse <i>MEXT</i> - Couvre les études, les allocations et le voyage.",
            "<strong>🇭🇺 Hongrie :</strong> Bourse <i>Stipendium Hungaricum</i> - Couvre la scolarité, le logement et offre une allocation."
        ]
    },
    mun: {
        icon: "🇺🇳",
        title: "Model United Nations (MUN)",
        intro: "Dans les coulisses de la diplomatie.",
        description: "Le Model United Nations est une activité parascolaire mondiale où les élèves jouent le rôle de diplomates représentant différents pays lors d'une simulation des Nations Unies.",
        target: "Écoliers et lycéens passionnés de géopolitique",
        timeline: "Préparations annuelles",
        detailsTitle: "Conférences prestigieuses & Compétences développées :",
        details: [
            "<strong>Conférences majeures :</strong> Harvard Model United Nations (HMUN), Yale Model United Nations (YMUN), National High School Model United Nations.",
            "Maîtrise de la prise de parole en public et de la négociation.",
            "Compétences poussées en recherche, analyse et rédaction de textes officiels.",
            "Développement du leadership et collaboration interculturelle."
        ]
    },
    uwc: {
        icon: "🌍",
        title: "United World College (UWC)",
        intro: "Éducation globale et transformative.",
        description: "L'UWC est un réseau mondial d'écoles qui unissent les jeunes de tous horizons. Il vous permet de terminer vos études à l'étranger et d'obtenir un <strong>Baccalauréat International</strong> grâce à une éducation axée sur la paix, la pratique et l'échange culturel.",
        target: "Élèves du Secondaire 2 et du Secondaire 3 (Ages 15-18 ans)",
        timeline: "Dépôt des candidatures : Novembre à Décembre",
        detailsTitle: "Processus de sélection rigoureux :",
        details: [
            "Étape 1 : Analyse approfondie du dossier scolaire et engagement communautaire.",
            "Étape 2 : Examens écrits.",
            "Étape 3 : Entrevue de groupe et entrevue individuelle."
        ]
    },
    international: {
        icon: "🏆",
        title: "Concours Internationaux",
        intro: "Brillez sur la scène mondiale.",
        description: "Olympiades, compétitions scientifiques ou artistiques... Représentez Haïti et montrez votre excellence à l'échelle internationale.",
        target: "Lycéens de niveau avancé selon la discipline",
        timeline: "Tout au long de l'année",
        detailsTitle: "Compétitions recommandées :",
        details: [
            "<strong>🌱 Environnement / Sciences :</strong> <i>Regeneron ISEF</i> (Grand concours mondial), <i>Ocean Awareness Contest</i> (Art, écriture autour du climat), <i>Science in School Contest</i>.",
            "<strong>💼 Business / Entrepreneuriat :</strong> <i>Blue Ocean Competition</i> (Pitch en ligne), <i>GYEC</i> (Solutions globales en équipe), <i>AI Entrepreneurship Contest (AIEC)</i>.",
            "<strong>✍️ Écriture & Réflexion :</strong> <i>John Locke Institute Essay Competition</i> (Philosophie, économie, histoire), <i>Harvard International Review Contest</i>, <i>Scholastic Art & Writing Awards</i>.",
            "<strong>🚀 Innovation :</strong> <i>The Conrad Challenge</i> (Résolution de problèmes mondiaux), <i>Diamond Challenge</i> (Entrepreneuriat)."
        ]
    }
};

// Fonction pour ouvrir les détails d'une opportunité
function openOpportunity(id) {
    const data = opportunitiesData[id];
    if (!data) return;

    const detailContent = document.getElementById('detail-content');
    
    // Génération dynamique de la liste des détails
    const listItems = data.details.map(item => `<li class="flex items-start gap-3 text-gray-600 mb-2"><span class="text-blue-500 mt-1">✔</span><span>${item}</span></li>`).join('');

    // Badge thématique supplémentaire (ex: Thème OPC)
    const extraBadgeHtml = data.extraBadge ? `<span class="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">${data.extraBadge}</span>` : '';

    // Injection de la structure propre dans le composant détail
    detailContent.innerHTML = `
        <div class="flex items-center gap-4 mb-6">
            <span class="text-5xl">${data.icon}</span>
            <div>
                <h3 class="text-2xl md:text-3xl font-black text-slate-900">${data.title}</h3>
                <p class="text-blue-600 font-medium">${data.intro}</p>
            </div>
        </div>
        
        ${extraBadgeHtml}

        <div class="grid md:grid-cols-3 gap-8 mt-6">
            <div class="md:col-span-2 space-y-6">
                <div>
                    <h4 class="font-bold text-slate-800 mb-2">Description</h4>
                    <p class="text-gray-600 leading-relaxed">${data.description}</p>
                </div>
                <div>
                    <h4 class="font-bold text-slate-800 mb-3">${data.detailsTitle}</h4>
                    <ul class="space-y-2">${listItems}</ul>
                </div>
            </div>
            
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-fit space-y-4">
                <div>
                    <span class="block text-xs font-bold uppercase text-gray-400 tracking-wider">Qui est concerné ?</span>
                    <p class="text-sm font-semibold text-slate-700 mt-1">${data.target}</p>
                </div>
                <hr class="border-slate-200">
                <div>
                    <span class="block text-xs font-bold uppercase text-gray-400 tracking-wider">Période / Date Limite</span>
                    <p class="text-sm font-semibold text-amber-600 mt-1 flex items-center gap-1">📅 ${data.timeline}</p>
                </div>
            </div>
        </div>
    `;

    // Gestion de l'affichage (Masque la grille, affiche le détail)
    document.getElementById('opps-list-view').classList.add('hidden');
    document.getElementById('opps-detail-view').classList.remove('hidden');
    
    // Scroll fluide vers le haut de la section pour le confort utilisateur
    document.getElementById('opportunities').scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour revenir à la vue en grille
function closeOpportunity() {
    document.getElementById('opps-detail-view').classList.add('hidden');
    document.getElementById('opps-list-view').classList.remove('hidden');
}
// ==========================================
//  4bis. FILTRES + ANIMATION DES CARTES OPPORTUNITIES
// ==========================================
function filterOpps(cat) {
    const cards = document.querySelectorAll('.opp-card-dyn');
    const filters = document.querySelectorAll('.opp-filter');

    filters.forEach(f => f.classList.remove('opp-filter--active'));
    const active = document.querySelector('.opp-filter[data-cat="' + cat + '"]');
    if (active) active.classList.add('opp-filter--active');

    cards.forEach(card => {
        const cardCat = card.dataset.cat;
        if (cat === 'all' || cardCat === cat) {
            card.classList.remove('filtered-out');
        } else {
            card.classList.add('filtered-out');
        }
    });
}

function initOppsAnimations() {
    const cards = document.querySelectorAll('.opp-card-dyn');
    if (!cards.length) return;

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const index = Array.from(cards).indexOf(card);
                    setTimeout(() => card.classList.add('in'), index * 80);
                    io.unobserve(card);
                }
            });
        }, { threshold: 0.15 });
        cards.forEach(c => io.observe(c));
    } else {
        cards.forEach(c => c.classList.add('in'));
    }
}
// ==========================================
//  2. DONNÉES DU MAGAZINE
// ==========================================
const magazineData = {
    karina: {
        name: 'Karina',
        prenom: '',
        annee: 'Secondaire 4',
        photo: 'images/karina18.jpeg',
        photos: ['images/karina18.jpeg', 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80', 'images/Medcriture.jpeg', 'https://images.unsplash.com/photo-1457139621581-67576207ac79?auto=format&fit=crop&w=400&q=80'],
        experience: "Élève de Secondaire 4, elle a participé de nombreuses fois à des concours d'écriture mais elle est la 3ème gagnante du concours d'écriture Medcriture. Elle nous explique qu'elle a suivi l'exemple de son aînée Kate qui l'année antérieure avait participé à ce concours et avait décroché la 2ème place. Passionnée par les mots depuis l'âge de 11 ans, Karina continue d'inspirer ses camarades par sa persévérance et son talent exceptionnel."
    },
    esperancia: {
        name: 'Esperancia',
        prenom: '',
        annee: 'Chant & Musique',
        photo: 'images/Esperancia.jpeg',
        photos: ['images/Esperancia.jpeg', 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=400&q=80', 'https://images.unsplash.com/photo-1493225457124-a3ebf183729f?auto=format&fit=crop&w=400&q=80', 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=400&q=80'],
        experience: "Dotée d'une voix exceptionnelle, Esperancia a brillé lors d'un concours de chant en décrochant la 3ème place. Sa passion pour la musique et son talent naturel continuent de l'inspirer dans son parcours artistique. Elle inspire ses camarades par sa détermination et son amour pour la musique. Son engagement envers l'excellence musicale en fait une source d'inspiration pour toute la communauté."
    },
    elga: {
        name: 'Elga',
        prenom: 'Auguste J.',
        annee: 'Poésie & Engagement',
        photo: 'images/Elga2.jpeg.png',
        photos: ['images/Elga2.jpeg.png'],
        experience: "À l'école depuis petite, Elga s'engage activement au collège. Tout le monde la connaît car elle est toujours prête à aider. Coordinatrice et rédactrice passionnée, elle donne vie aux événements à travers ses mots et crée des récits empreints d'émotion. Elle a reçu une carte cadeau offerte par la promotion 1982 pour son excellence en poésie. Son dévouement envers la communauté scolaire et son talent littéraire en font une figure centrale du collège."
    },
    yvenie: {
        name: 'Yvenie',
        prenom: '',
        annee: 'Excellence Académique',
        photo: 'https://images.unsplash.com/photo-1525926477800-7a3be5800fcb?auto=format&fit=crop&w=400&q=80',
        photos: ['https://images.unsplash.com/photo-1525926477800-7a3be5800fcb?auto=format&fit=crop&w=400&q=80'],
        experience: "Elle est venue au collège à la 7ème année et elle a depuis toujours eu de bon rendement scolaire. À l'école, on valorise l'excellence, c'est pour cela qu'elle a reçu la bourse complète offerte par la promotion 1995. Son parcours exemplaire montre que la persévérance et le travail acharné mènent toujours à la réussite. Elle est un modèle d'excellence académique pour ses camarades."
    },
    exposcience: {
        name: 'Les Innovatrices',
        prenom: 'Promotion Armoni',
        annee: 'Exposcience',
        photo: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80',
        photos: ['https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80', 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=400&q=80', 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80'],
        experience: "<strong>Qu'est-ce qui vous a poussé à y participer?</strong><br>La première fois (en 2022), c'était purement pour l'expérience mais la seconde (en 2023), c'était par égo si je peux le dire ainsi. J'avais perdu et je voulais corriger cela.<br><br><strong>Quels sont les obstacles que vous avez rencontré?</strong><br>Durant les deux éditions, on a eu un problème de support assez terrible. On s'est investi nous-mêmes, on a fait nos propres recherches donc en terme d'accompagnement, c'était vraiment pas top. Les autres problèmes rencontrés étaient internes à l'équipe (entre les exams officiels et la sœur qui nous poussait à avoir 8, on était assez fatiguée et lassée à un moment donné). Fun fact, la veille de la compétition, on avait abandonné! J'ai dit à la sœur qu'on était pas prête et elle avait appelé les organisateurs pour leur faire savoir que notre équipe se retirait de la compétition. Puis, plus tard ce jour là, j'ai reçu un appel de Mme Vital qui nous a dit que tout était déjà prêt pour recevoir l'équipe donc mieux vaut quand même y aller. J'ai accepté puis j'ai passé la nuit à préparer l'app!<br><br><strong>Quel conseil donneriez-vous à vos petites sœurs?</strong><br>Très franchement, le seul conseil réel que je peux vous donner c'est de ne compter que sur vous et votre équipe. Et également de vous préparez intelligemment avant tout. Après ma défaite en 2022, j'avais analysé les projets gagnants, les patterns du concours ainsi que les domaines prisées pour mettre toutes les chances de notre côté en 2023. C'est la raison pour laquelle j'étais partie sur un projet environnemental."
    },
    promotion1995: {
        name: 'Promotion 1995',
        prenom: 'Mérites Exceptionnels',
        annee: '1995',
        photo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80',
        photos: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80'],
        experience: "C'est la seule promotion qui a été aussi généreuse et qui aide toujours leurs petites sœurs. Malgré les moments difficiles, elles sont toujours là et prennent de nos nouvelles. Elles offrent toujours des bourses : une bourse complète à une fille du secondaire 4 et une demi-bourse à une fille de 6ème année, et elles renouvellent toujours. Elles ont aussi offert une carte cadeau et durant l'année, elles ont fait don d'une imprimante 3D. Leur engagement envers les nouvelles générations est exemplaire et inspire chacun d'entre nous."
    }
};

// ==========================================
//  3. NAVIGATION ENTRE SECTIONS
// ==========================================
function showSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });

    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Mettre à jour les boutons de navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('nav-active');
    });

    // Activer le bon bouton de nav
    const navMap = {
        'accueil': 'Accueil',
        'stories': 'Stories',
        'orientation': 'Orientation',
        'opportunities': 'Opportunities',
        'improving': 'Improving'
    };

    const navText = navMap[sectionId];
    if (navText) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            if (btn.textContent.toLowerCase().includes(navText.toLowerCase())) {
                btn.classList.add('nav-active');
            }
        });
    }

    window.scrollTo(0, 0);

    if (sectionId === 'stories') {
        setTimeout(triggerStoryAnimations, 100);
    }
        if (sectionId === 'opportunities') {
        setTimeout(initOppsAnimations, 150);
    }
}

function triggerStoryAnimations() {
    const title = document.getElementById('stories-title');
    const tagline = document.getElementById('stories-tagline');

    // Titre qui tombe du ciel
    if (title) {
        title.classList.remove('opacity-0');
        title.classList.add('title-fall');
    }

    // Catchphrase : reveal mot par mot (gauche -> droite)
    if (tagline && tagline.dataset.text) {
        const text = tagline.dataset.text;
        tagline.innerHTML = '';
        const words = text.split(' ');
        words.forEach((word, i) => {
            const span = document.createElement('span');
            span.className = 'catch-word';
            span.textContent = word;
            tagline.appendChild(span);
            tagline.appendChild(document.createTextNode('\u00A0'));
            setTimeout(() => span.classList.add('visible'), 600 + i * 35);
        });
    }

    // Animate CTA section
    const ctaText = document.getElementById('cta-text');
    const ctaSubtext = document.getElementById('cta-subtext');
    const ctaButton = document.getElementById('cta-button');

    if (ctaText) { setTimeout(() => { ctaText.style.animation = 'fadeInUp 0.8s ease-out forwards'; }, 2600); }
    if (ctaSubtext) { setTimeout(() => { ctaSubtext.style.animation = 'fadeInUp 0.8s ease-out forwards'; }, 2800); }
    if (ctaButton) { setTimeout(() => { ctaButton.style.animation = 'fadeInUp 0.8s ease-out forwards'; }, 3000); }

    // Initialiser les cartes mystere (pile)
    initMysteryStack();
}

// ==========================================
//  4. SYSTÈME D'OPPORTUNITÉS
// ==========================================
function openOpportunity(key) {
    console.log("Clic détecté sur l'opportunité :", key);

    const data = opportunitiesData[key];
    if (!data) {
        alert("Erreur : Impossible de trouver les données pour la clé '" + key + "'");
        return;
    }

    const detailContent = document.getElementById('detail-content');
    const listView = document.getElementById('opps-list-view');
    const detailView = document.getElementById('opps-detail-view');

    if (!detailContent || !listView || !detailView) {
        console.error("Erreur HTML : Conteneurs d'opportunités introuvables !");
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
        <button onclick="closeOpportunity()" class="mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
            ← Retour à la liste
        </button>
    `;

    listView.classList.add('hidden');
    detailView.classList.remove('hidden');
    listView.style.display = 'none';
    detailView.style.display = 'block';

    window.scrollTo(0, 0);
}

function closeOpportunity() {
    const listView = document.getElementById('opps-list-view');
    const detailView = document.getElementById('opps-detail-view');

    if (listView && detailView) {
        detailView.classList.add('hidden');
        listView.classList.remove('hidden');
        detailView.style.display = 'none';
        listView.style.display = 'block';
    }
}

// ==========================================
//  5. SYSTÈME MAGAZINE / MODAL
// ==========================================
function openMagazine(person) {
    const data = magazineData[person];
    if (!data) return;

    const modal = document.getElementById('magazine-modal');
    const body = document.getElementById('magazine-body');

    if (!modal || !body) return;

    let photosHtml = '';
    if (data.photos && data.photos.length > 0) {
        photosHtml = '<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">';
        data.photos.forEach(photo => {
            photosHtml += `<img src="${photo}" class="w-full h-40 object-cover rounded-lg shadow-md" alt="${data.name}" onerror="this.src='https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80'">`;
        });
        photosHtml += '</div>';
    }

    body.innerHTML = `
        <div class="text-center mb-8">
            <img src="${data.photo}" class="w-48 h-48 mx-auto rounded-full object-cover border-4 border-yellow-500 shadow-xl mb-4" alt="${data.name}" onerror="this.src='https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80'">
            <h2 class="text-4xl font-bold text-blue-900 font-serif">${data.name} ${data.prenom}</h2>
            <p class="text-xl text-yellow-600 font-semibold mt-2">${data.annee}</p>
        </div>
        ${photosHtml}
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-600">
            <h3 class="text-2xl font-bold text-blue-900 mb-4 font-serif">Mon Expérience</h3>
            <p class="text-gray-700 leading-relaxed text-lg">${data.experience}</p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMagazine() {
    const modal = document.getElementById('magazine-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ==========================================
//  5bis. CARTES MYSTERE : Pile -> Eparpillement -> Grille
// ==========================================
const MysteryStack = {
    phase: 'stack',
    revealed: new Set(),
    scatterPos: [],
    containerW: 0,
    layout: { cols: 3, cardW: 220, cardH: 330, rows: 2, startX: 0, gridH: 0, stackH: 420 },
    cards: [],
    GAP: 24,

    init() {
        const self = this;
        this.stage = document.getElementById('mystery-stage');
        this.hint = document.getElementById('mystery-hint');
        this.scatterBtn = document.getElementById('scatter-btn');
        this.resetBtn = document.getElementById('reset-btn');
        if (!this.stage) return;

        this.cards = Array.from(document.querySelectorAll('.mcard')).map((el, i) => ({
            el, inner: el.querySelector('.mystery-card'), index: i,
            person: el.dataset.person
        }));

        this.measure();
        this.positionAll();

        if (this.scatterBtn) this.scatterBtn.addEventListener('click', () => self.scatter());
        if (this.resetBtn) this.resetBtn.addEventListener('click', () => self.reset());

        this.cards.forEach(c => {
            c.el.addEventListener('click', function () { self.onCardClick(c); });
        });

        window.addEventListener('resize', () => {
            self.measure();
            self.positionAll();
        });
    },

    measure() {
        if (!this.stage) return;
        this.containerW = this.stage.clientWidth;
        const n = this.cards.length;
        const cols = this.containerW >= 760 ? 3 : this.containerW >= 480 ? 2 : 1;
        const cardW = Math.max(170, Math.min(260, (this.containerW - this.GAP * (cols - 1)) / cols));
        const cardH = Math.round(cardW * 1.5);
        const rows = Math.ceil(n / cols);
        const totalGridW = cols * cardW + (cols - 1) * this.GAP;
        const startX = Math.max(0, (this.containerW - totalGridW) / 2);
        const gridH = rows * cardH + (rows - 1) * this.GAP;
        const stackH = cardH + 90;
        this.layout = { cols, cardW, cardH, rows, startX, gridH, stackH };
        this.cards.forEach(c => {
            c.el.style.width = cardW + 'px';
            c.el.style.height = cardH + 'px';
        });
    },

    stackPos(i) {
        const n = this.cards.length;
        const l = this.layout;
        const cx = (this.containerW - l.cardW) / 2;
        const cy = (l.stackH - l.cardH) / 2;
        const offset = i - (n - 1) / 2;
        return { x: cx + offset * 1.4, y: cy + offset * 2.2, rotate: offset * 4, scale: 1 };
    },

    gridPos(i) {
        const l = this.layout;
        const col = i % l.cols;
        const row = Math.floor(i / l.cols);
        return { x: l.startX + col * (l.cardW + this.GAP), y: row * (l.cardH + this.GAP), rotate: 0, scale: 1 };
    },

    target(i) {
        if (this.phase === 'stack') return this.stackPos(i);
        if (this.phase === 'scatter') {
            const s = this.scatterPos[i] || this.stackPos(i);
            return { x: s.x, y: s.y, rotate: s.rotate, scale: 0.94 };
        }
        return this.gridPos(i);
    },

    positionAll() {
        const self = this;
        this.cards.forEach((c, i) => {
            const t = self.target(i);
            c.el.style.transform = 'translate(' + t.x + 'px,' + t.y + 'px) rotate(' + t.rotate + 'deg) scale(' + t.scale + ')';
            c.el.style.zIndex = self.phase === 'stack' ? String(self.cards.length - i) : '1';
        });
        const h = this.phase === 'stack' ? this.layout.stackH : this.layout.gridH;
        this.stage.style.height = h + 'px';
        this.stage.classList.toggle('phase-grid', this.phase === 'grid');
    },

    scatter() {
        if (this.phase !== 'stack') return;
        const self = this;
        const l = this.layout;
        const maxY = Math.max(l.gridH, l.cardH * 2);
        this.scatterPos = this.cards.map(() => ({
            x: Math.random() * Math.max(0, this.containerW - l.cardW),
            y: Math.random() * Math.max(0, maxY - l.cardH),
            rotate: (Math.random() - 0.5) * 60,
        }));
        this.phase = 'scatter';
        if (this.scatterBtn) this.scatterBtn.hidden = true;
        this.cards.forEach(c => { c.el.style.transitionDuration = '0.5s'; });
        this.positionAll();
        setTimeout(() => {
            self.cards.forEach(c => { c.el.style.transitionDuration = '0.7s'; });
            self.phase = 'grid';
            self.positionAll();
            self.updateHint();
            if (self.resetBtn) self.resetBtn.hidden = false;
        }, 600);
    },

    onCardClick(c) {
        if (this.phase !== 'grid') return;
        if (this.revealed.has(c.person)) {
            openMagazine(c.person);
        } else {
            this.revealed.add(c.person);
            if (c.inner) c.inner.classList.add('revealed');
            this.updateHint();
        }
    },

    reset() {
        this.phase = 'stack';
        this.revealed.clear();
        this.cards.forEach(c => { if (c.inner) c.inner.classList.remove('revealed'); });
        this.scatterPos = [];
        if (this.scatterBtn) this.scatterBtn.hidden = false;
        if (this.resetBtn) this.resetBtn.hidden = true;
        this.positionAll();
        this.updateHint();
    },

    updateHint() {
        if (!this.hint) return;
        if (this.phase === 'stack') {
            this.hint.innerHTML = 'Une pile de <strong>6 cartes mystere</strong> se cache au centre. Cliquez dessus pour les eparpiller.';
        } else {
            this.hint.innerHTML = '<strong>' + this.revealed.size + ' / 6</strong> cartes revelees - cliquez une carte face cachee pour la retourner, ou une carte revelee pour lire son magazine.';
        }
    },
};

function initMysteryStack() {
    MysteryStack.init();
}

//  6. INITIALISATION AU CHARGEMENT
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM prêt - Initialisation des modules");

    // --- 6.1 Mystery Cards : la logique pile -> eparpillement -> grille est dans initMysteryStack() ---

    // --- 6.2 Close modal on outside click ---
    const magazineModal = document.getElementById('magazine-modal');
    if (magazineModal) {
        magazineModal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeMagazine();
            }
        });
    }

    // --- 6.3 Intersection Observer for animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.mystery-card').forEach(card => {
        observer.observe(card);
    });

    // --- 6.4 Status radio button handler ---
    const statusCurrent = document.getElementById('status-current');
    const allStatusRadios = document.querySelectorAll('input[name="statut"]');
    const conditionalFields = document.getElementById('conditional-fields');
    const classInput = document.getElementById('student-class');
    const emailInput = document.getElementById('student-email');

    if (allStatusRadios.length > 0) {
        allStatusRadios.forEach(radio => {
            radio.addEventListener('change', function () {
                if (statusCurrent && statusCurrent.checked) {
                    if (conditionalFields) {
                        conditionalFields.classList.remove('hidden');
                        conditionalFields.style.display = 'grid';
                    }
                    if (classInput) classInput.required = true;
                    if (emailInput) emailInput.required = true;
                } else {
                    if (conditionalFields) {
                        conditionalFields.classList.add('hidden');
                        conditionalFields.style.display = 'none';
                    }
                    if (classInput) { classInput.required = false; classInput.value = ''; }
                    if (emailInput) { emailInput.required = false; emailInput.value = ''; }
                }
            });
        });
    }
});
