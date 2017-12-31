let desktopMenu = require('./desktopMenu');
let wmRoot = require('./wmRoot');

window.gDesktop = {
  tags: [
    { name: 'web', sym: '\ue1ba' },
    { name: 'term', sym: '\ue21a' },
    { name: 'draw', sym: '\ue858' },
    { name: 'im', sym: '\ue11f' },
    { name: 'game', sym: '\ue216' },
  ],
};

gDesktop.activeTag = gDesktop.tags[0];

module.exports = {
  view: () => m('.desktop', [
    m(desktopMenu),
    m(wmRoot),
  ]),
};
