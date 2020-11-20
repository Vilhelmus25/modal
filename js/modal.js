'use strict';

const modalEventListener = document.querySelector('.button__pressStart .search__btn .button__close .modal__button--okay .modal__button--cancel');

// document.addEventListener('click', (event) => {
//     event.currentTarget.getElementById("modal__id").style.display = 'flex';               // getElementsByClassNames-re még nem működik
// });

for (let i = 0; i < modalEventListener.length; i++) {
    modalEventListener[i].addEventListener('click', toggleModal);

}




let modal = document.querySelector(".modal");
// let triggerPressStart = document.querySelector('.button__pressStart');
// let triggerSearch = document.querySelector('.search__btn');
// let closeButton = document.querySelector(".button__close");
// let okayButton = document.querySelector(".modal__button--okay");
// let cancelButton = document.querySelector(".modal__button--cancel");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


modalEventListener.addEventListener("click", toggleModal);
// triggerPressStart.addEventListener("click", toggleModal);
// triggerSearch.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// okayButton.addEventListener("click", toggleModal);
// cancelButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);