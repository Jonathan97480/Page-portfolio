document.addEventListener('DOMContentLoaded', function () {

    const IconBurger=document.querySelector('.hamburger');
    const App=document.querySelector('#App');
    const Header=document.querySelector('.header');
    const ElementHeader=document.querySelector('header');
    const FormContact=document.getElementById('my-form');




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



async function GenerateCardProject() {

    const ListCardProject=await getProjectApi();
    const cardElementBlock=document.getElementById('project');

    ListCardProject.map((project, index) => {

        const card=project.attributes;

        const CardProject=createCard(card);

        cardElementBlock.appendChild(CardProject);



    });

}


async function getProjectApi() {

    const url='https://api.jon-dev.fr/api/projects?populate=*';

    const response=await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data=await response.json();


    return data.data;

}


function createCard(_card) {

    const cover="https://api.jon-dev.fr"+_card.Cover.data.attributes.url;
    const title=_card.Title;
    const desc=splitText(_card.Description, 400);
    const div=document.createElement('div');
    div.classList.add('project__card');
    const card=`<div class="project__card__block">
                        <img class="project__card__block__pic" src="${cover}"
                            alt="image de couverture du projet ${title}" width="510" height="368">

                        <div class="project__card__block__info">
                            <h3 class="project__card__block__info__title">${title}</h3>
                            <p class="project__card__block__info__title-medium">${desc}</p>
                        </div>
                </div> `;

    div.innerHTML+=card;
    return div;



}

/* cut text size desired */
function splitText(text, size) {


    if (text.length>size) {
        text=text.substring(0, size);
        text+='...';
    }
    return text;

}


async function submitFormContact(event, form) {

    const status=document.getElementById("my-form-status");
    const data=new FormData(event.target);

    fetch(event.target.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        console.log(response);
        if (response.ok) {
            status.innerHTML="Merci pour votre soumission!";
            status.classList.add('contact__status__success');
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML=data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML="Oops! Il y a eu un problème lors de la soumission de votre formulaire"
                    status.classList.add('contact__status__error');
                }
            })
        }
    }).catch(error => {
        console.log(error);
        status.classList.add('contact__status__error');
        status.innerHTML="Oops! Il y a eu un problème lors de la soumission de votre formulaire"
    });


}