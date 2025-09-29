// Tous les textes affichés sur les pages HTML
const TEXTS = {
    index: {
        title: "Accueil",
        h1: "Bienvenue sur la page d'accueil",
        subtitle: "Bonjour, sélectionner une action pour commencer:",
        nav: [
            { href: "pages/page1.html", label: "Créer à partir de zéro", icon: "fa-solid fa-file-circle-plus" },
            { href: "pages/page2.html", label: "Créer à partir d'un template", icon: "fa-solid fa-file-lines" },
            { href: "pages/page3.html", label: "Modifier un fichier", icon: "fa-solid fa-file-pen" },
            { href: "pages/page4.html", label: "Dupliquer un fichier", icon: "fa-solid fa-copy" }
        ]
    },
    page1: {
        title: "Page 1",
        h1: "Page 1",
        button: "Retour à l'accueil",
        fieldsetText: "Ceci est un texte inséré dynamiquement dans le fieldset de la page 1."

    },
    page2: {
        title: "Page 2",
        h1: "Page 2",
        button: "Retour à l'accueil",
        fieldsetText: "Vous êtes dans la partie \"Création à partir d'un template\".Choisissez un template parmi les options ci-dessous :",
        nav: [
            { href: "template-pages/template-page1.html", label: "Template sans sauvegarde", icon: "fa-solid fa-rocket" },
            { href: "template-pages/template-page2.html", label: "Template avec sauvegarde", icon: "fa-solid fa-bomb" },
            { href: "template-pages/template-page3.html", label: "Template de l'espace", icon: "fa-solid fa-earth" },
            { href: "template-pages/template-page4.html", label: "Template approximatif", icon: "fa-solid fa-worm" }
        ]

    },
    page3: {
        title: "Page 3",
        h1: "Page 3",
        button: "Retour à l'accueil",
        fieldsetText: "Ceci est un texte inséré dynamiquement dans le fieldset de la page 3."

    },
    page4: {
        title: "Page 4",
        h1: "Page 4",
        button: "Retour à l'accueil",
        fieldsetText: "Vous êtes dans la partie \"Duplication de fichier\".",
        fileButton: "Choisir un fichier",
        filePlaceholder: "Aucun fichier sélectionné",
        fileApiUrl: "/api/files",
        step1Label: "Étape 1 : Sélectionner un fichier",
        step2Label: "Étape 2 : Saisir un nouveau nom de fichier",
        step2Placeholder: "Nouveau nom de fichier",
        step3Label: "Étape 3 : Valider et envoyer",
        sendButton: "Envoyer",
        sendApiUrl: "/api/send"
    }
};