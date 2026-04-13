// Script pour afficher dynamiquement le détail d'un projet

// Récupère les projets depuis le même tableau que dans script.js
const projects = [
    {
        Title: "AI Tech Blog",
        Description: "AI Tech Blog est un espace dédié à l’exploration de l’intelligence artificielle et des innovations technologiques. À travers des articles passionnants, ce blog partage les dernières actualités sur l’IA, les tendances numériques et les révolutions qui façonnent le monde de demain. Que vous soyez passionné, curieux ou simple explorateur, plongez dans l’univers fascinant de l’IA et restez informé sur tout ce qui fait le futur !",
        Cover: "image/cover/Blog Ai.png",
        Link: "https://blogaitech.jon-dev.fr/"
    },
    {
        Title: "Pepe-Studio",
        Description: "Pepe-Studio est une application desktop innovante, développée avec Tauri, Next.js et Rust, qui transforme les modèles de langage locaux (LLM) en agents IA autonomes capables d’agir sur le monde réel. L’interface haut de gamme permet à l’IA d’exécuter des outils en chaîne (écriture de fichiers, commandes, navigation web, gestion de terminaux, etc.) sans intervention humaine. Compatible avec de nombreux modèles (llama.cpp, gemma, mistral…), Pepe-Studio intègre un navigateur, un terminal multi-sessions, la gestion de la mémoire conversationnelle, la recherche documentaire (RAG), la synthèse vocale et bien plus. Ce projet repousse les limites de l’IA locale en offrant une expérience puissante, flexible et sécurisée pour les utilisateurs avancés.",
        Cover: "image/cover/pépé studio.png"
    },
    {
        Title: "Fréquence Oasis",
        Description: "Fréquence Oasis est une application mobile disponible sur iOS et Android, développée pour la radio chrétienne Fréquence Oasis. Elle permet d’écouter la radio en direct, d’envoyer des dédicaces, de consulter le programme de la semaine et d’accéder aux podcasts. L’application offre une expérience moderne pour rester connecté à la communauté chrétienne et suivre l’actualité de la radio où que vous soyez.",
        Cover: "image/cover/radio_oasis.webp",
        Link: "https://play.google.com/store/apps/details?id=com.jon.dev.oasisradio&hl=fr"
    },
    {
        Title: "À l'Ongle d'un Secret",
        Description: "Jon-Dev a conçu le site web de l’institut \"À l’Ongle d’un Secret\" pour mettre en avant ses services et produits de beauté Bio et vegan. Ce site offre une plateforme moderne et intuitive permettant aux clients de découvrir facilement les massages, maquillages, manucures et soins du visage proposés. Les visiteurs accèdent rapidement aux informations sur les prestations, tarifs, promotions et coordonnées, le tout sur un site responsive accessible depuis tous les appareils.",
        Cover: "image/cover/À l'Ongle d'un Secret.jpg"
    },
    {
        Title: "Mazpronos.com",
        Description: "Mazpronos.com est une plateforme de vente de pronostics sportifs en ligne, réalisée en collaboration avec TY Developper pour Mr Aboudou Andi. Le site propose une expérience utilisateur moderne, conviviale et sécurisée, dédiée aux passionnés de sport et de paris en ligne. Découvrez l’univers Mazpronos, profitez des offres exclusives et partagez vos impressions sur cette nouvelle référence du pronostic sportif.",
        Cover: "image/cover/Mazpronos.jpg"
    },
    {
        Title: "JCV CONSULT",
        Description: "JCV CONSULT est un site web réalisé pour la société de M. Christophe Vitry, en collaboration avec Jon_dev et TY Developper. Ce projet, coordonné par Runmyweb, vise à accompagner les particuliers dans l’acquisition d’un chauffe-eau solaire de qualité. Le site propose une interface claire et informative pour guider les visiteurs dans leur choix et faciliter leur démarche. Nous sommes fiers d’avoir contribué à ce projet utile et innovant !",
        Cover: "image/cover/JCV CONSULT.jpg"
    }
];

// Récupère le nom du projet dans l'URL (?project=...)
const urlParams = new URLSearchParams(window.location.search);
const projectName = urlParams.get('project');

const project = projects.find(p => p.Title === projectName);

const container = document.getElementById('project-detail');

if (project) {
    container.innerHTML = `
        <section class="project__card" style="width:100%;max-width:700px;margin:0 auto;">
            <div class="project__card__block" style="display:flex;flex-direction:column;align-items:center;">
                <h1 class="project__card__block__info__title" style="font-size:3.2rem;margin-bottom:2rem;">${project.Title}</h1>
                <img class="project__card__block__pic" src="${project.Cover}" alt="${project.Title}" style="max-width:500px;width:100%;border-radius:1rem;margin-bottom:2rem;box-shadow:0 2px 24px rgba(0,0,0,.08);">
                <div class="project__card__block__info__title-medium project-detail__desc" style="font-size:2rem;line-height:2.8rem;margin-bottom:2.5rem;">${project.Description}</div>
                ${project.Link ? `<p><a href="${project.Link}" target="_blank" rel="noopener" class="btn" style="margin-bottom:2rem;">Voir le projet</a></p>` : ''}
                <p><a href="index.html#project" class="btn">Retour au portfolio</a></p>
            </div>
        </section>
    `;
} else {
    container.innerHTML = `<p>Projet introuvable.</p><p><a href="index.html#project" class="btn">Retour au portfolio</a></p>`;
}
