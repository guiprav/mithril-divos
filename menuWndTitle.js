module.exports = {
  view: () => {
    let active = gWmRoot.active || {};

    return m('.menuWndTitle', {
      class: makeClassString({
        'menuWndTitle--maximized': gWmRoot.maximized,
      }),
    }, [
      active.title || active.name,
    ]);
  },
};
