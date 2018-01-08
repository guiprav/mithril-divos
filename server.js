let express = require('express');
let pty = require('pty.js');

let app = express();
require('express-ws')(app);

app.use(express.static(__dirname));

app.ws('/term', (ws, req) => {
  try {
    let term = pty.spawn('bash', [], {
      name: 'xterm-color',
      cols: 80,
      rows: 24,
      cwd: process.env.HOME,
      env: process.env,
    });

    console.log(`Terminal created.`);

    term.on('data', data => {
      try {
        ws.send(data);
      }
      catch(err) {
      }
    });

    term.on('close', () => {
      console.log(`Terminal closed.`);
      ws.close();
    });

    ws.on('message', data => {
      if (data.slice(1).startsWith('"termSize":')) {
        let ts = JSON.parse(data);
        term.resize(ts.cols, ts.rows);

        return;
      }

      term.write(data);
    });

    ws.on('close', () => {
      try {
        process.kill(term.pid);
      }
      catch(err) {
      }
    });
  }
  catch(err) {
    console.error(err);
  }
});

app.listen(process.env.PORT || 8000);
