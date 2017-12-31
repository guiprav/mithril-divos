let metalNav = require('./metalNav');
let metalFrame = require('./metalFrame');

window.metal = module.exports = {
  name: 'metal',

  oninit: function(vn) {
    this.wnd = vn.attrs.wnd;
    this.wnd.componentState = this;

    this.wnd.title = 'Metal Web Browser';

    Object.defineProperty(this.wnd, 'menuWndTitleVNode', {
      get: () => {
        if (!this.wnd.maximized) {
          return null;
        }

        return m(metalNav, {
          metal: this,
          inMenuWndTitle: true,
        });
      },
    });

    this.url = 'https://suckless.org';
  },

  view: function() {
    return m('.metal', [
      m(metalNav, { metal: this }),
      m(metalFrame, { metal: this }),
    ]);
  },
};
