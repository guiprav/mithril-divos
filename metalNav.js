module.exports = {
  oninit: function(vn) {
    this.metal = vn.attrs.metal;
  },

  oncreate: function(vn) {
    let $input = $(vn.dom).find('.metalNav-urlInput');

    $input
      .on('dblclick', () => {
        if (this.focus) {
          return;
        }

        this.focus = true;
        $input.focus().select();
      })
      .on('focus', () => {
        if (this.focus) {
          return;
        }

        $input.blur();
      })
      .on('blur', () => {
        this.focus = false;
      })
      .on('keydown', ev => {
        switch (ev.key) {
          case 'Escape':
            $input.val(this.metal.url).blur();
            break;

          case 'Enter':
            this.metal.url = $input.val();

            $input.blur();
            m.redraw();

            break;
        }
      });
  },

  view: function(vn) {
    let { inMenuWndTitle } = vn.attrs;

    return m('.metalNav', [
      m('input.metalNav-urlInput', {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        spellcheck: false,
        value: this.metal.url,

        class: makeClassString({
          'metalNav-urlInput--active': this.metal.wnd.active,
          'metalNav-urlInput--inWnd': !inMenuWndTitle,
          'metalNav-urlInput--inMenuWndTitle': inMenuWndTitle,
        }),
      }),
    ]);
  },
};
