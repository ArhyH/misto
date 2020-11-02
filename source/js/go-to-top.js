const scrollButton = document.querySelector('[data-trigger="go-to-top"]');

function scrollToTop () {
  window.scrollTo(pageXOffset, 0);
}

scrollButton.addEventListener('click', el => {
  el.preventDefault();
  scrollToTop ();
})
