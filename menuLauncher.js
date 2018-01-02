let menuAutocomplete = require('./menuAutocomplete');
let metal = require('./metal');

module.exports = {
  oninit: function(vn) {
    let attrs = this.attrs = vn.attrs;
    let getCb = k => attrs[k] || function() {};

    this.rows = [
      { key: 'metal', cols: ['metal', 'Metal Web Browser'] },
      { key: 'none', cols: ['none', 'Just a placeholder row'] },
    ];

    this.onClose = getCb('onClose');

    this.onSearch = terms => this.rows.filter(
      row => row.key.startsWith(terms.split(' ')[0])
    );

    this.onSelect = row => {
      if (row.key === 'metal') {
        gWmRoot.createWnd({ component: metal });
      }

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
