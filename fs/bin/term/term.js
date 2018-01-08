let Terminal = require('xterm2');

require('xterm2/addons/fit')(Terminal);

module.exports = {
  name: 'term',

  oninit: function(vn) {
    this.wnd = vn.attrs.wnd;
    this.wnd.componentState = this;
    this.wnd.title = 'Terminal';

    let portPostfix = location.port ?
      `:${location.port}` : '';

    this.socket = new WebSocket(
      `ws://${location.hostname}${portPostfix}/term`
    );

    this.socket.addEventListener('open', () => {
      this.term.on('data', data => {
        this.socket.send(data);
      });

      this.term.on('resize', size => {
        this.$dom.find('.terminal')
          .css('width', 7.22 * size.cols)
          .css('height', 14 * size.rows);

        // FIXME
        this.socket.send(JSON.stringify({
          termSize: {
            cols: size.cols,
            rows: size.rows,
          },
        }));
      });
    });

    this.socket.addEventListener('message', ev => {
      this.term.write(ev.data);
    });

    this.socket.addEventListener('close', () => {
      this.wnd.close();
    });

    this.wnd.on('close', () => {
      this.socket.close();
    });
  },

  oncreate: function(vn) {
    this.dom = vn.dom;
    this.$dom = $(this.dom);

    this.term = new Terminal();
    this.term.open(this.$dom.find('.term-term')[0]);

    let lastWidth = 0;
    let lastHeight = 0;

    let frame = () => {
      if (this.wnd.closed) {
        return;
      }

      requestAnimationFrame(frame);

      let rect = this.dom.getBoundingClientRect();

      if (
        lastWidth !== rect.width
        || lastHeight !== rect.height
      ) {
        lastWidth = rect.width;
        lastHeight = rect.height;

        this.term.fit();
      }
    };

    frame();
  },

  view: function() {
    return m('.term', [
      m('.term-term'),
    ]);
  },
};
