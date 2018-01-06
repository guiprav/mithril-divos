window.gProcMan = {
  nextPid: 1,
  processes: {},

  run(program, ...args) {
    let proc = program.createProcess();

    proc.id = gProcMan.nextPid++;
    gProcMan.processes[proc.id] = proc;

    try {
      proc.start(...args);
    }
    catch(err) {
      gProcMan.remove(proc.id);
      throw err;
    }
  },

  remove(id) {
    delete gProcMan.processes[id];
  },
};
