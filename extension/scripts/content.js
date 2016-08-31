(() => {
  const $ = document.querySelector.bind(document);
  const scrollToY = y => window.scrollTo(0, y);

  function registerShortcuts() {
    // Show modal API
    Mousetrap.bind('g a', () => {
      $('ul.nav > li:nth-child(1) > a').click();
    });

    // Go to Dashboard
    Mousetrap.bind('g d', () => {
      $('ul.nav > li:nth-child(2) > a').click();
    });

    // Scroll to top
    Mousetrap.bind('g g', () => {
      scrollToY(0);
    });

    // Scroll to bottom
    Mousetrap.bind('G', () => {
      scrollToY(document.body.scrollHeight);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    registerShortcuts();
  });
})();
