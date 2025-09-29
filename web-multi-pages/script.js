// Injection dynamique des textes depuis texts.js et gestion des redirections
window.addEventListener('DOMContentLoaded', function() {
    // Détecte la page courante
    let page = 'index';
    const path = window.location.pathname;
    if (path.includes('/pages/page1.html')) page = 'page1';
    else if (path.includes('/pages/page2.html')) page = 'page2';
    else if (path.includes('/pages/page3.html')) page = 'page3';
    else if (path.includes('/pages/page4.html')) page = 'page4';
    else if (path.includes('/template-pages/template-page1.html')) page = 'template_page1';
    else if (path.includes('/pages/template-pages/template-page2.html')) page = 'template_page2';
    else if (path.includes('/pages/template-pages/template-page3.html')) page = 'template_page3';
    else if (path.includes('/pages/template-pages/template-page4.html')) page = 'template_page4';

    // Récupère les textes
    const texts = TEXTS[page];
    // Titre de la page
    if (texts && texts.title) document.title = texts.title;
    // H1
    const h1 = document.getElementById('main-title');
    if (h1 && texts.h1) h1.textContent = texts.h1;
    // Sous-titre sur l'accueil
    if (page === 'index') {
        const subtitle = document.getElementById('subtitle');
        if (subtitle && texts.subtitle) {
            subtitle.textContent = texts.subtitle;
        }
        // Intro fieldset
        const introFieldset = document.querySelector('.intro-fieldset');
        if (introFieldset && typeof TEXTS !== 'undefined' && TEXTS.index && TEXTS.index.fieldsetText) {
            const p = document.createElement('p');
            let i = 0;
            function typeWriter() {
                if (i < TEXTS.index.fieldsetText.length) {
                    p.textContent += TEXTS.index.fieldsetText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 60); // vitesse de frappe
                }
            }
            typeWriter();
            introFieldset.appendChild(p);
        }
    }
    // Grille de tuiles sur l'accueil
    if (page === 'index' && texts.nav) {
        const grid = document.getElementById('tiles-grid');
        if (grid) {
            grid.innerHTML = '';
            texts.nav.forEach(item => {
                const a = document.createElement('a');
                a.href = item.href;
                a.className = 'tile-link';
                // Ajout de l'icône
                if (item.icon) {
                    const icon = document.createElement('i');
                    icon.className = item.icon;
                    icon.style.marginRight = '12px';
                    a.appendChild(icon);
                }
                const span = document.createElement('span');
                span.textContent = item.label;
                a.appendChild(span);
                grid.appendChild(a);
            });
        }
    }
    // Bouton retour accueil sur toutes les pages sauf index
    if (page !== 'index') {
        const btn = document.getElementById('goToHome');
        if (btn) {
            // Ne pas mettre de texte, juste l'icône
            btn.title = texts.button;
            btn.addEventListener('click', function() {
                // Redirection absolue depuis n'importe quel sous-dossier
                console.log(window.location.pathname)
                window.location.href = window.location.origin + window.location.pathname.replace(/\/pages\/.*/, '/index.html');
            });
        }
    }
});