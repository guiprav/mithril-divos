window.$ = window.jQuery = require('jquery');
require('jquery-ui-dist/jquery-ui');

require('./cmds');
require('./fs');
require('./kbd');
require('./procMan');
require('./wmRoot');

window.m = require('mithril');
window.makeClassString = require('./makeClassString');

let desktop = require('./desktop');

document.addEventListener('DOMContentLoaded', () => {
  m.mount(document.body, desktop);
});
