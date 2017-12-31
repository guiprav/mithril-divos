let metalNav = require('./metalNav');
let metalFrame = require('./metalFrame');

window.metal = module.exports = {
  name: 'metal',

  oninit: function(vn) {
    this.wnd = vn.attrs.wnd;
    this.wnd.componentState = this;

    this.url = 'https://suckless.org';
  },

  view: function() {
    return m('.metal', [
      m(metalNav, { metal: this }),
      m(metalFrame, { metal: this }),
    ]);
  },
};
