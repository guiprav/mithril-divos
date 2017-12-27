let moment = require('moment');

module.exports = {
  oncreate: function(vn) {
    let getElem = name => vn.dom.querySelector(
      `.menuClock-${name}`
    );

    let update = () => {
      getElem('date').textContent =
        moment().format('ddd DD MMM');

      getElem('time').textContent =
        moment().format('hh:mm');
    };

    update();
    this.interval = setInterval(update, 250);
  },

  onremove: function() {
    clearInterval(this.interval);
  },

  view: function() {
    return m('.menuClock', [
      m('.menuClock-date.leftSep.joinRightSep'),
      m('.menuClock-time.leftSep'),
    ]);
  },
};
