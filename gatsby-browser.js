exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

exports.onInitialClientRender = () => {
  const cssClass = 'keyboard-navigation';

  function keyDownHandler(evt) {
    if ((evt && evt.key === 'Tab') || evt.key === 'Enter') {
      window.document.body.classList.add(cssClass);
    }
  }

  function clickHandler() {
    window.document.body.classList.remove(cssClass);
  }

  window.addEventListener('keydown', keyDownHandler);
  window.addEventListener('click', clickHandler);
};
