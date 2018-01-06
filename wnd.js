let EventEmitter = require('events');

module.exports = {
  oninit: function(vn) {
    let wnd = vn.attrs;

    let defaults = {
      active: true,
      maximized: true,
      x: 70,
      y: 60,
      width: Math.max(320, $('body').width() - 720),
      height: Math.max(240, $('body').height() - 360),
    };

    for (let k of Object.keys(defaults)) {
      if (wnd[k] === undefined) {
        wnd[k] = defaults[k];
      }
    }

    wnd.ee = new EventEmitter();

    for (let k of ['on', 'once', 'removeListener']) {
      wnd[k] = (...args) => wnd.ee[k](...args);
    }

    if (wnd.active) {
      gWmRoot.activeWnd = wnd;
      m.redraw();
    }

    Object.defineProperty(wnd, 'active', {
      get: () => {
        return gWmRoot.activeWnd === wnd;
      },

      set: active => {
        if (active) {
          gWmRoot.activeWnd = wnd;
        }
        else
        if (wnd.active) {
          gWmRoot.activeWnd = null;
        }

        return active;
      },
    });

    wnd.makeActive = () => {
      document.activeElement.blur();
      wnd.active = true;

      m.redraw();
    };

    wnd.toggleMaximized = () => {
      wnd.maximized = !wnd.maximized;
      m.redraw();
    };

    wnd.close = () => {
      if (wnd.closed) {
        return;
      }

      wnd.closed = true;
      wnd.active = false;

      let { wnds } = gWmRoot;

      wnds.splice(wnds.indexOf(wnd), 1);
      wnd.ee.emit('close');

      m.redraw();
    };

    wnd.onFrame = () => {
      if (!wnd.dom) {
        return;
      }

      requestAnimationFrame(wnd.onFrame);

      let isFocused = (
        wnd.dom === document.activeElement ||
        $.contains(wnd.dom, document.activeElement)
      );

      if (isFocused && !wnd.active) {
        wnd.makeActive();
      }

      let draggingSel = '.ui-draggable-dragging';
      let resizingSel = '.ui-resizable-resizing';

      wnd.dragging = wnd.$dom.is(draggingSel);
      wnd.resizing = wnd.$dom.is(resizingSel);

      if (!wnd.maximized) {
        if (wnd.dragging || wnd.resizing) {
          let style = getComputedStyle(wnd.dom);

          let values = {
            x: Number(style.left),
            y: Number(style.top),
            width: Number(style.width),
            height: Number(style.height),
          };

          for (let k of Object.keys(values)) {
            if (wnd[k] === values[k]) {
              return;
            }

            wnd[k] = values[k];
          }
        }
        else {
          wnd.$dom
            .css('left', `${wnd.x}px`)
            .css('top', `${wnd.y}px`)
            .css('width', `${wnd.width}px`)
            .css('height', `${wnd.height}px`);
        }
      }
    };
  },

  oncreate: function(vn) {
    let wnd = vn.attrs;

    wnd.dom = vn.dom;
    wnd.$dom = $(wnd.dom);

    wnd.$dom
      .resizable({ handles: 'all' })
      .draggable();

    wnd.$dom
      .on('click', () => wnd.makeActive())
      .on('dragstart', () => wnd.makeActive())
      .on('resizestart', () => wnd.makeActive());

    wnd.onFrame();
  },

  onremove: function(vn) {
    let wnd = vn.attrs;

    wnd.dom = null;
    wnd.$dom = $(wnd.dom);
  },

  view: function(vn) {
    let wnd = vn.attrs;

    let onAnotherTag = (
      !gDesktop.activeTag ||
      gDesktop.activeTag.name !== wnd.desktopTag
    );

    return m('.wnd', {
      key: wnd.key, class: makeClassString({
        'wnd--tag_': wnd.desktopTag,
        'wnd--comp_': wnd.component.name,
        'wnd--active': wnd.active,
        'wnd--onAnotherTag': onAnotherTag,
        'wnd--maximized': wnd.maximized,
        'wnd--floating': !wnd.maximized,
      }),
    }, m(wnd.component, { wnd }));
  },
};
