module.exports = {
  view: () => {
    let activeWnd = gWmRoot.activeWnd || {
      component: {},
    };

    let wndSwitching = false;

    // TODO: Report Mithril bug and remove this workaround.
    if (activeWnd.key && activeWnd !== this.lastWnd) {
      wndSwitching = true;
      this.lastWnd = activeWnd;

      requestAnimationFrame(() => {
        m.redraw();
      });
    }

    let title = (
      (!wndSwitching && activeWnd.menuWndTitleVNode) ||
      activeWnd.title ||
      activeWnd.name ||
      activeWnd.component.name ||
      ''
    );

    return m('.menuWndTitle', {
      class: makeClassString({
        'menuWndTitle--maximized': gWmRoot.maximized,
      }),
    }, title);
  },
};
