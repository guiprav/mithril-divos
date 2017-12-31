module.exports = {
  oninit: function(vn) {
    let wnd = vn.attrs;

    let defaults = {
      active: true,
      maximized: true,
    };

    for (let k of Object.keys(defaults)) {
      if (wnd[k] === undefined) {
        wnd[k] = defaults[k];
      }
    }

    if (wnd.active) {
      gWmRoot.activeWnd = wnd;
      m.redraw();
    }

    Object.defineProperty(wnd, 'active', {
      get: function() {
        return gWmRoot.activeWnd === wnd;
      },

      set: function(active) {
        if (active) {
          gWmRoot.activeWnd = wnd;
        }
        else
        if (this.active) {
          gWmRoot.activeWnd = null;
        }

        return active;
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
