let menuAutocomplete = require('./menuAutocomplete');

module.exports = {
  oninit: function(vn) {
    let attrs = this.attrs = vn.attrs;
    let getCb = k => attrs[k] || function() {};

    this.rows = gCmds.list.map(name => ({
      key: name, cols: [name],
    }));

    this.onClose = getCb('onClose');

    this.onSearch = terms => this.rows.filter(
      row => row.key.startsWith(terms.split(' ')[0])
    );

    this.onSelect = row => {
      gCmds.run(row.key);
      this.onClose();
    };
  },

  view: function() {
    return m('.menuLauncher', [
      m(menuAutocomplete, {
        looks: 'menuLauncher',

        onBlur: this.onClose,
        onClose: this.onClose,
        onSearch: this.onSearch,
        onSelect: this.onSelect,
      }),
    ]);
  },
};
