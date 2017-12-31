module.exports = {
  oninit: function(vn) {
    let wnd = vn.attrs;

    Object.defineProperty(wnd, 'active', {
      get: function() {
        return gWmRoot.activeWnd === wnd;
      },
    });
  },

  oncreate: function(vn) {
    let wnd = vn.attrs;

    wnd.dom = vn.dom;
    wnd.$dom = $(wnd.dom);

    wnd.$dom
      .resizable({ handles: 'all' })
      .draggable();
  },

  view: function(vn) {
    let wnd = vn.attrs;

    return m('.wnd', {
      key: wnd.key, class: makeClassString({
        'wnd--tag_': wnd.desktopTag,
        'wnd--comp_': wnd.component.name,
        'wnd--active': wnd.active,
        'wnd--maximized': wnd.maximized,
        'wnd--floating': !wnd.maximized,
      }),
    }, m(wnd.component, { wnd }));
  },
};
