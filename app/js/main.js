import '../scss/main.scss';

const headerNav = document.querySelector('[data-js="header-nav"]');

headerNav.addEventListener('click', handleHeaderNavClick);
window.matchMedia('(min-width: 1024px)').addEventListener('change', ({ matches }) => {
  if (matches && headerNav.classList.contains('active')) {
    toggleHeaderGuide();
  }
});

function handleHeaderNavClick({ target }) {
  if (target.matches('[data-js="guide-button"]')) {
    toggleHeaderGuide();
  }
}

function toggleHeaderGuide() {
  const guide = document.querySelector('[data-js="header-guide"]');
  const guideButton = document.querySelector('[data-js="guide-button"]');
  const active = headerNav.classList.contains('active');

  headerNav.classList.toggle('active');
  document.documentElement.classList.toggle('no-scroll');
  active && closing(guide);
  guideButton.setAttribute('aria-pressed', !active);
  guideButton.setAttribute('aria-expanded', !active);
}

function closing(element) {
  element.classList.add('closing');

  element.addEventListener(
    'animationend',
    () => {
      element.classList.remove('closing');
    },
    { once: true }
  );
}
