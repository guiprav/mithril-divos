let wnd = require('./wnd');

window.gWmRoot = {
  wnds: [],

  get maximized() {
    return this.active && this.active.maximized;
  },
};

module.exports = {
  view: function() {
    return m('.wmRoot', gWmRoot.wnds.map(
      x => m(wnd, x)
    ));
  },
};
