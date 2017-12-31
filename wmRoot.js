require('./kbd');

let metal = require('./metal');
let wnd = require('./wnd');

let nextWndKey = 0;

window.gWmRoot = {
  wnds: [],

  get activeWnd() {
    return gWmRoot._activeWnd;
  },

  set activeWnd(wnd) {
    let tag = (() => {
      if (wnd) {
        return gDesktop.tags.find(
          x => x.name === wnd.desktopTag
        );
      }
      else {
        return gDesktop.activeTag;
      }
    })();

    if (tag) {
      tag.lastActiveWnd = wnd;
    }

    gDesktop.activeTag = tag;
    gWmRoot._activeWnd = wnd;
    m.redraw();

    return wnd;
  },

  get maximized() {
    return (
      gWmRoot.activeWnd &&
      gWmRoot.activeWnd.maximized
    );
  },

  createWnd: wnd => {
    wnd = Object.assign({}, wnd);
    wnd.key = nextWndKey++;

    gDesktop.activeTag =
      gDesktop.activeTag || gDesktop.tags[0];

    wnd.desktopTag =
      wnd.desktopTag || gDesktop.activeTag.name;

    gWmRoot.wnds.push(wnd);
    m.redraw();

    return wnd;
  },
};

module.exports = {
  oninit: function() {
    gKbd.addBinding('Meta-Shift-C', () => {
      let { activeWnd } = gWmRoot;
      activeWnd && activeWnd.close();
    });

    gKbd.addBinding('Meta-M', () => {
      let { activeWnd } = gWmRoot;

      if (!activeWnd) {
        return;
      }

      activeWnd.toggleMaximized();
    });

    gKbd.addBinding('Meta-B', () => {
      gWmRoot.createWnd({ component: metal });
    });

    for (let evName of ['keydown', 'keyup']) {
      document.addEventListener(evName, ev => {
        if (ev.key !== 'Meta' || !gWmRoot.dom) {
          return;
        }

        let dragMode = ev.type === 'keydown';

        let addOrRemoveClass = dragMode ?
          'addClass' : 'removeClass';

        gWmRoot.$dom[addOrRemoveClass](
          'wmRoot--dragMode'
        );

        let enableOrDisableDraggable = dragMode ?
          'enable' : 'disable';

        for (let wnd of gWmRoot.wnds) {
          if (wnd.maximized) {
            continue;
          }

          try {
            wnd.$dom.draggable(enableOrDisableDraggable);
          }
          catch(err) {
            console.error(err);
          }
        }
      });
    }
  },

  oncreate: function(vn) {
    gWmRoot.dom = vn.dom;
    gWmRoot.$dom = $(gWmRoot.dom);
  },

  view: function() {
    return m('.wmRoot', gWmRoot.wnds.map(
      x => m(wnd, x)
    ));
  },
};
