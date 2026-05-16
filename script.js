document.addEventListener("DOMContentLoaded", function() {
    localStorage.removeItem('yearbookMsgs'); // Supprime TOUS les anciens messages
    const curtain = document.getElementById('curtain-container');
    const openBtn = document.getElementById('open-btn');
    const feedbackForm = document.getElementById('feedback-form');
    const commentsDisplay = document.getElementById('comments-display');

    // GESTION DU RIDEAU

if (sessionStorage.getItem('curtainOpened') === 'true') {
    if (curtain) curtain.style.display = 'none';
}

if (openBtn) {

    openBtn.addEventListener('click', () => {

        // ouverture
        curtain.classList.add('opened');

        // disparition du texte
        const content = document.querySelector('.curtain-content');

        if(content){
            content.style.opacity = "0";
        }

        // sauvegarde session
        sessionStorage.setItem('curtainOpened', 'true');

        // suppression après animation
        setTimeout(() => {
            curtain.style.display = 'none';
        }, 2200);

    });

}
    // 2. GESTION DES COMMENTAIRES (LocalStorage)
    function loadComments() {
        if (!commentsDisplay) return;
        const comments = JSON.parse(localStorage.getItem('yearbookMsgs')) || [];
        commentsDisplay.innerHTML = comments.map(c => `
            <div class="comment-card">
                <strong>${c.name}</strong> <small>(${c.date})</small>
                <p>${c.text}</p>
            </div>
        `).join('');
    }

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('user-name').value;
            const text = document.getElementById('user-message').value;
            const isAnon = document.getElementById('is-anonymous').checked;

            const bannedWords = [
            "idiot", "stupide", "con", "crétin", "imbécile", 
            "nul", "débile", "abruti", "sale", "merde",
            "pute", "salope", "connard", "bête", "raciste", 
            "homophobe", "haine", "violence", "terroriste","fuck","bitch","massisi","madivin","kaka"
        ];

for (let word of bannedWords) {
    if (text.toLowerCase().includes(word)) {
        alert("Votre message contient un mot interdit et ne peut pas être publié.");
        return;
    }
}




            const newMsg = {
                name: (isAnon || name === "") ? "Anonyme ✨" : name,
                text: text,
                date: new Date().toLocaleDateString()
            };

            const comments = JSON.parse(localStorage.getItem('yearbookMsgs')) || [];
            comments.push(newMsg);
            localStorage.setItem('yearbookMsgs', JSON.stringify(comments));
            feedbackForm.reset();
            loadComments();
        });
    }
    loadComments();
});
