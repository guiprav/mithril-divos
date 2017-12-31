let desktopMenu = require('./desktopMenu');
let wmRoot = require('./wmRoot');

module.exports = {
  view: () => m('.desktop', [
    m(desktopMenu),
    m(wmRoot),
  ]),
};
