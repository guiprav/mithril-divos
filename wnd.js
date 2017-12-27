module.exports = {
  oncreate: function(vn) {
    vn.attrs.dom = vn.dom;
  },

  view: function(vn) {
    let { attrs } = vn;

    return m('.wnd', {
      key: attrs.key, class: makeClassString({
        'wnd--tag_': attrs.desktopTag,
        'wnd--comp_': attrs.component.name,
        'wnd--active': attrs.active,
        'wnd--maximized': attrs.maximized,
        'wnd--floating': !attrs.maximized,
      }),
    }, m(attrs.component));
  },
};
