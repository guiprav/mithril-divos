let menuClock = require('./menuClock');
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
      m(menuClock),
    ]),
  ]),
};
