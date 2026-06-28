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

         function showSection(sectionId) {
        document.querySelectorAll('.section-content').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('nav-active');
            if(btn.textContent.toLowerCase().includes(sectionId.substring(0,4))) {
                btn.classList.add('nav-active');
            }
        });
        window.scrollTo(0, 0);
        
        if (sectionId === 'stories') {
            setTimeout(triggerStoryAnimations, 100);
        }
    }
    
    function triggerStoryAnimations() {
        const title = document.getElementById('stories-title');
        const tagline = document.getElementById('stories-tagline');
        
        if (title) {
            title.style.animation = 'fadeInUp 1s ease-out forwards';
        }
        if (tagline) {
            setTimeout(() => {
                tagline.style.animation = 'slideInFromLeft 1s ease-out forwards';
            }, 500);
        }

        // Animate CTA section
        const ctaText = document.getElementById('cta-text');
        const ctaSubtext = document.getElementById('cta-subtext');
        const ctaButton = document.getElementById('cta-button');
        
        if (ctaText) {
            setTimeout(() => {
                ctaText.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }, 2000);
        }
        if (ctaSubtext) {
            setTimeout(() => {
                ctaSubtext.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }, 2200);
        }
        if (ctaButton) {
            setTimeout(() => {
                ctaButton.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }, 2400);
        }
    }
    
    // Mystery Card Click Handlers
    document.querySelectorAll('.mystery-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (this.classList.contains('revealed')) {
                // Second click: open magazine
                const person = this.dataset.person;
                openMagazine(person);
            } else {
                // First click: reveal profile
                this.classList.add('revealed');
            }
        });
    });

    // Magazine Modal Data
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

    function openMagazine(person) {
        const data = magazineData[person];
        if (!data) return;
        
        const modal = document.getElementById('magazine-modal');
        const body = document.getElementById('magazine-body');
        
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
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close modal on outside click
    document.getElementById('magazine-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeMagazine();
        }
    });

    // Intersection Observer for animations
    document.addEventListener('DOMContentLoaded', function() {
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
    });

    // Status radio button handler
    document.addEventListener("DOMContentLoaded", function() {
        const statusCurrent = document.getElementById('status-current');
        const allStatusRadios = document.querySelectorAll('input[name="statut"]');
        const conditionalFields = document.getElementById('conditional-fields');
        const classInput = document.getElementById('student-class');
        const emailInput = document.getElementById('student-email');

        if (allStatusRadios.length > 0) {
            allStatusRadios.forEach(radio => {
                radio.addEventListener('change', function() {
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
    }


     function showSection(sectionId) {
        document.querySelectorAll('.section-content').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('nav-active');
            if(btn.textContent.toLowerCase().includes(sectionId.substring(0,4))) {
                btn.classList.add('nav-active');
            }
        });
        window.scrollTo(0, 0);
        
        if (sectionId === 'stories') {
            setTimeout(triggerStoryAnimations, 100);
        }
    }
    
    function triggerStoryAnimations() {
        const title = document.getElementById('stories-title');
        const tagline = document.getElementById('stories-tagline');
        
        if (title) {
            title.style.animation = 'fadeInUp 1s ease-out forwards';
        }
        if (tagline) {
            setTimeout(() => {
                tagline.style.animation = 'slideInFromLeft 1s ease-out forwards';
            }, 500);
        }

        // Animate CTA section
        const ctaText = document.getElementById('cta-text');
        const ctaSubtext = document.getElementById('cta-subtext');
        const ctaButton = document.getElementById('cta-button');
        
        if (ctaText) {
            setTimeout(() => {
                ctaText.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }, 2000);
        }
        if (ctaSubtext) {
            setTimeout(() => {
                ctaSubtext.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }, 2200);
        }
        if (ctaButton) {
            setTimeout(() => {
                ctaButton.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }, 2400);
        }
    }
    
    // Mystery Card Click Handlers
    document.querySelectorAll('.mystery-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (this.classList.contains('revealed')) {
                // Second click: open magazine
                const person = this.dataset.person;
                openMagazine(person);
            } else {
                // First click: reveal profile
                this.classList.add('revealed');
            }
        });
    });

    // Magazine Modal Data
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

    function openMagazine(person) {
        const data = magazineData[person];
        if (!data) return;
        
        const modal = document.getElementById('magazine-modal');
        const body = document.getElementById('magazine-body');
        
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
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close modal on outside click
    document.getElementById('magazine-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeMagazine();
        }
    });

    // Intersection Observer for animations
    document.addEventListener('DOMContentLoaded', function() {
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
    });

    // Status radio button handler
    document.addEventListener("DOMContentLoaded", function() {
        const statusCurrent = document.getElementById('status-current');
        const allStatusRadios = document.querySelectorAll('input[name="statut"]');
        const conditionalFields = document.getElementById('conditional-fields');
        const classInput = document.getElementById('student-class');
        const emailInput = document.getElementById('student-email');

        if (allStatusRadios.length > 0) {
            allStatusRadios.forEach(radio => {
                radio.addEventListener('change', function() {
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
};
