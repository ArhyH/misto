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

  if (i >= slides.length) {
      i = 0;
  }

  slides[i].classList.add('is-active');
  slides[i].classList.remove('is-next');
  slides[i].classList.remove('invisible-right');

  slides[i+1].classList.add('is-next');
  slides[i+1].classList.remove('invisible-right');

  slideCounter.innerHTML = `0${i+1}&nbsp;`;
}

function prevSlide () {
  slides[i].classList.remove('is-active');
  slides[i].classList.remove('is-next');
  slides[i].classList.add('invisible-right');

  i = i - 1;

  if (i < 0) {
    i = slides.length - 1;
  }

  slides[i].classList.add('is-active');
  slides[i].classList.remove('is-next');
  slides[i].classList.remove('invisible-right');

  slides[i-1].classList.add('is-next');
  slides[i-1].classList.remove('invisible-right');

  slideCounter.innerHTML = `0${i+1}&nbsp;`;
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
