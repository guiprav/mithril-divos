module.exports = {
  oninit: function(vn) {
    this.metal = vn.attrs.metal;
  },

  view: function() {
    return m('.metalFrame', [
      m('iframe.metalFrame-iframe', {
        src: this.metal.url,
      }),
    ]);
  },
};
