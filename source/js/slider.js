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
