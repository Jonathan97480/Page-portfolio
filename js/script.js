document.addEventListener('DOMContentLoaded', function () {

    const IconBurger = document.querySelector('.hamburger');
    const App = document.querySelector('#App');
    const Header = document.querySelector('.header');
    const ElementHeader = document.querySelector('header');
    const FormContact = document.getElementById('my-form');




    IconBurger.addEventListener('click', function () {
        Header.classList.toggle('header__open');
        ElementHeader.classList.toggle('headerActive');
    });

    GenerateCardProject();


    FormContact.addEventListener('submit', function (event) {
        event.preventDefault();
        submitFormContact(event, FormContact);
    });


}, false);




function GenerateCardProject() {
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

    const cardElementBlock = document.getElementById('project');
    projects.forEach(card => {
        const CardProject = createCard(card);
        CardProject.style.cursor = "pointer";
        CardProject.addEventListener("click", () => {
            window.open(`project.html?project=${encodeURIComponent(card.Title)}`, "_blank");
        });
        cardElementBlock.appendChild(CardProject);
    });
}


function createCard(_card) {
    const cover = _card.Cover;
    const title = _card.Title;
    const desc = splitText(_card.Description, 400);
    const div = document.createElement('div');
    div.classList.add('project__card');
    const card = `<div class="project__card__block">
                        <img class="project__card__block__pic" src="${cover}"
                            alt="image de couverture du projet ${title}" width="510" height="368">

                        <div class="project__card__block__info">
                            <h3 class="project__card__block__info__title">${title}</h3>
                            <p class="project__card__block__info__title-medium">${desc}</p>
                        </div>
                </div> `;

    div.innerHTML += card;
    return div;
}

/* cut text size desired */
function splitText(text, size) {


    if (text.length > size) {
        text = text.substring(0, size);
        text += '...';
    }
    return text;

}


async function submitFormContact(event, form) {

    const status = document.getElementById("my-form-status");
    const data = new FormData(event.target);

    fetch(event.target.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        console.log(response);
        if (response.ok) {
            status.innerHTML = "Merci pour votre soumission!";
            status.classList.add('contact__status__success');
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! Il y a eu un problème lors de la soumission de votre formulaire"
                    status.classList.add('contact__status__error');
                }
            })
        }
    }).catch(error => {
        console.log(error);
        status.classList.add('contact__status__error');
        status.innerHTML = "Oops! Il y a eu un problème lors de la soumission de votre formulaire"
    });


}