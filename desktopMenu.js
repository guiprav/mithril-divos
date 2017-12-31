let menuClock = require('./menuClock');
let menuVolCtrl = require('./menuVolCtrl');
let menuWndTitle = require('./menuWndTitle');

module.exports = {
  view: () => m('.desktopMenu', {
    class: makeClassString({
      'desktopMenu--maximized': gWmRoot.maximized,
    }),
  }, [
    m('.desktopMenu-leftBox', [
      m(menuWndTitle),
    ]),

    m('.desktopMenu-rightBox', [
      m(menuVolCtrl),
      m(menuClock),
    ]),
  ]),
};
