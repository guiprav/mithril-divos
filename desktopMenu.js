let menuClock = require('./menuClock');
let menuDesktopTags = require('./menuDesktopTags');
let menuVolCtrl = require('./menuVolCtrl');
let menuWndTitle = require('./menuWndTitle');

module.exports = {
  oninit: function() {
    gKbd.addBinding('Meta-H', () => {
      this.hidden = !this.hidden;
      m.redraw();
    });
  },

  view: function() {
    return m('.desktopMenu', {
      class: makeClassString({
        'desktopMenu--hidden': this.hidden,
        'desktopMenu--maximized': gWmRoot.maximized,
      }),
    }, [
      m('.desktopMenu-leftBox', [
        m(menuDesktopTags),
        m(menuWndTitle),
      ]),

      m('.desktopMenu-rightBox', [
        m(menuVolCtrl),
        m(menuClock),
      ]),
    ]);
  },
};
