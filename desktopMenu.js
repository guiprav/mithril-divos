let menuClock = require('./menuClock');
let menuDesktopTags = require('./menuDesktopTags');
let menuLauncher = require('./menuLauncher');
let menuVolCtrl = require('./menuVolCtrl');
let menuWndTitle = require('./menuWndTitle');

module.exports = {
  oninit: function() {
    gKbd.addBinding('Meta-H', () => {
      this.hidden = !this.hidden;
      m.redraw();
    });

    gKbd.addBinding('Meta-R', () => {
      if (this.wndTitleOverride) {
        return;
      }

      this.wndTitleOverride = () => m(menuLauncher, {
        onClose: () => {
          this.wndTitleOverride = null;
        },
      });

      m.redraw();
    });
  },

  view: function() {
    let vnWndTitle = this.wndTitleOverride ?
      this.wndTitleOverride() : m(menuWndTitle);

    return m('.desktopMenu', {
      class: makeClassString({
        'desktopMenu--hidden': this.hidden,
        'desktopMenu--maximized': gWmRoot.maximized,
      }),
    }, [
      m('.desktopMenu-leftBox', [
        m(menuDesktopTags),
        vnWndTitle,
      ]),

      m('.desktopMenu-rightBox', [
        m(menuVolCtrl),
        m(menuClock),
      ]),
    ]);
  },
};
