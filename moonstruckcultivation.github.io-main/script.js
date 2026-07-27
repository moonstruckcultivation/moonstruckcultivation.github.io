(() => {
  const buttons = document.querySelectorAll('.language-button');
  const contents = document.querySelectorAll('.language-content');

  if (!buttons.length || !contents.length) return;

  const showLanguage = (language) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    contents.forEach((content) => {
      const isActive = content.id === `content-${language}`;
      content.classList.toggle('is-active', isActive);
      content.hidden = !isActive;
    });

    document.documentElement.lang = language;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => showLanguage(button.dataset.language));
  });
})();
