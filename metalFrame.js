module.exports = {
  oninit: function(vn) {
    this.metal = vn.attrs.metal;
  },

  view: function() {
    return m('.metalFrame', {
      class: makeClassString({
        'metalFrame--floating': !this.metal.wnd.maximized,
      }),
    }, [
      m('iframe.metalFrame-iframe', {
        src: this.metal.url,
      }),
    ]);
  },
};
