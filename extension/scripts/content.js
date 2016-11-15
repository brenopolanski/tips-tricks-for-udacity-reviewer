(() => {
  const $ = document.querySelector.bind(document);
  const scrollToY = y => window.scrollTo(0, y);

  function registerShortcuts() {
    // Disable the shortcuts when the focus is on input fields
    Mousetrap.prototype.stopCallback = () => {
      return false;
    }

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

    // Call button Save & Preview
    Mousetrap.bind('mod+s', () => {
      // 'mod+s' is a helper to ['command+s', 'ctrl+s']

      let buttonsSavePreview = document.getElementsByClassName('btn btn-secondary');

      Array.prototype.filter.call(buttonsSavePreview, function(elementoTeste) {
        if (elementoTeste.nodeName === 'BUTTON') {
          elementoTeste.click();
        }
      });

      // return false to prevent default browser behavior
      // and stop event from bubbling
      return false;
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    registerShortcuts();
  });
})();
