(() => {
  const $ = document.querySelector.bind(document);
  const scrollToY = y => window.scrollTo(0, y);

  function registerShortcuts() {
    // Disable the shortcuts when the focus is on input fields
    Mousetrap.prototype.stopCallback = (e, element, combo) => {
      // If call button Save & Preview
      if (combo === 'mod+s') {
        return false;
      }

      // stop for input, select, and textarea
      return element.tagName === 'INPUT' ||
             element.tagName === 'SELECT' ||
             element.tagName === 'TEXTAREA' ||
             (element.contentEditable && element.contentEditable === 'true');
    };

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

      let buttonsSavePreview =
        document.getElementsByClassName('btn btn-secondary');

      Array.prototype.filter.call(buttonsSavePreview, (element) => {
        if (element.nodeName === 'BUTTON') {
          element.click();
        }
      });

      // return false to prevent default browser behavior
      // and stop event from bubbling
      return false;
    });

    // Open Udacity Frontend Nanodegree Style Guide
    Mousetrap.bind('g 1', () => {
      window.open(
        'http://udacity.github.io/frontend-nanodegree-styleguide/',
        '_blank'
      );
    });

    // Open W3C HTML validator
    Mousetrap.bind('g 2', () => {
      window.open(
        'https://validator.w3.org/#validate_by_input',
        '_blank'
      );
    });

    // Open W3C CSS validator
    Mousetrap.bind('g 3', () => {
      window.open(
        'https://jigsaw.w3.org/css-validator/#validate_by_input',
        '_blank'
      );
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    registerShortcuts();
  });
})();
