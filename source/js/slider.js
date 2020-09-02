let buttonPrev = document.querySelector('[data-role="button-prev"]');
let buttonNext = document.querySelector('[data-role="button-next"]');
let slides = document.querySelectorAll('[data-role="slide"]');
let slideCounter = document.querySelector('[data-role="slide-counter"]');
let i = 0;

function nextSlide () {
  slides[i].classList.remove('is-active');
  slides[i].classList.remove('is-next');
  slides[i].classList.add('invisible-right');

  i++;

  // slideCounter.innerHTML = ('0' + (1 + i) + '&nbsp;');

  if (i >= slides.length) {
      i = 0;
  }

  slides[i].classList.add('is-active');
  slides[i].classList.remove('is-next');
  slides[i].classList.remove('invisible-right');

  slides[i+1].classList.add('is-next');
  slides[i+1].classList.remove('invisible-right');
}

function prevSlide () {
  slides[i].classList.remove('is-active');
  slides[i].classList.remove('is-next');
  slides[i].classList.add('invisible-right');

  i = i - 1;

  // slideCounter.innerHTML = ('0' - (1 + i) + '&nbsp;');

  if (i < 0) {
    i = slides.length - 1;
  }

  slides[i].classList.add('is-active');
  slides[i].classList.remove('is-next');
  slides[i].classList.remove('invisible-right');

  slides[i-1].classList.add('is-next');
  slides[i-1].classList.remove('invisible-right');
}

buttonNext.addEventListener('click', function () {
  nextSlide();
})

buttonPrev.addEventListener('click', function () {
  prevSlide();
})

if (slides[i] != 0) {
  buttonPrev.classList.remove('is-disabled');
}
