module.exports = {
  oninit: function() {
    this.volume = 1;
  },

  view: function() {
    return m('.menuVolCtrl.leftSep.joinRightSep', [
      m('.menuVolCtrl-label', [
        Math.round(this.volume * 100), '%',
      ]),
    ]);
  },
};
