let desktopMenu = require('./desktopMenu');
let wmRoot = require('./wmRoot');

module.exports = {
  view: () => m('.app', [
    m(desktopMenu),
    m(wmRoot),
  ]),
};
