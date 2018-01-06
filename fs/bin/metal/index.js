let metal = require('./metal');

module.exports = {
  divModuleType: 'program',

  createProcess: () => ({
    start() {
      this.wnd = gWmRoot.createWnd({
        component: metal,
      });

      this.wnd.on('close', () => {
        this.terminate();
      });
    },

    terminate() {
      this.wnd.close();
      gProcMan.remove(this.id);
    },
  }),
};
