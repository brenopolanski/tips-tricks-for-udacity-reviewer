(() => {
  const $ = document.querySelector.bind(document);
  const scrollToY = y => window.scrollTo(0, y);

  function openPage(url) {
    return window.open(url, '_blank');
  }

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

      const buttonsSavePreview =
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

    // Check all radio buttons with the value `passed`
    Mousetrap.bind('c r', () => {
      const radioButtonsPassed = document.querySelectorAll('input[type=radio]');

      Array.prototype.filter.call(radioButtonsPassed, (element) => {
        if (element.value === 'passed') {
          element.checked = true;
          element.click();
        }
      });

      // return false to prevent default browser behavior
      // and stop event from bubbling
      return false;
    });

    // Open Udacity Frontend Nanodegree Style Guide
    Mousetrap.bind('g 1', () => {
      openPage('http://udacity.github.io/frontend-nanodegree-styleguide/');
    });

    // Open W3C HTML validator
    Mousetrap.bind('g 2', () => {
      openPage('https://validator.w3.org/#validate_by_input');
    });

    // Open W3C CSS validator
    Mousetrap.bind('g 3', () => {
      openPage('https://jigsaw.w3.org/css-validator/#validate_by_input');
    });

    // Open Udacity Review Parser
    Mousetrap.bind('g 4', () => {
      openPage('https://simplydallas.github.io/udacityreviewparser/');
    });

    // Open Bootlint
    Mousetrap.bind('g 5', () => {
      openPage('http://www.bootlint.com/');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    registerShortcuts();
  });
})();
