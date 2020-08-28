const menuOpenTrigger = document.querySelector('[data-trigger="open-menu"]');
const menuCloseTrigger = document.querySelector('[data-trigger="close-menu"]');
const modalBackdrop = document.querySelector('.modal-backdrop');
const triggerMenu = document.querySelector('[data-triggeredBy="menu"');
const body = document.querySelector('[data-overflow]');
const hideClassname = 'is-hidden';

function showMenu () {
  triggerMenu.classList.remove(hideClassname);
  modalBackdrop.classList.remove(hideClassname);
  body.classList.add('disable-scroll');
}

function hideMenu () {
  triggerMenu.classList.add(hideClassname);
  modalBackdrop.classList.add(hideClassname);
  body.classList.remove('disable-scroll');
}


menuOpenTrigger.addEventListener('click', el => {
  el.preventDefault();
  showMenu();
})

menuCloseTrigger.addEventListener('click', el => {
  hideMenu();
})

modalBackdrop.addEventListener('click', el => {
  hideMenu();
})

window.onkeyup = function () {
  if (event.keyCode == 27) {
    hideMenu();
  }
}
