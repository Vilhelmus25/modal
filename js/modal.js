'use strict';

// így kell multiplét selectorozni (querySelectorAll, valamint felsorolva a class-ok ,-vel és whitespace-el elválasztva)
const modalEventListener = document.querySelectorAll('.button__pressStart, .search__btn, .button__close, .modal__button--okay, .modal__button--cancel');

for (let i = 0; i < modalEventListener.length; i++) {
    modalEventListener[i].addEventListener('click', toggleModal);       // eseményfigyelőt teszünk rájuk, kattintásra ('click') és meghívjuk a toggleModalt
}

let modal = document.querySelector(".modal");       // a modált is querySelectorozzuk

function toggleModal() {
    modal.classList.toggle("show-modal");       // a show-modal osztályban van az átállítás
}

function windowOnClick(event) {
    if (event.target === modal) {               // ha az ablakból kikattintunk akkor becsukja
        toggleModal();
    }
}

window.addEventListener("click", windowOnClick);