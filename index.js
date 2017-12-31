window.$ = window.jQuery = require('jquery');
require('jquery-ui-dist/jquery-ui');

require('./kbd');
require('./metal');
require('./wmRoot');

window.m = require('mithril');
window.makeClassString = require('./makeClassString');

let desktop = require('./desktop');

document.addEventListener('DOMContentLoaded', () => {
  m.mount(document.body, desktop);
});
