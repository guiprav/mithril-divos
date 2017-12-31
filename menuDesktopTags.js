module.exports = {
  oninit: function() {
    this.switchCmd = num => {
      let tag = gDesktop.tags[num - 1];

      if (!tag) {
        return;
      }

      if (gDesktop.activeTag === tag) {
        gDesktop.activeTag = null;
        gWmRoot.activeWnd = null;
        m.redraw();

        return;
      }

      gDesktop.activeTag = tag;

      if (tag.lastActiveWnd) {
        tag.lastActiveWnd.makeActive();
      }
      else {
        gWmRoot.activeWnd = null;
      }

      m.redraw();
    };

    for (let i = 1; i <= 10; ++i) {
      gKbd.addBinding(`Meta-${i}`, () => {
        this.switchCmd(i);
      });
    }
  },

  view: function() {
    return m('.menuDesktopTags.rightSep', [
      ...gDesktop.tags.map((tag, i) => {
        let active = tag === gDesktop.activeTag;

        return m('button.menuDesktopTags-tag', {
          class: makeClassString({
            'menuDesktopTags-tag--': tag.name,
            'menuDesktopTags-tag--active': active,
          }),

          onclick: () => this.switchCmd(i + 1),
        }, tag.sym);
      }),
    ]);
  },
};
