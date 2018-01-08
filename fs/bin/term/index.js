let term = require('./term');

module.exports = {
  divModuleType: 'program',

  createProcess: () => ({
    start() {
      this.wnd = gWmRoot.createWnd({
        component: term,
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
