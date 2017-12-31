module.exports = {
  oninit: function(vn) {
    this.metal = vn.attrs.metal;
  },

  oncreate: function(vn) {
    let input = vn.dom.querySelector('input');

    input.addEventListener('keydown', ev => {
      if (ev.key !== 'Enter') {
        return;
      }

      this.metal.url = input.value;
      m.redraw();
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
