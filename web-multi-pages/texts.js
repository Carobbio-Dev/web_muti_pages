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
        fieldsetText: "Ceci est un texte inséré dynamiquement dans le fieldset de la page 2."

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
        fieldsetText: "Ceci est un texte inséré dynamiquement dans le fieldset de la page 4.",
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