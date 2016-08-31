(() => {
  document.addEventListener('DOMContentLoaded', () => {

    function callEditor() {
      const editor = ace.edit('json-schema');
      editor.setTheme('ace/theme/monokai');
      editor.getSession().setMode('ace/mode/json');
    }

    function loadSettings() {
      callEditor();
    }

    loadSettings();
  });
})();
