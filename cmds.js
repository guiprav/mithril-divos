window.gCmds = {
  get list() {
    return Object.keys(gFsRoot.bin);
  },

  run(name, ...args) {
    let fileNode = gFsRoot.bin[name];

    if (!fileNode) {
      throw new Error(`Command not found: ${name}`);
    }

    let mod = fileNode.require();

    if (mod.divModuleType !== 'program') {
      throw new Error(`${name} is not a program`);
    }

    gProcMan.run(mod, ...args);
  },
};
