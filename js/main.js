const scrollButton = document.querySelector('[data-trigger="go-to-top"]');

function scrollToTop () {
  window.scrollTo(pageXOffset, 0);
}

scrollButton.addEventListener('click', el => {
  el.preventDefault();
  scrollToTop ();
})

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

function initSlider({
  sliderName,
  visibleClassname,
  nextClassname,
  })  {

  const sliderContainerSelector = `[data-slider-root="${sliderName}"]`,
        sliderElementSelector = `[data-slider="${sliderName}"]`,
        rootContainer = document.querySelector(sliderContainerSelector),
        slides = [...document.querySelectorAll(`${sliderContainerSelector} .slide`)],
        slidesAmount = slides.length,
        outputAllNode = document.querySelector(`${sliderElementSelector}[data-slider-num="all"]`),
        outputCurrentNode = document.querySelector(`${sliderElementSelector}[data-slider-num="current"]`),
        sliderButtons = [...document.querySelectorAll(`${sliderElementSelector}[data-slider-action]`)];

  function toggleSlider({
    action,
    slideNumber
    }) {

    let currentSlideIndex = findCurrentSlideIndex(),
      futureActiveSlideIndex,
      futureNextSlideIndex;
    clearSliderClassnames();

    switch (action) {
      case 'prev':
        futureActiveSlideIndex = slides[currentSlideIndex - 1] ? currentSlideIndex - 1 : slidesAmount - 1;
        break;
      case 'next':
        futureActiveSlideIndex = slides[currentSlideIndex + 1] ? currentSlideIndex + 1 : 0;
        break;
      case 'any':
        futureActiveSlideIndex = slideNumber - 1;
        break;
      default:
        break;
    }

    futureNextSlideIndex = futureActiveSlideIndex == slidesAmount - 1 ? 0 : futureActiveSlideIndex + 1;
    slides[futureActiveSlideIndex].classList.add(visibleClassname);
    slides[futureNextSlideIndex].classList.add(nextClassname);
    outputCurrentSlide();
  }

  function findCurrentSlideIndex() {
    return slides.findIndex(el => el.classList.contains(visibleClassname));
  }

  function findNextSlideIndex() {
    return slides.findIndex(el => el.classList.contains(nextClassname));
  }

  function clearSliderClassnames() {
    if (slides[findNextSlideIndex()]) {
      slides[findNextSlideIndex()].classList.remove(nextClassname);
    }
    if (slides[findCurrentSlideIndex()]) {
      slides[findCurrentSlideIndex()].classList.remove(visibleClassname);
    }
  }

  function outputCurrentSlide() {
    outputCurrentNode.innerHTML = findCurrentSlideIndex() + 1;
  }

  outputAllNode.innerHTML = slidesAmount;
  outputCurrentSlide();
  /* Add event listeners to slider buttons */
  sliderButtons.forEach(el => {
    let buttonAction = el.dataset.sliderAction,
      buttonActionNumber = el.dataset.sliderActionNumber ? el.dataset.sliderActionNumber : null;
    el.addEventListener('click', e => {
      e.preventDefault();
      toggleSlider({
        action: buttonAction,
        slideNumber: buttonActionNumber
      });
    });
  });
}

initSlider({
  sliderName: 'gallery-slider',
  visibleClassname: 'is-active',
  nextClassname: 'is-next'
});

initSlider({
  sliderName: 'feedback-slider',
  visibleClassname: 'is-active',
  nextClassname: 'is-next'
});

function stickyHeader () {

  const header = document.querySelector('.page-header');
  const lightThemeElements = document.querySelectorAll('[data-triggeredBy="theme"]');
  const stickyClassname = 'sticky-position';
  const lightThemeClassname = 'theme--light';

  if (window.pageYOffset >= 750) {
    header.classList.add(stickyClassname);

    lightThemeElements.forEach ( el => {
      el.classList.add(lightThemeClassname);
    })
  } else {
    header.classList.remove(stickyClassname);

    lightThemeElements.forEach ( el => {
      el.classList.remove(lightThemeClassname);
    } )
  }
}

window.onscroll = function () {
  stickyHeader ();
}
