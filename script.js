document.addEventListener("DOMContentLoaded", function() {
    const curtain = document.getElementById('curtain-container');
    const openBtn = document.getElementById('open-btn');
    const feedbackForm = document.getElementById('feedback-form');
    const commentsDisplay = document.getElementById('comments-display');

    // 1. GESTION DU RIDEAU (SessionStorage)
    if (sessionStorage.getItem('curtainOpened') === 'true') {
        if (curtain) curtain.style.display = 'none';
    }

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            curtain.classList.add('opened');
            sessionStorage.setItem('curtainOpened', 'true');
            setTimeout(() => { curtain.style.display = 'none'; }, 1500);
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
            "homophobe", "haine", "violence", "terroriste","fuck","bitch","massisi","madivin"
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