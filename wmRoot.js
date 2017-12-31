require('./kbd');

let metal = require('./metal');
let wnd = require('./wnd');

let nextWndKey = 0;

window.gWmRoot = {
  wnds: [],

  get maximized() {
    return (
      gWmRoot.activeWnd &&
      gWmRoot.activeWnd.maximized
    );
  },

  createWnd: wnd => {
    wnd = Object.assign({}, wnd);
    wnd.key = nextWndKey++;

    gWmRoot.wnds.push(wnd);

    m.redraw();
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
      gWmRoot.createWnd({
        desktopTag: 'web',
        component: metal,
      });
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
