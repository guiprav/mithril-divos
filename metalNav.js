module.exports = {
  oninit: function(vn) {
    this.metal = vn.attrs.metal;
  },

  oncreate: function(vn) {
    let input = vn.dom.querySelector('input');

    // TODO: Write a helper to do this.
    input.addEventListener('change', () => {
      this.value = input.value;
    });
  },

  view: function() {
    return m('.metalNav', [
      m('input.metalNav-urlInput', {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        spellcheck: false,
        value: this.metal.url,

        class: makeClassString({
          'metalNav-urlInput--active': this.metal.wnd.active,
        }),
      }),
    ]);
  },
};
