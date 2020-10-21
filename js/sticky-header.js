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

